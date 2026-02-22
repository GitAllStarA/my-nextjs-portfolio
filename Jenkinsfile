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
                    sh 'kubectl apply --insecure-skip-tls-verify=true -f k8s/'
                    sh 'kubectl apply --insecure-skip-tls-verify=true -f k8s/csr'
                }
            }
        }
    }
}
