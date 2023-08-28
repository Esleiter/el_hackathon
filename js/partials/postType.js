import { moreInfo } from "./moreInfo.js";

export var post = [];

function postInfo(type, opcionSelected) {
  type === "video"
    ? post.push({
        postVideo: { duration: opcionSelected },
      })
    : post.push({
        postImage: { style: opcionSelected },
      });
  console.log(post);
  moreInfo();
}

export function selectPostType() {
  const opciones = [
    { tipo: "Video", onclick: "buildTypePost('video')" },
    { tipo: "Imagen", onclick: "buildTypePost('imagen')" },
  ];

  const opcionesHTML = opciones.map((opcion) => {
    return `<li class="mr-3 mt-2">
                  <a class="inline-block border rounded py-1 px-3 text-black transition ease-out duration-300 hover:bg-blue-500 hover:text-white"
                     onclick="${opcion.onclick}"
                     href="#">
                    ${opcion.tipo}
                  </a>
                </li>`;
  });

  const listaHTML = `<ul class="list-reset flex">${opcionesHTML.join("")}</ul>`;

  const htmlFragment = `<div id="q" class="focus:outline-none w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600">
                              ¿Qué deseas publicar? ...
                              <div>
                                ${listaHTML}
                              </div>
                            </div>`;

  document.getElementById("q").innerHTML = htmlFragment;
}

export function buildTypePost(type) {
  let opciones, pregunta;
  if (type === "video") {
    opciones = [
      { duracion: "15 seconds", texto: "15 segundos" },
      { duracion: "30 seconds", texto: "30 segundos" },
      { duracion: "1 minute", texto: "1 minutos" },
      { duracion: "2 minutes", texto: "2 minutos" },
      { duracion: "3 minutes", texto: "3 minutos" },
      { duracion: "4 minutes", texto: "4 minutos" },
      { duracion: "5 minutes", texto: "5 minutos" },
    ];
    pregunta = "¿De qué duración deseas el video? ...";
  } else if (type === "imagen") {
    opciones = [
      { tipo: "a photography", texto: "Fotografía" },
      { tipo: "a digital art", texto: "Arte digital" },
      { tipo: "a painting", texto: "Pintura" },
    ];
    pregunta = "¿De qué tipo deseas la imagen? ...";
  }

  const opcionesHTML = opciones
    .map((opcion) => {
      return `<li class="mr-3 mt-2">
                <a class="inline-block border rounded py-1 px-3 text-black transition ease-out duration-300 hover:bg-blue-500 hover:text-white"
                   onclick="postInfo('${type}', '${
        type === "video" ? opcion.duracion : opcion.tipo
      }')"
                   href="#">
                  ${type === "video" ? opcion.texto : opcion.texto}
                </a>
              </li>`;
    })
    .join(""); // Corrección: Unir las opciones en un solo string

  const listaHTML = `<ul class="list-reset flex">${opcionesHTML}</ul>`;

  const resultadoHTML = `<div id="q" class="focus:outline-none w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600">
                              ${pregunta}
                              <div>
                                ${listaHTML}
                              </div>
                            </div>`;

  document.getElementById("q").innerHTML = resultadoHTML;
}

window.postInfo = postInfo;
