let body = document.querySelector("body");
let main = document.querySelector(".main");
body.addEventListener("click", function (e) {
  if (e.target.classList[0] == "airimage") {
    main.classList.add("main2");
    main.innerHTML = `<img class="boximage" src="${e.target.dataset.url}" alt="one"  />; <i class="fa-solid fa-xmark close"></i>`;
  } else {
    main.classList.remove("main2");
    main.innerHTML = "";
  }
});
