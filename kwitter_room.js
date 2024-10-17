const firebaseConfig = {
  apiKey: "AIzaSyCqY-o5EeV6_HaedDZDDxrwioxctYXzqF8",
  authDomain: "kwitter01-a5008.firebaseapp.com",
  databaseURL: "https://kwitter01-a5008-default-rtdb.firebaseio.com",
  projectId: "kwitter01-a5008",
  storageBucket: "kwitter01-a5008.appspot.com",
  messagingSenderId: "602037018725",
  appId: "1:602037018725:web:7b4e5f674c1a5afcc9e68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="¡Bienvenido" + user_name + "!";

  function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    
  }
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name"+ Room_names);
        var row ="<div class= 'room_name' id="+Room_name+"onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div> <hr>";
        document.getElementById("output").innerHTML+=row;
       });
});
}

getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}