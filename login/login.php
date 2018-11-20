<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script src="js/login.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
var config = {
    apiKey: "AIzaSyCcqQaPqZGNVl8-2p6K42qO7G4_hgcXmyk",
    authDomain: "ezwork-47d8a.firebaseapp.com",
    databaseURL: "https://ezwork-47d8a.firebaseio.com",
    projectId: "ezwork-47d8a",
    storageBucket: "ezwork-47d8a.appspot.com",
    messagingSenderId: "766842934172"
  };
  firebase.initializeApp(config);
</script>
<body>

	<div class="main_div">
		<h2>ezWork</h2>

    <form action="#" id="frmlogin" method="post">
      <input type="text" placeholder="Email Address" id="email">
      <input type="password" placeholder="Password" id="password">

      <button value="login" id="btnSignin" onclick="return validateMyForm()">Signin</button><br>
		  <button>Signup</button>
    </form>
    
	</div>

</body>
</html>