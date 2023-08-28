import { makeDescription, makeHashtags, makePost } from "./buildPost.js";

export async function generate() {
  document.getElementById("bu").disabled = true;
  let post = makePost();
  makeDescription(post);
  makeHashtags(post);
}
