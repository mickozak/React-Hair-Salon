import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBb3QckZGJNt948N5J2vqJHDgCTjDzC7qE",
    authDomain: "hair-salon-40709.firebaseapp.com",
    databaseURL: "https://hair-salon-40709.firebaseio.com",
    projectId: "hair-salon-40709",
    storageBucket: "hair-salon-40709.appspot.com",
    messagingSenderId: "369061210406"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase
