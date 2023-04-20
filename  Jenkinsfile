#! /usr/bin/env groovy

pipeline {
  agent {
      docker {
          image 'node'
          args '-u root'
      }
  }

  stages {
    stage('Install') {
      steps {
        echo 'Installing...'
        sh 'npm install'
      }
    }

    stage('Testing Jest') {
      steps {
        echo 'Testing Jest...'
        sh 'npm run test:jest'
      }
    }
  }
}