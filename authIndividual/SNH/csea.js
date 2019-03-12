var messageRef=firebase.database().ref('snh');
//event listener for form submit
var usernames=[];
var uname=sessionStorage.getItem("storageName");
document.getElementById("username").value=uname;
document.getElementById('snh').addEventListener('submit',submitForm);
var usernames=[];
var keys=[];
var main_key="";
var flag=true;
function submitForm(e){
    e.preventDefault();
    var username=document.getElementById("username").value;
    var best=document.getElementById("cbx1").checked;
    var lazy=document.getElementById("cbx2").checked;
    var vdg=document.getElementById("cbx3").checked;
    var lantern=document.getElementById("cbx4").checked;
    var rtw=document.getElementById("cbx5").checked;
	var nb=document.getElementById("cbx6").checked;
    checkUserPresent(username,best,lazy,vdg,lantern,rtw,nb);
}
function checkUserPresent(username,col,cod,cry,vir,wor){
      var leadsRef = firebase.database().ref('snh');
      leadsRef.on('value', function(snapshot) {
          var all=[];
          snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              var str=childData.username;
              usernames.push(str+"");
              all.push(str+"");
              usernames.push(str+"");
              var key=childSnapshot.key+"";
              keys.push(key+"");
          });
          if(usernames.includes(username)&&flag){
              flag=false;
              main_key=keys[usernames.indexOf(username)];
              writeUserData(username,best,lazy,vdg,lantern,rtw,nb,true,main_key);
          }
          else if(flag){
              flag=false;
              console.log("new here");
              writeUserData(username,best,lazy,vdg,lantern,rtw,nb,false,"");
          }

      });
}

function writeUserData(username,best,lazy,vdg,lantern,rtw,nb,isTrue,u_key) {
  if(isTrue){
        window.alert("already");
        firebase.database().ref('snh').child(u_key).set({
            username: username,
            bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw
		nippy:nb
        });
    }
    else{
        window.alert("new");
        firebase.database().ref('snh').push({
          username: username,
         bestwaste:best,
            lazyh:lazy,
            vandegraff:vdg,
            lanternm:lantern,
           run:rtw
		nippy:nb
        });
    }
    flag=true;
}






