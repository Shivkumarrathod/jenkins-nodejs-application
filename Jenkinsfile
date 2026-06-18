pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                sh '''
                    mkdir -p devops
                    cd devops

                    if [ -d jenkins-nodejs-application ]; then
                        rm -rf jenkins-nodejs-application
                    fi

                    git clone -b main https://github.com/Shivkumarrathod/jenkins-nodejs-application.git
                    echo "Repository cloned successfully"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    cd devops/jenkins-nodejs-application
                    echo "Building Docker image..."
                    docker build -t jenkins-nodejs-app:latest .
                    echo "Docker image built successfully"
                '''
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh '''
                    cd devops/jenkins-nodejs-application
                    echo "Stopping existing containers..."
                    docker-compose down || true
                    echo "Starting Docker Compose..."
                    docker-compose up -d --build
                    echo "Docker Compose deployment completed successfully"
                    echo "Application will be available at: http://localhost:8000"
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                    echo "Waiting for application to be ready..."
                    sleep 5
                    echo "Checking Docker containers..."
                    docker-compose -f devops/jenkins-nodejs-application/docker-compose.yml ps
                    echo "Deployment verification completed"
                '''
            }
        }
    }

    post {
        always {
            sh '''
                echo "Pipeline execution completed"
                docker ps -a
            '''
        }
        failure {
            sh '''
                echo "Pipeline failed. Rolling back containers..."
                docker-compose -f devops/jenkins-nodejs-application/docker-compose.yml logs
            '''
        }
    }
}