const firebaseConfig = {
  apiKey: "AIzaSyAkAZ9tG-oQA2E6uFcDnO5m3jBuVIHtTCM",
  authDomain: "chatroomxnoway.firebaseapp.com",
  databaseURL: "https://chatroomxnoway-default-rtdb.firebaseio.com",
  projectId: "chatroomxnoway",
  storageBucket: "chatroomxnoway.appspot.com",
  messagingSenderId: "688370240968",
  appId: "1:688370240968:web:6e96911ad32dbdf4f904fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("userName").innerHTML = "Bem Vindo(a), " + username;

function addRoom(){
  var roomname = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomname).update({
    purpose: "Adding Room"
  });
  localStorage.setItem("roomName", roomname);
  window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("faz o grrr " + roomNames);
       var catBox = "<div class = 'roomName' id = " + roomNames + " onclick = 'enterBox(this.id)'>" + roomNames + "</div> <hr>";
       //agora a gente vai definir algo proprio do elemento do documento
       //document.getelementbyid carregando o site
       document.getElementById("output").innerHTML += catBox;
       //codependence placing is so funny i thought it was a joke
    });
  });

}

getData();

function enterBox(name){
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}
//like genuinely i thought the screenshot was photoshopped
//he turned himself into a 1 player level, funniest s%%t i've even seen
//lmao
//sakupen is appaernetly harder tho
function logout(){
  window.location = "index.html";
  localStorage.removeItem("username");
  localStorage.removeItem("roomName");
}
//work it
//make it
//do it
//makes us
//ding
//ding
//ding
//ding
//ding
//ding
//ding
//ding

//22/08

//harder
//better
//faster
//stronger
//ding
//ding
//ding
//ding
//ding
//ding
//ding
//ding

