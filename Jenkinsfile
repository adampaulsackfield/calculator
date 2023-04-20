#! /usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        echo 'Installing...'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm run build'
      }
    }

    stage('Copy to nginx directory') {
      steps {
        sh 'cp -r . /var/www/calculator.adamsackfield.uk/html'
      }
    }
  }
}