<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></script>
</head>
<style>
    html {
      /*background-image: linear-gradient(to bottom right, rgba(255,0,0,0), rgba(255,0,0,1));#89f7fe → #66a6ff*/
      background-image: linear-gradient(to bottom right, #14D3FE, #3794FD);
      /*background-image: linear-gradient(to top right, #7E35EF, #F20AC3);
      background-image: linear-gradient(to top right, #AF2A7D, #E03753);
      background-image: linear-gradient(to top right, #42E16B, #8A9E06);*/
      /* background-image: linear-gradient(to top right, #FFFB00, #FF4900); */
      /*background-image: linear-gradient(to top right, #EFFF1F, #FFA200);*/
      /*background-color: #fc9842;
        background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
        background-color: #ff4e00;
        background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);*/
    }

    body,
    div,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    fieldset,
    input,
    textarea,
    p,
    blockquote,
    th,
    td {
      padding: 0;
      margin: 0;
    }

    fieldset,
    img {
      border: 0
    }

    ol,
    ul,
    li {
      list-style: none
    }

    :focus {
      outline: none
    }

    body,
    input,
    textarea,
    select {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: #0004ff;
    }

    p {
      font-size: 10px;
      width: 150px;
      display: inline-block;
      margin-left: 30px;
    }

    h1 {
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      padding-top: 15px;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 35px;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      padding-top: 10px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      padding-left: 10px;
      text-align:center;
    }

    html {
      background-color: #ffffff;
    }

    .testbox {
      margin: auto;
      width: 100vw;
      height: 100vh;
      -webkit-border-radius: 8px/7px;
      -moz-border-radius: 8px/7px;
      border-radius: 8px/7px;
      background-color: rgba(0, 0, 0, 0);
      /*-webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.31);
      -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.31);
      box-shadow: 1px 2px 5px rgba(0,0,0,.31); */
      border: transparent 1px #000000;

    }

    input[type=radio] {
      visibility: hidden;
    }

    form {
      margin-left:5vh;
      margin-right:5vh;
      text-align: center;
    }

    label.radio {
      cursor: pointer;
      text-indent: 35px;
      overflow: visible;
      display: inline-block;
      position: relative;
      margin-bottom: 15px;
    }

    label.radio:before {
      background: #ee0000;
      opacity:1;
      content: '';
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 100%;
    }

    label.radio:after {
      opacity: 0;
      content: '';
      position: absolute;
      width: 0.5em;
      height: 0.25em;
      background: transparent;
      top: 7.5px;
      left: 4.5px;
      border: 3px solid #ffffff;
      border-top: none;
      border-right: none;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    input[type=radio]:checked + label:after {
      opacity: 1;
    }

    hr {
      background-color: #30FF00;
      opacity: 0.2;
    }

    label {
      font-size:23px;
      color: #ffffff;
      opacity: 1;
    }
    input {
      border-radius: 36px;
      position: relative;
      width: 50vw;
      height: 64px;
      transition: all 0.5s cubic-bezier(.87, -.41, .19, 1.44);
    }
    .input {
      position: relative;
      font-size: 16px;
      background: linear-gradient(21deg, #3794FD, #14D3FE);
      margin-left: 0.5vw;
      margin-right: 0.5vw;
      margin-bottom: 10px;
      margin-top: 10px;
      padding: 3px;
      display: inline-block;
      border-radius: 9999em;
    }

    .input *:not(span) {
      position: relative;
      display: inherit;
      border-radius: inherit;
      margin: 0;
      border: none;
      outline: none;
      padding: 0 0.325em;
      z-index: 1;
    }

    .input *:not(span):focus + span {
      opacity: 1;
      transform: scale(1);
    }

    .input span {
      transform: scale(0.993, 0.94);
      transition: transform 0.5s, opacity 0.25s;
      opacity: 0;
      position: absolute;
      z-index: 0;
      margin: 4px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #7eecff, -3px 3px 30px #7eecff;
    }

    /*html {
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
       line-height: 1.5;
       font-size: 1em;
    }
     body {
       text-align: center;*/

    /*input[type=text],input[type=password]{
      width: 200px;
      height: 39px;
      -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
      -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
      border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
      background-color: #fff;
      -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.09);
      -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.09);
      box-shadow: 1px 2px 5px rgba(0,0,0,.09);
      border: solid 1px #cbc9c9;
      margin-left: -5px;
      margin-top: 13px;
      padding-left: 10px;
    }

    input[type=password]{
      margin-bottom: 25px;
    }*/

    #icon {
      margin-left:0.5vw;
      border-radius: 20%;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: transparent;
      color: white;
      padding: 24px 28px 30px 24px;
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0);
      border: transparent 0px #cbc9c9;
    }


    /*html,
    body {
      height: 100%;
    }
    body {
      display: grid;
    }*/

    .check {
      text-align: center;
      cursor: pointer;
      position: relative;
      margin: auto;
      width: 20px;
      height: 20px;
      -webkit-tap-highlight-color: transparent;
      transform: translate3d(0, 0, 0);
    }

    .check:before {
      content: "";
      position: absolute;
      top: -15px;
      left: -15px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(34, 50, 84, 0.03);
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .check svg {
      position: relative;
      z-index: 1;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #000000;
      stroke-width: 3;
      transform: translate3d(0, 0, 0);
      transition: all 0.2s ease;
    }

    .check svg path {
      stroke-dasharray: 60;
      stroke-dashoffset: 0;
    }

    .check svg polyline {
      stroke-dasharray: 22;
      stroke-dashoffset: 66;
    }

    .check:hover:before {
      opacity: 1;
    }

    .check:hover svg {
      stroke: #eeff00;
    }

    #cbx1:checked + .check svg {
      stroke: #2fff05;
    }

    #cbx1:checked + .check svg path {
      stroke-dashoffset: 60;
      transition: all 0.3s linear;
    }

    #cbx1:checked + .check svg polyline {
      stroke-dashoffset: 42;
      transition: all 0.2s linear;
      transition-delay: 0.15s;
    }

    #cbx2:checked + .check svg {
      stroke: #2fff05;
    }

    #cbx2:checked + .check svg path {
      stroke-dashoffset: 60;
      transition: all 0.3s linear;
    }

    #cbx2:checked + .check svg polyline {
      stroke-dashoffset: 42;
      transition: all 0.2s linear;
      transition-delay: 0.15s;
    }
    #cbx3:checked + .check svg {
      stroke: #2fff05;
    }

    #cbx3:checked + .check svg path {
      stroke-dashoffset: 60;
      transition: all 0.3s linear;
    }

    #cbx3:checked + .check svg polyline {
      stroke-dashoffset: 42;
      transition: all 0.2s linear;
      transition-delay: 0.15s;
    }
	#cbx4:checked + .check svg {
      stroke:  #2fff05;
    }

    #cbx4:checked + .check svg path {
      stroke-dashoffset: 60;
      transition: all 0.3s linear;
    }

    #cbx4:checked + .check svg polyline {
      stroke-dashoffset: 42;
      transition: all 0.2s linear;
      transition-delay: 0.15s;
    }
	#cbx5:checked + .check svg {
      stroke:  #2fff05;
    }

    #cbx5:checked + .check svg path {
      stroke-dashoffset: 60;
      transition: all 0.3s linear;
    }

    #cbx5:checked + .check svg polyline {
      stroke-dashoffset: 42;
      transition: all 0.2s linear;
      transition-delay: 0.15s;
    }


    /* Customize the label (the container) */


    /*.container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 17px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }*/


    /* Hide the browser's default checkbox
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    /* On mouse-over, add a grey background color
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background
    .container input:checked ~ .checkmark {
      background-color: #3a57af;
    }

    /* Create the checkmark/indicator (hidden when not checked)
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator
    .container .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }*/

    /* .gender {
      margin: relative;
      text-align: center;
    } */

    /* .accounttype {
      margin-left: 8px;
      margin-top: 20px;
    } */

    div{
      text-align:center;
    }
    input[type="submit"] {
      vertical-align: middle;
      text-align: center;
      padding-right:0.5vw;
      font-size:0.8vm;
      font-size-adjust:0.5;
      font-weight: 600;
      color: white;
      padding: 6px 25px 0px 20px;
      margin: 10px 8px 20px 0px;
      display: inline-block;
      float: right;
      text-decoration: none;
      width: 120px;
      height: 35px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      background-color: #ff1010;
      -webkit-box-shadow: 0 3px rgba(110, 1, 1, 0.75);
      -moz-box-shadow: 0 3px rgba(110, 1, 1, 0.75);
      box-shadow: 0 3px rgba(110, 1, 1, 0.75);
      transition: all 0.1s linear 0s;
      top: 0px;
      position: relative;
      border-color: transparent;
    }

    input[type="submit"]:hover,
    input[type="submit"]:focus  {
      opacity: 0.8;
      top: 3px;
      background-color: #09ff00;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
    .gender input{
      width:10%;
    margin:0;padding:0;

    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
    }
.male{background-image:url(https://images.vexels.com/media/users/3/145319/isolated/preview/393319492615023cc5864b50aed98bb5-boy-hands-in-pockets-illustration-by-vexels.png);}
.female{background-image:url(https://images.vexels.com/media/users/3/145192/isolated/preview/b71f7906bde87103aa47803c71f6566a-woman-illustration-by-vexels.png);}
.gender input:active +.drinkgender-cc{opacity: .9;}
.gender input:checked +.drinkgender-cc{
    -webkit-filter: none;
       -moz-filter: none;
            filter: none;
}
.drinkgender-cc{
    cursor:pointer;
    background-size:contain;
    background-repeat:no-repeat;
    display:inline-block;
    width:200px;height:140px;
    -webkit-transition: all 100ms ease-in;
       -moz-transition: all 100ms ease-in;
            transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
       -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
            filter: brightness(1.8) grayscale(1) opacity(.7);
}
.drinkgender-cc:hover{
    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
       -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
            filter: brightness(1.2) grayscale(.5) opacity(.9);
}
/* Extras */
a:visited{color:#888}
a{color:#444;text-decoration:none;}
p{margin-bottom:.3em;}
    </style>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="C:\Users\Raghu Chandan\Downloads\fontawesome-free-5.7.1-web\css\font-awesome.min.css">
    <link rel="stylesheet" href="C:\Users\Raghu Chandan\Downloads\fontawesome-free-5.7.1-web\css\all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <div class="testbox">
      <h1>Registration</h1>
      <form id="cse"><!--Place the Branch Name Here-->
        <hr>
        <br>
        <!--<div class="accounttype">
          <input type="radio" value="None" id="radioOne" name="account" checked/>
          <label for="radioOne" class="radio" chec>Personal</label>
          <input type="radio" value="None" id="radioTwo" name="account" />
          <label for="radioTwo" class="radio">Company</label>
	</div>-->
         <label id="icon" for="name"><i class="fas fa-user fa-2x"></i></label> <span class="input">
          <input type="text" id="username" style="padding-left:1vw" disabled>
          <span></span> </span>
          <br>
          <br>
        <!-- <label id="icon" for="name"><i class="fas fa-user fa-2x"></i></label> <span class="input">
          <input type="text" placeholder="User Name 2" id="reg_id2" style="padding-left:1vw">
          <span></span> </span>
          <br>
          <br>
        <label id="icon" for="name"><i class="fas fa-user fa-2x"></i></label> <span class="input">
          <input type="text" placeholder="User Name 3" id="reg_id3" style="padding-left:1vw" required>
          <span></span> </span>
          <br>
          <br>
        <label id="icon" for="name"><i class="fas fa-user fa-2x"></i></label> <span class="input">
          <input type="text" placeholder="User Name 4" id="reg_id4" style="padding-left:1vw" required>
          <span></span> </span>
          <br>
          <br> -->
        <!-- <div>
          <div class="gender" align="center">
            <input type="radio" value="None" id="male" name="gender" />
            <label for="male" class="radio" chec>Male </label>
            <input type="radio" value="None" id="female" name="gender" />
            <label for="female" class="radio">Female</label>
          </div>
        </div>
         -->
        <br>
        <hr>
        <h2 style="text-align: center">List of Events</h2>
        <br>
        <!--<label class="container">One
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>

          <label class="container">Two
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>

          <label class="container">Three
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>

          <label class="container">Four
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>-->
          <div style="text-align:left; margin-left:27%" >
              <input type="checkbox" id="cbx1" style="display: none;" class="checkbox" value="COLLOQUIUM">
              <label for="cbx1" class="check">
                <!--<label for="Checkbox1">AdminUser</label>-->
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg> COLLOQUIUM</label>
            </div>
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
            <div style="text-align:left; margin-left:27%">
              <input type="checkbox" id="cbx2" style="display: none;" class="checkbox" value="CODE SPRINT">
              <label for="cbx2" class="check">
                <!--<label for="Checkbox1">AdminUser</label>-->
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg> CODE SPRINT</label>
            </div>
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
          <div style="text-align:left; margin-left:27%">
              <input type="checkbox" id="cbx3" style="display: none;" class="checkbox" value="CRYPTOCEON">
              <label for="cbx3" class="check">
                <!--<label for="Checkbox1">AdminUser</label>-->
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg> CRYPTOCEON</label>
            </div>
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
        <div style="text-align:left; margin-left:27%">
              <input type="checkbox" id="cbx4" style="display: none;" class="checkbox" value="VIRTUE">
              <label for="cbx4" class="check">
                <!--<label for="Checkbox1">AdminUser</label>-->
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg> VIRTUALLY TRUE</label>
            </div>
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
	       <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
        <div style="text-align:left; margin-left:27%">
              <input type="checkbox" id="cbx5" style="display: none;" class="checkbox" value="WORKSHOP">
              <label for="cbx5" class="check">
                <!--<label for="Checkbox1">AdminUser</label>-->
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg> WORKSHOP ON CRYPTOGRAPHY</label>
            </div>
            <hr style="margin-top: 1px;margin-bottom: 1px;opacity:0">
        <br>
        <br>
        <p style="float:left;">By clicking Register, you agree on our <a href="./index.html">terms and condition</a>.</p>
        <input class="button" type="submit"></input>
     </form>
        <!-- <button class="button" type="submit"  form="csea" value="Submit">Register</button> -->
    </div>

    <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
        authDomain: "fir-auth-fb5c8.firebaseapp.com",
        databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
        projectId: "fir-auth-fb5c8",
        storageBucket: "fir-auth-fb5c8.appspot.com",
        messagingSenderId: "143950457061"
      };
      firebase.initializeApp(config);
    </script>
    <script src="cse_event_reg_new.js"></script>

