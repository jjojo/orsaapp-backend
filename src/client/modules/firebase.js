import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDw5qPzxJ5-2QxM9np8Q18AAmW8Qgq-7UE',
  authDomain: 'orsa-app.firebaseapp.com',
  databaseURL: 'https://orsa-app.firebaseio.com',
  projectId: 'orsa-app',
  storageBucket: 'orsa-app.appspot.com',
  messagingSenderId: '554429806658'
}

const fire = firebase.initializeApp(config)
export { fire };