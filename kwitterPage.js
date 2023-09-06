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
var roomname = localStorage.getItem("roomName")

function sendMsg(){
  var message = document.getElementById("msg").value;
  firebase.database().ref(roomname).push({
    username: username,
    message: message,
    likes: 0
  });
}

function getData() {  firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       var roomNames = childKey;
       var childData = childSnapshot.val();
       console.log("faz o grrr " + roomNames);
       if (childKey!="purpose") {
        var fbID = childKey;
        var messagedata = childData;
        console.log("ID: " + fbID + " Mensagem: " + messagedata);
        var username2 = messagedata["username"];
        var usermessage = messagedata["message"];
        var userlikes = messagedata["likes"];

        var username_three_because_three_weren_t_enough_oh_yeah_this_is_actually_the_FOURTH_for_some_reason_question_mark_question_mark_like_why_bruh_also_this_is_the_like_worst_possible_name_for_a_variable_lol_because_its_so_long_i_wont_even_remember_what_this_is_for_time_to_start_or_actually_define_it_byeee = "<h4>"+username2+" <img src='tick.png' class='user_tick'> </h4>";
        var userMsg2_for_some_reson_actually_it_was_explained_so_im_ok_with_it = "<h3 class='message_h4'>"+usermessage+"</h3>";
        var likeButt = "<button class = 'btn btn-primary' id = "+fbID+" value = "+userlikes+" onclick = 'updateLike(this.id)'>";
        var sakupen = "<span class='glyphicon glyphicon-thumbs-up'>likes: "+userlikes+"</span> </button> <hr>";
        var dospuntodos_coming_october_2023 = username_three_because_three_weren_t_enough_oh_yeah_this_is_actually_the_FOURTH_for_some_reason_question_mark_question_mark_like_why_bruh_also_this_is_the_like_worst_possible_name_for_a_variable_lol_because_its_so_long_i_wont_even_remember_what_this_is_for_time_to_start_or_actually_define_it_byeee + userMsg2_for_some_reson_actually_it_was_explained_so_im_ok_with_it + likeButt + sakupen;
        document.getElementById("output").innerHTML += dospuntodos_coming_october_2023;
       }
       //agora a gente vai definir algo proprio do elemento do documento
       //document.getelementbyid carregando o site
       //comentarios acima = velhos (cópia)
       //vou comer hamburge hj obaaaa
       // 30/08/2023
       //hambureguer do feio
       //obaaa
    });
  });

}

getData();
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

function updateLike(messageid){
  var buttonid = messageid;
  var likes = document.getElementById(buttonid).value;
  var likeamount = Number(likes)+1;
  firebase.database().ref(roomname).child(messageid).update({
    likes: likeamount
  });
}
//harder
//better
//faster
//stronger