const firebaseConfig = {
  apiKey: "AIzaSyBGbwPnUplIQYXdP-0qvKBBhi65lpKIt-0",
  authDomain: "vamos-conversar-ed098.firebaseapp.com",
  databaseURL: "https://vamos-conversar-ed098-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-ed098",
  storageBucket: "vamos-conversar-ed098.appspot.com",
  messagingSenderId: "808774882110",
  appId: "1:808774882110:web:3b93df47a150cad9b0926f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
