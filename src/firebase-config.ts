// // firebase-config.ts
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAptYo8mqN_gTwU8I-fTpEg5XCEHBJPZm4",
//   authDomain: "mohit-portfolio-48300.firebaseapp.com",
//   projectId: "mohit-portfolio-48300",
//   storageBucket: "mohit-portfolio-48300.appspot.com", // fixed from .app
//   messagingSenderId: "732788028172",
//   appId: "1:732788028172:web:e9a3174b5cd55de664cf29",
//   measurementId: "G-TCL1WG0WVX",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics };


import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAptYo8mqN_gTwU8I-fTpEg5XCEHBJPZm4",
  authDomain: "mohit-portfolio-48300.firebaseapp.com",
  projectId: "mohit-portfolio-48300",
  storageBucket: "mohit-portfolio-48300.appspot.com",
  messagingSenderId: "732788028172",
  appId: "1:732788028172:web:e9a3174b5cd55de664cf29",
  measurementId: "G-TCL1WG0WVX",
};

const app = initializeApp(firebaseConfig);

let analytics;
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(() => {
    // Analytics not supported or blocked
  });

export { app, analytics };
