async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(success, 3000);
    function success() {
      resolve("Hello");
    }
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
