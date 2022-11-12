import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {

    apiKey: "AIzaSyD9qHO-j4RWGSTg249gciTIm5i48MRdIMQ",
  
    authDomain: "bd-tcc-3ds.firebaseapp.com",
  
    databaseURL: "https://bd-tcc-3ds-default-rtdb.firebaseio.com",
  
    projectId: "bd-tcc-3ds",
  
    storageBucket: "bd-tcc-3ds.appspot.com",
  
    messagingSenderId: "44715367004",
  
    appId: "1:44715367004:web:d7aab22261d34c5738e499",
  
    measurementId: "G-KV2ZDWBD3H"
  
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export { db };