
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCj_RQK6sA8FXeqb8tezOOsl0b9og58LLU",
      authDomain: "let-s-chat-app-bdd0a.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-bdd0a-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-bdd0a",
      storageBucket: "let-s-chat-app-bdd0a.appspot.com",
      messagingSenderId: "714238843354",
      appId: "1:714238843354:web:190f24c21b09dba15088e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("userName")
document.getElementById("welcome").innerHTML = "Welcome "+ userName
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
