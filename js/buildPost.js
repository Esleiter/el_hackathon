import { makeImg, makeText } from "./reqApis.js";
import { selectedTargets } from "./partials/targets.js";
import { post } from "./partials/postType.js";
//import { getRandomMusic } from "./music.js";

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
  var res = await makeText(
    "Generate a detailed script for a video with " +
      post[0].postVideo.duration +
      " of duration, for an Instagram ad campaign related to " +
      selectedTargets[0] /*
  " and " +
  selectedTargets[1] +*/ +
      ", Additional Information:" +
      moreInfo +
      ". DO NOT INCLUDE HASHTAGS '#EXAMPLE'.",
    400
  );
  var resTranslate = await makeText(res + " en español.", 400);
  document.getElementById("section-post").style.display = "block";
  document.getElementById("post").innerHTML = resTranslate.replace(
    /\s*\]\s*/g,
    "] <br>"
  );
  /*+
    "<br> 🎵 Puedes utilizar esta música que esta en tendencia: " +
    getRandomMusic();*/
  return res;
}

async function makePostImage() {
  var res = await makeText(
    "as you imagine and describe a" +
      post[0].postImage.style +
      "related to" +
      selectedTargets[0] /*
      " and " +
      selectedTargets[1] */ +
      ", Additional Information:" +
      moreInfo +
      ". DO NOT INCLUDE HASHTAGS '#EXAMPLE'.",
    100
  );
  var imagen = await makeImg(res);
  document.getElementById(
    "post"
  ).innerHTML = `<img src="${imagen}" alt="${res}" class="h-auto max-w-full">`;
  return res;
}

export async function makeDescription(resPost) {
  resPost = await resPost;
  let description = await makeText(
    "Generates a descriptive text for an Instagram post that will accompany the following content: " +
      resPost +
      ". It is essential that you add many emoticons within the entire text. Generates relevant hashtags related to this post," +
      ". ONLY INCLUDE HASHTAGS '#EXAMPLE'. Traduce y muestra solo texto en español sin excluir emojis.",
    400
  );
  document.getElementById("description").innerHTML = description.replace(
    /#/,
    "</br></br></br> #"
  );
}
