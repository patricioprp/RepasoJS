// promise con ajax
// funcion dentro de una funcion
const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    // pasar la cantidad a la api

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamando a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion , si queremos que sea asincrono el ultimo parametro es true
    xhr.open("GET", api, true);

    // on load

    xhr.onload = () => {
      if (xhr.status === 200) {
        //llamado correcto
        resolve(JSON.parse(xhr.responseText).results); // results ya es una parte del json de la api
        //luego lo convertimos de string a Json
      } else {
        // en caso de que sea incorrecto
        reject(Error(xhr.statusText));
      }
    };

    //opcional onError
    xhr.onerror = (error) => reject(error);

    //send

    xhr.send();
  });
descargarUsuarios(10).then(
  (miembros) => imprimirHtml(miembros),
  (error) => console.error(new Error("Hubo un error" + error))
);


function imprimirHtml(usuarios){
  let html = '';
 usuarios.forEach(usuario => {

  html +=`
  <li>
  Nombre: ${usuario.name.first} - ${usuario.name.last}
  Pais: ${usuario.nat}
  Imagen: 
          <img src="${usuario.picture.medium}"/>
  </li>
  `;
 });
 const contenedorApp = document.querySelector('#app');

contenedorApp.innerHTML = html;
}

