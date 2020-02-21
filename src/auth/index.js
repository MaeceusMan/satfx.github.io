import firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

/* axios test 1 of 2
const axios = require('axios');
// end axios test 1 of 2 */

const firebaseConfig = {
    apiKey: "AIzaSyDKq6szqGo-Tc4nNyyT7xkAglddSK4G1fY",
    authDomain: "satfx-clear-bank.firebaseapp.com",
    databaseURL: "https://satfx-clear-bank.firebaseio.com",
    projectId: "satfx-clear-bank",
    storageBucket: "satfx-clear-bank.appspot.com",
    messagingSenderId: "861138660645",
    appId: "1:861138660645:web:8a192eae24cbf9d8363ecc",
    measurementId: "G-K99K2FM44M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();

export { db, auth, analytics};

//  axios test 2 of 2
// async function makeGetRequest() {
//     const config = {
//         method: 'get',
//         url: 'https//institution-api-sim.clearbank.co.uk/v2/Accounts',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer OTU2ZTg1YzZkMWY1NDk1Zjg4NGQzYzYxODhjYjQwNzE=.eyJJbnN0aXR1dGlvbklkIjoiNTk4YjgzZDUtOTI1Ny00YjFhLTg0NDQtMDI1ZjJmYmM4Nzc5IiwiVG9rZW4iOiIyQjAyRUNENzc0Q0U0NDZFQUMwMEI1MUE5QkFEQTIyNjYyRUUzMzcxNjFCQjQ1QTJCQUIxMUVCQ0RGNUI5N0ZEMDM2MEIyMzdGQTI3NDkwOUFFNzQ1NzhCMzFGQkE5MjQifQ==',
//             'api-supported-versions': '1.0',
//             'X-Request-Id': '1234567890',
//             // 'Accept': '*/*',
//             'Cache-Control': 'no-cache'
//         }
//     };
//     /let res = await axios(config);
//
//      console.log(res.status);
//      console.log(res.request);
// }
// makeGetRequest();
// end axios test 2 of 2