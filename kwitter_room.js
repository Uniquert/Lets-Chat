const firebaseConfig = {
    apiKey: "AIzaSyCn9gmqqguJ8M-VXAVXN6uHw5wZuTX6t-M",
    authDomain: "kwitter-fab83.firebaseapp.com",
    projectId: "kwitter-fab83",
    storageBucket: "kwitter-fab83.appspot.com",
    messagingSenderId: "574816932313",
    appId: "1:574816932313:web:afbf61a43b5319760289c8"
  };
  
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
