import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyB7QCwwSWdW_wHk2LmdrJZ1rg-1pyIj4A4",
    authDomain: "asa-project-569.firebaseapp.com",
    databaseURL: "https://asa-project-569.firebaseio.com",
    projectId: "asa-project-569",
    storageBucket: "asa-project-569.appspot.com",
    messagingSenderId: "202189590286"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();


// import * as firebase from 'firebase';  // Initialize Firebase
// 	var fireBaseconfig = {
// 		apiKey: "AIzaSyB7QCwwSWdW_wHk2LmdrJZ1rg-1pyIj4A4",
// 		authDomain: "asa-project-569.firebaseapp.com",
// 		storageBucket: "asa-project-569.appspot.com",
    
// 		databaseURL: "https://asa-project-569.firebaseio.com",
// 		projectId: "asa-project-569",
// 		messagingSenderId: "202189590286",
// 	};
// 	firebase.initializeApp(fireBaseconfig);
// const firebaseApp = firebase.initializeApp(fireBaseconfig);


// import * as firebase from 'firebase';

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyB7QCwwSWdW_wHk2LmdrJZ1rg-1pyIj4A4",
//   authDomain: "asa-project-569.firebaseapp.com",
//   databaseURL: "https://asa-project-569.firebaseio.com",
//   storageBucket: "asa-project-569.appspot.com",

//   projectId: "asa-project-569",
//   messagingSenderId: "202189590286",
// };


{/* import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyB7QCwwSWdW_wHk2LmdrJZ1rg-1pyIj4A4",
    authDomain: "asa-project-569.firebaseapp.com",
    databaseURL: "https://asa-project-569.firebaseio.com",
    projectId: "asa-project-569",
    storageBucket: "asa-project-569.appspot.com",
    messagingSenderId: "202189590286"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();

<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7QCwwSWdW_wHk2LmdrJZ1rg-1pyIj4A4",
    authDomain: "asa-project-569.firebaseapp.com",
    databaseURL: "https://asa-project-569.firebaseio.com",
    projectId: "asa-project-569",
    storageBucket: "asa-project-569.appspot.com",
    messagingSenderId: "202189590286"
  };
  firebase.initializeApp(config);
</script> */}