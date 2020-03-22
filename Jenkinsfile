@Library('jenkins-shared-library-framework@sqlcanvas') _

pipeline {
    agent any
    environment {
        //APP_NAME must be lowercase to be URL?
        APP_NAME='doc.sqlcanvas';
        UI_DIR='sql-canvas-web'
        REACT_APP_NGINX_SITE_TEMPLATE="nginx.site.template";
    }
    stages {
        stage('Environment'){
            steps {
                setUIAPIEnv("${env.APP_NAME}");
            }
        }
        stage('Clean') {
            steps {
                sh "sudo rm -rf ./${env.UI_BUILD} || true"
                sh "sudo rm -rf ./deploy || true && mkdir -p ./deploy"
            }
        }
        stage('Build UI') {
            steps {
                sh 'printenv | sort'                
                //this is for more generic build apps where react and API co-exist
                sh "npm ci --prefix ./${env.UI_DIR}/"
                sh "npm run build --prefix ./${env.UI_DIR}/"
                sh "cp ./${env.UI_BUILD}"
                sh "tar -zcvf ./deploy/${env.UI_TAR} -C ./${env.UI_BUILD}/ ."
            }
        }
        stage('Deploy UI') {
            steps {
                sh 'printenv | sort'
                //remove the old copy just in case
                sh "sudo rm -rf ${env.UI_DEPLOY}"
                sh "sudo rm -rf ${env.NGINX_SITE_FILE}"
                restartNGINX()
                sh "sudo [ -e '${NGINX_SSL_CERTIFICATE_KEY_SPECIFIC}' ] && echo 'Cert for ${env.NGINX_SERVER_NAME} already exists' || sudo certbot certonly --nginx -d ${env.NGINX_SERVER_NAME}"
                sh "mkdir -p ${env.UI_DEPLOY}"
                sh "chmod -R 775 ${env.UI_DEPLOY}"
                sh "cp ./deploy/${env.UI_TAR} ${env.UI_DEPLOY}"
                sh "tar -zxvf ${env.UI_DEPLOY}/${env.UI_TAR} -C ${env.UI_DEPLOY}"
                //restart nginx and create a template.site file
                createNGINXSiteFile "${env.NGINX_SITE_FILE}"
                sh "sudo chcon -Rt httpd_sys_content_t ${env.UI_DEPLOY}"
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


