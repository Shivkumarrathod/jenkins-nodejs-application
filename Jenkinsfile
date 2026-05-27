pipeline {
    agent any

    stages {
        stage('clone repository'){
           steps {
             bat '''
                mkdir -p devops
                cd devops
                rm -rf jenkins-nodejs-application
                git clone -b main https://github.com/Shivkumarrathod/jenkins-nodejs-application.git
             '''
           }
        }
        stage('build docker image') {
            steps {
                bat '''
                    cd devops/jenkins-nodejs-application
                    docker build -t nodejs-app:latest .
                '''
            }
        }
        stage('deploy'){
            steps {
                bat '''
                    docker run -d -p 8000:8080 nodejs-app
                '''
            }
        }
    }
}