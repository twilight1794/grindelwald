async function recuperar(){
  let res = await browser.storage.local.get("dominio");
  alert(res.constructor.name);
  document.getElementById("dominio").value = res;
}

async function guardar(){
  await browser.storage.local.set({
    { dominio: document.getElementById("dominio").value }
  });
  alert(await browser.storage.local.get("dominio"));
}

document.addEventListener("DOMContentLoaded", recuperar);
document.getElementById("guardar").addEventListener("click", guardar);
