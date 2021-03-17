import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Here i want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyACgPdwLEHTT0J4CNDCq_RF61sVeaudYNc",
  authDomain: "instagram-8ca82.firebaseapp.com",
  projectId: "instagram-8ca82",
  storageBucket: "instagram-8ca82.appspot.com",
  messagingSenderId: "677789121525",
  appId: "1:677789121525:web:744999e77115d2c20d7ebc",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where I want to call the seed file (only once)
// seedDatabase(firebase);

export { firebase, FieldValue };
