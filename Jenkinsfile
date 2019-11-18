node('slave-node') {
  stage('Init'){
    git branch: 'remove-branch', credentialsId: 'Github', url: 'https://github.com/amadridlar/appointment-api.git'
    sh label: 'ls -l', script: 'ls -l'
    sh label: 'node version', script: 'node -v'
  }
  stage('Build'){
    sh label: 'NPM set strict-ssl false', returnStdout: true, script: 'npm cache clean --force && npm config set strict-ssl false'
    sh label: 'NPM install modules', returnStdout: true, script: 'npm install'
  }
  stage('Unit test'){
    sh label: 'Unit test', script: 'npm run test-coverage'
  }
  stage ('Static Analysis'){
    sh label: 'Sonar', script: 'sonar-scanner -D sonar-project.properties'
  }
}
