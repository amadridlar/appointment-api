node {
  stage('Init'){
    git branch: 'feature/new-appointment', url: 'file:///C:/Users/alvaro.madrid/workspace/appointment-api/'
    bat label: 'Dir', script: 'dir'
  }
  // stage('Build'){
  //   bat label: 'NPM set strict-ssl false', returnStdout: true, script: 'npm cache clean --force && npm config set strict-ssl false'
  //   bat label: 'NPM install modules', returnStdout: true, script: 'npm install'
  // }
  // stage('Unit test'){
  //   bat label: 'Unit test', script: 'npm run test-coverage'
  // }
  stage ('Static Analysis'){
    // withSonarQubeEnv ('SonarQube 8.0') {
    //   // sonarScanner = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    //   bat label: 'Sonar-scanner', script: 'sonar-scanner -D sonar-project.properties'
    // }
    sonarScanner = tool name: 'sonar-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    bat label: '', script: "${sonarScanner} -D sonar-project.properties"

  }
}
