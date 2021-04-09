var firebaseConfig = {
      apiKey: "AIzaSyAugtaQhTGuIP0JCE_i83X4OPu1vWvQftw",
      authDomain: "kwitter-ba785.firebaseapp.com",
      databaseURL: "https://kwitter-ba785-default-rtdb.firebaseio.com",
      projectId: "kwitter-ba785",
      storageBucket: "kwitter-ba785.appspot.com",
      messagingSenderId: "883009973900",
      appId: "1:883009973900:web:da0b3bf3b39ecc93f3d5a9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      
}

