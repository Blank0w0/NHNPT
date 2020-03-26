addEventListener("load", function() {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
}

function chkblnk(eid, errid)

{
  var x = document.getElementById(eid).value;
  if (x == "") {
    document.getElementById(errid).innerHTML = "Please fill First Name";
  } else {
    document.getElementById(errid).innerHTML = "";
  }
}


function chkblnk1(eid1, errid1)

{
  var k = document.getElementById(eid1).value;
  if (k == "") {
    document.getElementById(errid1).innerHTML = "Please fill Last Name";
  } else {
    document.getElementById(errid1).innerHTML = "";
  }
}

function chkAplha1(event1, err1) {
  if (!((event.which >= 65 && event.which <= 90) || (event.which >= 97 && event.which <= 122) || event.which == 0 || event.which == 8)) {
    document.getElementById(err1).innerHTML = "invalid name format";
    return false;
  }
}


function chkeid()

{
  var m = document.getElementById("e").value;
  if (m == "") {
    document.getElementById("error4").innerHTML = "Please fill email";
  } else {

    var e = document.getElementById("e").value;
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    if (atpos < 4 || dotpos < atpos + 3) {
      document.getElementById("error4").innerHTML = "invalid email";
    } else {
      document.getElementById("error4").innerHTML = "";
    }
  }

}




function chkphno(pher, pherror)

{
  var p = document.getElementById(pher).value;
  if (p == "") {
    document.getElementById(pherror).innerHTML = "Please fill Phone Number";
  } else {
    document.getElementById(pherror).innerHTML = "";
  }
}
function validateForm() {
  var x = document.forms[chkAplha1][chkblnk][chkeid][chkphno].value;
  if (x == "") {
    alert("Please fills the forum, may be just say hi");
    return false;
  }
}