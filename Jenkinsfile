pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/GitAllStarA/my-nextjs-portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-portfolio:latest .'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                                withKubeConfig([credentialsId: 'local-k8s-config']) {
                                        // Try several server hostnames (to match certificate SANs and reachability)
                                        sh '''
                                            kubectl config view --raw > /tmp/kubeconfig
                                            set -e
                                            tried=0
                                            for host in host.docker.internal docker-for-desktop kubernetes.docker.internal localhost; do
                                                tried=$((tried+1))
                                                sed -E 's#(server:[[:space:]]*https?://)[^:/]+(:[0-9]+)#\1'"$host""\2#g" /tmp/kubeconfig > /tmp/kubeconfig2 || true
                                                export KUBECONFIG=/tmp/kubeconfig2
                                                echo "Trying kube server host: $host"
                                                if kubectl get nodes >/tmp/kubecheck 2>&1; then
                                                    echo "Connected to cluster using server host: $host"
                                                    kubectl apply -f k8s/deployment.yaml
                                                    exit 0
                                                else
                                                    echo "Attempt with $host failed:" && tail -n 20 /tmp/kubecheck || true
                                                fi
                                            done

                                            # Last-resort: try original kubeconfig with insecure TLS (not recommended for production)
                                            export KUBECONFIG=/tmp/kubeconfig
                                            echo "All host attempts failed — trying --insecure-skip-tls-verify fallback"
                                            if kubectl --insecure-skip-tls-verify=true get nodes >/tmp/kubecheck 2>&1; then
                                                echo "Connected with --insecure-skip-tls-verify"
                                                kubectl --insecure-skip-tls-verify=true apply -f k8s/deployment.yaml
                                                exit 0
                                            fi

                                            echo "Unable to connect to Kubernetes API. Last output:" && cat /tmp/kubecheck || true
                                            exit 1
                                        '''
                                }
            }
        }
    }
}
