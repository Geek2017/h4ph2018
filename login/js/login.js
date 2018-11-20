//import * as firebase from 'firebase';
var attempt = 3;

function validateMyForm() {
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;

    if (userEmail == "juandelacruz@gmail.com" && userPass == "juan23")
    {
        // alert("Login Successful");
        // windows.location.href = "http://localhost/qq/land.php";

        window.location.href = "http://localhost/ezwork/h4ph2018/app/#!/app/freelancing/dashboard";        
    }
    else{
        attempt --; //decrement by 1 if input is invalid or wrong
        alert("You Have"+attempt+" Attempt");

        //disable button and textfield if after 3 attempts
        if(attempt == 0){
            document.getElementById("email").disable = true;
            document.getElementById("password").disable = true;
            document.getElementById("btnSignin").disable = true;
            return false;
        }

    }

    return false;
}


  