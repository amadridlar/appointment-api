node('slave-node') {
  stage('Init'){
    git branch: 'remove-branch', credentialsId: 'Github', url: 'https://github.com/amadridlar/appointment-api.git'
    sh label: 'Dir', script: 'dir'
  }
  stage('Build'){
    sh label: 'NPM set strict-ssl false', returnStdout: true, script: 'npm cache clean --force && npm config set strict-ssl false'
    sh label: 'NPM install modules', returnStdout: true, script: 'npm install'
  }
  stage('Unit test'){
    sh label: 'Unit test', script: 'npm run test-coverage'
  }
  stage ('Static Analysis'){
    withSonarQubeEnv ('SonarQube 8.0') {
      sonarScanner = tool name: 'sonar-scanner-4.2.0', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
      sh label: 'Sonar', script: "${sonarScanner} -D sonar-project.properties"
    }
  }
}
