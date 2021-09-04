var firebaseConfig={
      apiKey: "AIzaSyBO_hFgdcfRi0JjgAggseZWSfnc5z_y1wQ",
      authDomain: "classtest-99739.firebaseapp.com",
      databaseURL: "https://classtest-99739-default-rtdb.firebaseio.com",
      projectId: "classtest-99739",
      storageBucket: "classtest-99739.appspot.com",
      messagingSenderId: "1064958750432",
      appId: "1:1064958750432:web:87ae55e1f54353b524aa85"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log=("Roomname is"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row; }); }); }
      //Start code

      //End code
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function Addroom()
{room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"; }

function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }