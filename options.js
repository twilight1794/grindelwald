async function recuperar(){
  let res = await browser.storage.local.get("dominio");
  document.getElementById("dominio").value = res.dominio || "";
}

async function guardar(){
  await browser.storage.local.set({
    dominio: document.getElementById("dominio").value
  });
}

document.addEventListener("DOMContentLoaded", () => {
  recuperar();
  document.getElementById("guardar").addEventListener("click", guardar);
});
