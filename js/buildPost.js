import { makeImg, makeText } from "./reqApis.js";
import { selectedTargets } from "./partials/targets.js";
import { post } from "./partials/postType.js";
import { getRandomMusic } from "./music.js";

let moreInfo;

export function makePost() {
  moreInfo = document.getElementById("more-info").value;
  let typePost = Object.keys(post[0])[0];
  if (typePost === "postVideo") {
    return makePostVideo();
  } else {
    return makePostImage();
  }
}

async function makePostVideo() {
  var promptVideo =
    "Genera un guion para un video de " +
    post[0].postVideo.duration +
    " para una campaña publicitaria de Instagram relacionado con " +
    selectedTargets[0] +
    "y" +
    selectedTargets[1] +
    ", Informacion adicional:" +
    moreInfo +
    ", EVITA INCLUIR HASHTAGS '#EJEMPLO'";

  var res = await makeText(promptVideo, 400);
  document.getElementById("lorem").innerHTML = "";
  document.getElementById("post").innerHTML =
    res.replace(/\s*\]\s*/g, "] <br>") +
    "<br> 🎵 Puedes utilizar esta música que esta en tendencia: " +
    getRandomMusic();
  return res;
}

async function makePostImage() {
  var promptImage =
    "Genera la descripcion detallada de " +
    post[0].postImage.style +
    " para redes sociales, relacionado con " +
    selectedTargets[0] +
    " y " +
    selectedTargets[1] +
    ", Informacion adicional: " +
    moreInfo;

  var res = await makeText(promptImage, 400);
  var imagen = await makeImg(res);
  document.getElementById("lorem").innerHTML = "";
  document.getElementById(
    "post"
  ).innerHTML = `<img src="${imagen}" alt="${res}" class="h-auto max-w-full">`;
  return res;
}

export async function makeDescription(resPost) {
  resPost = await resPost;
  let description = await makeText(
    "genera un texto descriptivo para post de Instagram que acompañara al siguiente contenido: " +
      resPost +
      '.    añade muchos emojis, EVITA INCLUIR HASHTAGS "#EJEMPLO"',
    200
  );
  document.getElementById("description").innerHTML = description;
}

export async function makeHashtags(resPost) {
  resPost = await resPost;
  let hashtags = await makeText(
    "genera los hashtags mas relevantes relacionado con esta publicacion: " +
      resPost,
    50
  );
  document.getElementById("hashtags").innerHTML = hashtags;
}
