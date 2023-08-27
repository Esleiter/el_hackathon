import { selectPostType } from "./postType.js";

const targets = [
  { target: "moda" },
  { target: "salud y bienestar" },
  { target: "belleza" },
  { target: "estilo de vida" },
  { target: "comida" },
  { target: "mascotas" },
  { target: "deporte" },
  { target: "viajes" },
  { target: "gaming" },
  { target: "entretenimiento" },
  { target: "marketing" },
  { target: "medio ambiente" },
  { target: "música" },
  { target: "arte y manualidades" },
  { target: "emprendimiento" },
  { target: "finanzas" },
  { target: "tecnología" },
  { target: "producción audivisual" },
  { target: "literatura" },
  { target: "política" },
];

let selectedTargets = [];

function selectTarget(target) {
  if (selectedTargets.includes(target)) {
    selectedTargets = selectedTargets.filter((t) => t !== target);
  } else if (selectedTargets.length < 2) {
    selectedTargets.push(target);
  }
  renderTargets();

  if (selectedTargets.length === 2) {
    selectPostType();
  }
}

function renderTargets() {
  const opcionesHTML = targets.map(({ target }) => {
    const isSelected = selectedTargets.includes(target);
    const selectedClass = isSelected ? "selected" : "";
    return `<li>
                <a class="inline-block border border-gray-200 rounded py-1 px-3 text-black transition ease-out duration-300 hover:bg-blue-500 hover:text-white target-option ${selectedClass}"
                   onclick="selectTarget('${target}')"
                   href="#" data-target="${target}">
                  ${target}
                </a>
              </li>`;
  });

  const listaHTML = `<ul class="list-reset grid grid-cols-4 gap-4 text-center">${opcionesHTML.join(
    ""
  )}</ul>`;

  const resultadoHTML = `<div id="q" class="focus:outline-none w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600">
                            ¿Con qué se relaciona tu contenido? (Selecciona hasta 2 opciones) ...
                            <div>
                              ${listaHTML}
                            </div>
                          </div>`;

  document.getElementById("q").innerHTML = resultadoHTML;
}

export { selectTarget, selectedTargets, renderTargets };
