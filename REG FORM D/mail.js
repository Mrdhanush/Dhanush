const firebaseConfig = {
    apiKey: "AIzaSyAbqMmIyDVeLoqzdsbYJVfnkFDdq-vAdZI",
    authDomain: "register-f6fb0.firebaseapp.com",
    databaseURL: "https://register-f6fb0-default-rtdb.firebaseio.com",
    projectId: "register-f6fb0",
    storageBucket: "register-f6fb0.appspot.com",
    messagingSenderId: "245360145467",
    appId: "1:245360145467:web:825a2c16e586f2c83ad81e"
  };

  firebaseConfig.initializeApp(firebaseconfig);

 var registerDB = firebaseConfig.database().ref("register");
 document.getElementById("form").addEventListener("submit",submitform);

 function submitform(e){
    e.preventdefault();  

    var username = getElemenVal('username');
    var email = getElemenVal('email');
    var password = getElemenVal('password');
    var cpassword= getElemenVal('cpassword');

    console.log(name, email, password, cpassword)
 }
 const getElemenVal = (id) =>{
    return document.getElementById(id).ariaValueMax;
 }