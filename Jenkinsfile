pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                bat '''
                    if not exist devops mkdir devops
                    cd devops

                    if exist jenkins-nodejs-application (
                        rmdir /s /q jenkins-nodejs-application
                    )

                    git clone -b main https://github.com/Shivkumarrathod/jenkins-nodejs-application.git
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '''
                    cd devops\\jenkins-nodejs-application
                    docker build -t nodejs-app:latest .
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                    docker stop nodejs-container || exit 0
                    docker rm nodejs-container || exit 0

                    docker run -d --name nodejs-container -p 8000:8080 nodejs-app:latest
                '''
            }
        }

        stage('Test Application') {
            steps {
                bat 'docker ps'
            }
        }
    }
}