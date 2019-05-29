 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBRWDHPQZk82nOkC23D1DM_ljRMnVJyNaM",
    authDomain: "liauroufan.firebaseapp.com",
    databaseURL: "https://liauroufan.firebaseio.com",
    projectId: "liauroufan",
    storageBucket: "liauroufan.appspot.com",
    messagingSenderId: "478944419922",
    appId: "1:478944419922:web:8684a75569a0db95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messagesRef = firebase.database().ref('messages');
 
 document.getElementById('contactForm').addEventListener('submit',submitForm);

 //submit form
 function submitForm(e){
    e.preventDefault();


    var name = getInputValue('name');
    var email = getInputValue('email');
    var message = getInputValue('message');

    //save message
    saveMessage(name, email, message);

    //show alert
    alert("Your message has been sent.");
 }

 function getInputValue(id){
     return document.getElementById(id).value;
 }

 //save messages
 function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    })
 }