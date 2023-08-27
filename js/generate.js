import { makeDescription, makeHashtags, makePost } from "./buildPost.js";

export async function generate() {
  document.getElementById("bu").disabled = true;
  console.log(makePost());
  makeDescription(post);
  makeHashtags(post);
}
