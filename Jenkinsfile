@Library('jenkins-shared-library-framework@sqlcanvas') _

pipeline {
    agent any
    environment {
        APP_NAME='sqlcanvas';
        UI_DIR='sql-canvas-web'
    }
    stages {
        stage('Environment'){
            steps {
				setUIDocsEnv();
            }
        }
        stage('Clean') {
            steps {
                sh "sudo rm -rf ${env.DEPLOYMENT_PATH} || true"
            }
        }
        stage('Build UI') {
            steps {
                sh 'printenv | sort'                
                //this is for more generic build apps where react and API co-exist
                sh "npm ci --prefix ./${env.UI_DIR}/"
                sh "npm run build --prefix ./${env.UI_DIR}/"           
            }
        }
        stage('Deploy UI') {
            steps {
                sh 'printenv | sort'
                //remove the old copy just in case
                sh "sudo rm -rf ${env.NGINX_SITE_FILE}"
                restartNGINX()
                sh "sudo [ -e '${NGINX_SSL_CERTIFICATE_KEY_SPECIFIC}' ] && echo 'Cert for ${env.NGINX_SERVER_NAME} already exists' || sudo certbot certonly --nginx -d ${env.NGINX_SERVER_NAME}"
				//copy build
				sh "mkdir -p ${env.DEPLOYMENT_PATH}"
                sh "chmod -R 775 ${env.DEPLOYMENT_PATH}"
                sh "cp -rf ./${UI_DIR}/build/* ${env.DEPLOYMENT_PATH}"
                //restart nginx and create a template.site file
                createNGINXSiteFile "${env.NGINX_SITE_FILE}"
                sh "sudo chcon -Rt httpd_sys_content_t ${env.DEPLOYMENT_PATH}"
                restartNGINX()
            }
        }
        stage('Test'){
            steps {
                sleep 1
                sh "sudo curl ${env.URL}"
                
                //verifyUIBuildNumber "${env.URL}","${env.BUILDNUMBER}" 
                //curlMatch "${env.LOCAL_API_URL}/buildNumber", "${env.BUILDNUMBER}";
                //curlMatch "${env.LOCAL_API_URL}/version", "${env.VERSION}";
            }
        }
    }
}


