export function moreInfo() {
  document.getElementById("q").innerHTML =
    "<div id='q' class='focus:outline-none  w-full rounded-lg p-2 text-base bg-gray-100 border border-transparent appearance-none rounded-tg text-gray-600'>Ingresa mas información si deseas...<div><ul class='list-reset flex'><li class='mr-3 mt-2'><input id='more-info' type='text' class='inline-block border rounded py-1 px-3 text-black'></li></ul><div></div>";
  document.getElementById("bu").disabled = false;
}
