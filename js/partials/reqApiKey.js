import { renderTargets } from "./targets.js";

export let apiKeyUser;

export function reqApiKey() {
  document.getElementById("partials").innerHTML =
    "<div id='partials' class='focus:outline-none w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600'>Ingresa tu Api Key (ChatGPT)...<div><ul class='flex flex-wrap'><li class='basis-1/2 mt-2'><input id='api-key' type='text' class='border rounded w-full py-1 px-3 text-black'></li><li class='basis-1/2 mt-2'><button id='next-button' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-2 rounded' onclick='apiKey()' disabled='true'>Siguiente</button></li></ul><div></div>";

  document.getElementById("api-key").addEventListener("input", function () {
    const apiKey = this.value.trim();
    const nextButton = document.getElementById("next-button");

    if (apiKey.length > 0) {
      nextButton.removeAttribute("disabled");
    } else {
      nextButton.setAttribute("disabled", "disabled");
    }
  });
}

function apiKey() {
  apiKeyUser = document.getElementById("api-key").value;
  renderTargets();
}

window.apiKey = apiKey;
