import * as firebase from 'firebase';
import { toast } from './toast';

const config = {
    apiKey: "AIzaSyAIblLU4NWq-Fs6qbXKxFg4-2MiCfg5yIk",
    authDomain: "hangoutsbot-test-a9026.firebaseapp.com",
    databaseURL: "https://hangoutsbot-test-a9026.firebaseio.com",
    projectId: "hangoutsbot-test-a9026",
    storageBucket: "hangoutsbot-test-a9026.appspot.com",
    messagingSenderId: "190652203885",
    appId: "1:190652203885:web:3f682ab8c58e97513b1064"
  };

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
    const email = `${username}@gmail.com`;
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        
        return res; 
    } catch(error) {
        toast(error.message, 4000);
        return false;
    }
}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe();
        })
    });
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`;
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res)
        return true;
    } catch(error) {
        toast(error.message, 4000);
        return false;
    }
}

export function logoutUser() {
    return firebase.auth().signOut();
}
