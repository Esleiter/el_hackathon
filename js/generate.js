import { makeDescription, makePost } from "./buildPost.js";

export async function generate() {
  document.getElementById("submit").disabled = true;
  document.getElementById("loader").style.display = "block";
  let post = makePost();
  makeDescription(post);
}
