function submition() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("usercell").value;
    var c = document.getElementById("useremail").value;
    var d = document.getElementById("userpassword").value;
    var e = document.getElementById("confirmpassword").value;
    var number = /^[0-9]+$/;
    var txt = /^[A-Za-z]+$/;
    if(a == "") {
        document.getElementById("errors").innerHTML="** Name must required.";
        return false;
    }else if(b == "") {
        document.getElementById("errors").innerHTML="** Cell must required.";
        return false;
    }else if(c == "") {
        document.getElementById("errors").innerHTML="** Email must required.";
        return false;
    }else if(d == "") {
        document.getElementById("errors").innerHTML="** Password must required.";
        return false;
    }else if(e == "") {
        document.getElementById("errors").innerHTML="** Confirmation must required.";
        return false;
    }
    if(a.length < 3) {
        document.getElementById("errors").innerHTML="** Name must contain 3 letters.";
        return false;
    }else if(b.length < 11) {
        document.getElementById("errors").innerHTML="** Cell must contain 11 letters.";
        return false;
    }else if(d.length < 5) {
        document.getElementById("errors").innerHTML="** Password must contain 5 letters.";
        return false;
    }
    if(a.match(txt)) {
        true;
    }else {
        document.getElementById("errors").innerHTML="** Name only contain letters.";
        return false;
    }
    if(b.match(number)) {
        true;
    }else {
        document.getElementById("errors").innerHTML="** Cell only contain numbers.";
        return false;
    }
    if ((c.charAt(c.length-4)!='.') && (c.charAt(c.length-3)!='.')) {
        document.getElementById("errors").innerHTML="** Please enter a valid email.";
        return false;
    }
    if(e != d) {
        document.getElementById("errors").innerHTML="** Password does not match.";
        return false;
    }
    alert("Your request have been recieved. You will recieve a confirmation message on your email soon, Thank You.")
}