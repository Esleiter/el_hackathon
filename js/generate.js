import { makeDescription, makePost } from "./buildPost.js";

export async function generate() {
  document.getElementById("submit").disabled = true;
  let post = makePost();
  makeDescription(post);
}
