// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDZdYL1TEgcQm0RdQbzbihbNGAAelQCsfE",
    authDomain: "ionic-035.firebaseapp.com",
    projectId: "ionic-035",
    storageBucket: "ionic-035.appspot.com",
    messagingSenderId: "878257626938",
    appId: "1:878257626938:web:fa8f49999870e55c6aba03"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
