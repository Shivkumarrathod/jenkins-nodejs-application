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
                    echo Repository cloned successfully
                '''
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                bat '''
                    cd devops\\jenkins-nodejs-application
                    docker-compose down || exit 0
                    docker-compose up -d --build
                    echo Docker Compose deployment completed successfully
                '''
            }
        }
    }
}