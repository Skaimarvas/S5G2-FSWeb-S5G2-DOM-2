import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
//------------------------MOUSEOVER---------------------
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
//------------------------MOUSEOVER-END--------------------------------
//------------------------KEYDOWN---------------------------------------
document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    document.body.style.backgroundColor = "grey";
  }
  if (event.key === "2") {
    document.body.style.backgroundColor = "";
  }
});
//------------------------KEYDOWN-END--------------------------------------
//---------------------WHEEL---------------------------------------------
const resim = document.querySelector("img");
console.log(resim);
let scale = 1;
resim.addEventListener("wheel", (event) => {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);
  /* Uncaught ReferenceError: Cannot access 'scale' before initialization
    at HTMLImageElement.<anonymous>  "let scale = 1;" içine yazdığımda aldığım hata */

  resim.style.transform = `scale(${scale})`;
});

resim.addEventListener("mouseout", (event) => {
  resim.style.transform = `scale(1)`;
});
//-----------------------WHEEL-END----------------------------------------
//---------------------------RESİZE----------------------------------------
const resizeInfo = document.createElement("p");
resizeInfo.id = "resize-info";
const intro = document.querySelector(".intro");
intro.append(resizeInfo);
function handleResize() {
  const resizeInfo = document.getElementById("resize-info");
  const width = window.innerWidth;
  const height = window.innerHeight;
  resizeInfo.textContent = `Pencere Boyutu: Genişlik ${width}px, Yükseklik ${height}px`;
}

window.addEventListener("resize", handleResize);

//-----------------------------RESİZE-END-------------------------------------
//-----------------------------LOAD-------------------------------------
const imageCount = document.querySelectorAll("img").length;

window.addEventListener("load", () => alert("Resim sayısı:" + imageCount));
//-----------------------------LOAD-END-------------------------------------
//----------------------------FOCUS----------------------------------------
const inputSec = document.createElement("input");
inputSec.type = "text";
inputSec.id = "fname";
inputSec.placeholder = "Lütfen yorum yapın";
intro.append(inputSec);

inputSec.addEventListener("focus", () => {
  inputSec.style.backgroundColor = "red";
});

document.addEventListener("click", (event) => {
  //sayfanın input dışındaki herhangi bir yerine tıkladığımızda sıfırlanacak o yüzden document yazdık.
  if (event.target !== inputSec) {
    inputSec.style.backgroundColor = "";
    inputSec.blur();
  }
});
//----------------------------FOCUS-END----------------------------------------

//----------------------------SCROLL-----------------------------------------

const quote = document.createElement("div");
quote.id = "quote";
quote.style.border = "1px solid black";
quote.style.width = "200px";
quote.style.height = "100px";
quote.style.overflow = "scroll";
quote.innerHTML =
  "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.<br><br>'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.<br><br>'Whenever you feel like criticizing anyone,' he told me, just remember that all the people in this world haven't had the advantages that you've had.";
intro.append(quote);

const quoteAns = document.createElement("p");
quoteAns.id = "demo";
intro.append(quoteAns);
quote.addEventListener("scroll", () => {
  quoteAns.innerHTML = "You scrolled div";
});
//-----------------------SCROLL-END------------------------------------------------

//---------------------- SELECT--------------------------------------------------

const selCom = document.createElement("p");
selCom.id = "select";
intro.append(selCom);
inputSec.addEventListener("select", () => {
  selCom.innerHTML = "You selected some text";
});

//---------------------- SELECT-END-----------------------------------------------
//-----------------------DBLCLICK-------------------------------------
const image = document.querySelector(".img-content > img");

image.addEventListener("dblclick", () => {
  window.open("http://localhost:9000/img/adventure.jpg");
});
//-----------------------DBLCLICK-END------------------------------------

//-----------------------DRAG-AND-DROP----------------------------------

const dropTarget1 = document.createElement("div");
dropTarget1.classList.add("droptarget");
dropTarget1.style.border = "1px solid black";
dropTarget1.style.width = "200px";
dropTarget1.style.height = "100px";
intro.append(dropTarget1);

const draggableP = document.createElement("p");
draggableP.id = "dragtarget";
draggableP.draggable = "true";
draggableP.textContent = "Drag me!";
dropTarget1.append(draggableP);

const dragDropCom = document.createElement("p");
dragDropCom.id = "dragDrop";
intro.append(dragDropCom);

const dropTarget2 = document.createElement("div");
dropTarget2.classList.add("droptarget");
dropTarget2.style.border = "1px solid black";
dropTarget2.style.width = "200px";
dropTarget2.style.height = "100px";
intro.append(dropTarget2);

document.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("drag", () => {
  document.getElementById("dragDrop").innerHTML = "The text is being dragged";
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.target.className === "droptarget") {
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("dragDrop").innerHTML = "The text was dropped";
  }
});
//-----------------------DRAG-AND-DROP-END---------------------------------
