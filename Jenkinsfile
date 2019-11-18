node('slave-node') {
  stage('Init'){
    git branch: 'remove-branch', credentialsId: 'Github', url: 'https://github.com/amadridlar/appointment-api.git'
    sh label: 'ls -l', script: 'ls -l'
    // sh label: 'install node version', script: 'n 10.16.3'
    sh label: 'node version', script: 'node -v'
  }
  // stage('Build'){
  //   sh label: 'NPM set strict-ssl false', returnStdout: true, script: 'npm cache clean --force && npm config set strict-ssl false'
  //   sh label: 'NPM install modules', returnStdout: true, script: 'npm install'
  // }
  // stage('Unit test'){
  //   sh label: 'Unit test', script: 'npm run test-coverage'
  // }
  stage ('Static Analysis'){
    // withSonarQubeEnv ('SonarQube 8.0') {
    //   sonarScanner = tool name: 'sonar-scanner-4.2.0', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    //   echo "${sonarScanner}"
    // }
    echo "$PATH"
    sh label: 'Sonar dir', script: "ls -l /opt"
    sh label: 'Sonar dir', script: "ls -l /opt/sonar-scanner-4.2.0"
    sh label: 'Sonar dir', script: "ls -l /opt/sonar-scanner-4.2.0/bin"
    sh label: 'Sonar', script: "sonar-scanner -D sonar-project.properties"
  }
}
