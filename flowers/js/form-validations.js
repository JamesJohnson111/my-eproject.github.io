function submition() {
    var name = document.getElementById("username").value;
    var cell = document.getElementById("usercell").value;
    var email = document.getElementById("useremail").value;
    var address = document.getElementById("useraddress").value;
    var quantity = document.getElementById("quantity").value;
    var number = /^[0-9]+$/;
    var txt = /^[A-Za-z]+$/;
    if(name == "") {
        document.getElementById("error1").innerHTML="** User name is must required.";
        return false;
    }
    if(cell == "") {
        document.getElementById("error2").innerHTML="** User cell is must required.";
        return false;
    }
    if(email == "") {
        document.getElementById("error3").innerHTML="** User email is must required.";
        return false;
    }
    if(address == "") {
        document.getElementById("error4").innerHTML="** User address is must required.";
        return false;
    }
    if(name.match (txt)) {
        true;
    }else {
        document.getElementById("error1").innerHTML="** Name only contains letters.";
        return false;
    }
    if(cell.match (number)) {
        true;
    }else {
        document.getElementById("error2").innerHTML="** Cell only contains numbers.";
        return false;
    }
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
        document.getElementById("error3").innerHTML="** <strong>Note:</strong> Please enter a valid email.";
        return false;
    }
    if(name < 3) {
        document.getElementById("error1").innerHTML="** Name must contains 3 letters.";
        return false;
    }
    if(cell < 11) {
        document.getElementById("error2").innerHTML="** Cell must contains 11 letters.";
        return false;
    }
    if(quantity == "") {
        document.getElementById("error5").innerHTML="** Enter how much items you want.";
        return false;
    }
}