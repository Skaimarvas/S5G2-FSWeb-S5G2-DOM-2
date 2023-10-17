import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const basliklar = document.querySelectorAll("header nav a");
console.log(basliklar);

basliklar.forEach((baslik) => {
  baslik.addEventListener("mouseover", (event) => {
    baslik.style.color = "red";
  });

  baslik.addEventListener("mouseout", (event) => {
    baslik.style.color = "";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    document.body.style.backgroundColor = "grey";
  }
  if (event.key === "2") {
    document.body.style.backgroundColor = "";
  }
});

/*const navbar = document.querySelector(".nav-container");

navbar.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    navbar.style.backgroundColor = "lightcoral";
  } else {
    navbar.style.backgroundColor = "lightblue";
  }
});

navbar.addEventListener("mouseout", () => (navbar.style.backgroundColor = ""));
*/
const imageCount = document.querySelectorAll("img").length;

window.addEventListener("load", () => alert("Resim sayısı:" + imageCount));

/*const yanBasliklar = document.querySelectorAll(".text-content h2");

yanBasliklar.addEventListener("resize");*/
