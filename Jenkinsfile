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
                    // Ensure kubeconfig server hostname matches certificate SANs used by Docker Desktop
                    sh '''
                      kubectl config view --raw > /tmp/kubeconfig
                      sed -E 's#host.docker.internal:6443#localhost:6443#g' /tmp/kubeconfig > /tmp/kubeconfig2 || true
                      export KUBECONFIG=/tmp/kubeconfig2
                      kubectl get nodes
                      kubectl apply -f k8s/deployment.yaml
                    '''
                }
            }
        }
    }
}
