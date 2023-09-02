import { selectPostType } from "./postType.js";

const targets = [
  { target: "fashion", label: "Moda" },
  { target: "healthWellness", label: "Salud y Bienestar" },
  { target: "beauty", label: "Belleza" },
  { target: "lifestyle", label: "Estilo de Vida" },
  { target: "food", label: "Comida" },
  { target: "pets", label: "Mascotas" },
  { target: "sports", label: "Deporte" },
  { target: "travel", label: "Viajes" },
  { target: "gaming", label: "Gaming" },
  { target: "entertainment", label: "Entretenimiento" },
  { target: "marketing", label: "Marketing" },
  { target: "environment", label: "Medio Ambiente" },
  { target: "music", label: "Música" },
  { target: "artsCrafts", label: "Arte y Manualidades" },
  { target: "entrepreneurship", label: "Emprendimiento" },
  { target: "finance", label: "Finanzas" },
  { target: "technology", label: "Tecnología" },
  { target: "audioVisualProduction", label: "Producción Audiovisual" },
  { target: "literature", label: "Literatura" },
  { target: "politics", label: "Política" },
];

let selectedTargets = [];

/*function selectTarget(target) {
  if (selectedTargets.includes(target)) {
    selectedTargets = selectedTargets.filter((t) => t !== target);
  } else if (selectedTargets.length < 2) {
    selectedTargets.push(target);
  }
  renderTargets();

  if (selectedTargets.length === 2) {
    selectPostType();
  }
}*/

function selectTarget(target) {
  selectedTargets.push(target);
  selectPostType();
}

function renderTargets() {
  const opcionesHTML = targets.map(({ target, label }) => {
    const isSelected = selectedTargets.includes(target);
    const selectedClass = isSelected ? "selected" : "";
    return `<li>
                <a class="inline-block border border-gray-200 rounded py-1 px-3 text-black transition ease-out duration-300 hover:bg-blue-500 hover:text-white target-option ${selectedClass}"
                   onclick="selectTarget('${target}')"
                   href="#" data-target="${target}">
                  ${label}
                </a>
              </li>`;
  });

  const listaHTML = `<ul class="list-reset grid grid-cols-4 gap-4 text-center">${opcionesHTML.join(
    ""
  )}</ul>`;

  const resultadoHTML = `<div id="partials" class="focus:outline-none w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600">
                            ¿Con qué se relaciona tu contenido? ...
                            <div>
                              ${listaHTML}
                            </div>
                          </div>`;

  document.getElementById("partials").innerHTML = resultadoHTML;
}

export { selectTarget, selectedTargets, renderTargets };
