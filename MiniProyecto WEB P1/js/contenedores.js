const imagenes=[
  {
    tag: "img",
    src: "../images/LAlucard.png",
    id: "img1"
  },{
    tag: "img",
    src: "../images/LDio.png",
    id: "img2"
  },{
    tag: "img",
    src: "../images/LGojo.png",
    id: "img3"
  },{
    tag: "img",
    src: "../images/LGoku.png",
    id: "img4"
  },{
    tag: "img",
    src: "../images/LJotaro.png",
    id: "img5"
  },{
    tag: "img",
    src: "../images/LPower.png",
    id: "img6"
  },{
    tag: "img",
    src: "../images/LVegeta.png",
    id: "img7"
  },{
    tag: "img",
    src: "../images/LYugi.png",
    id: "img8"
  }
]

const espacios=[
  {
    tag: "div",
    tag2: "img",
    src: "../images/Alucard.jpg",    
    id: "space1"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/Dio.jpg",    
    id: "space2"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/Gojo.jpg",    
    id: "space3"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/goku.jpg",    
    id: "space4"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/Jotaro.jpg",    
    id: "space5"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/Power.jpg",    
    id: "space6"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/vegeta.jpg",    
    id: "space7"  
  },{    
    tag: "div",    
    tag2: "img",    
    src: "../images/Yugi.jpeg",    
    id: "space8"  
  }

]

let contador = 0;


function generarImagenes() {
  const ci = document.getElementById("container_images");
  const imagenesCopy = [...imagenes];

  for (let i = 0; i < imagenes.length; i++) {
    var a = Math.floor(Math.random() * imagenesCopy.length);
    const objeto = imagenesCopy[a];
    imagenesCopy.splice(a, 1);

    var img = document.createElement(objeto.tag);
    img.setAttribute("id", objeto.id);
    img.setAttribute("src", objeto.src);
    img.className = "limage";
    img.draggable=true;
    img.addEventListener("dragstart", drag);
    ci.appendChild(img);
  }
}

function generarContenedores() {
  const cs = document.getElementById("container_spaces");
  const espaciosCopy = [...espacios];

  for (let i = 0; i < espacios.length; i++) {
    var a = Math.floor(Math.random() * espaciosCopy.length);
    const objeto = espaciosCopy[a];
    espaciosCopy.splice(a, 1);

    var div = document.createElement(objeto.tag);
    var img = document.createElement(objeto.tag2);
    div.setAttribute("id", objeto.id);
    img.setAttribute("src", objeto.src);

    img.className = "image";
    div.className="space";

    div.addEventListener("dragover", allowDrop);
    div.addEventListener("drop", drop);

    div.appendChild(img);
    cs.appendChild(div);
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const elemento = document.getElementById(data);
  const destino = ev.target.parentElement;
  
  if (destino.id === elemento.id.replace('img', 'space')) {
    destino.appendChild(elemento);
    console.log(`La imagen ${elemento.id} fue soltada en el espacio ${destino.id}`);
    contador+=100;
    if(elemento.id === "img1"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Alucard.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img2"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Dio.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img3"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Gojo.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img4"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Goku.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img5"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Jotaro.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img6"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Power.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img7"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Vegeta.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
    if(elemento.id === "img8"){
      var a1 = new Audio('../Media/Correcto.mp3');
      var a2 = new Audio('../Media/Yugi.mp3');
      a1.addEventListener('ended', function(){
        a2.play();
      })
      a1.play();
    }
  } else {
    console.log(`La imagen ${elemento.id} no puede ser soltada en el espacio ${destino.id}`);
    contador-=50;
    var a1 = new Audio('../Media/Incorrecto.mp3');
    a1.play();
  }
  let contadorElemento = document.getElementById("puntos");
  contadorElemento.innerHTML = contador;
}

generarImagenes();
generarContenedores();


/*

//El siguiente codigo permite el arrastre de imagenes, con cambio de ordenamiento
// en los contenedores.

const images = document.querySelectorAll(".image");
const spaces = document.querySelectorAll(".space");

let spacesOrder = ["space1", "space2", "space3", "space4"];
spacesOrder.sort(() => Math.random() - 0.5);

spaces.forEach((space, index) => {
  space.id = spacesOrder[index];
  space.addEventListener("dragover", dragOver);
  space.addEventListener("dragenter", dragEnter);
  space.addEventListener("dragleave", dragLeave);
  space.addEventListener("drop", drop);
});

images.forEach((image) => {
  const randomIndex = Math.floor(Math.random() * spacesOrder.length);
  const spaceId = spacesOrder[randomIndex];
  spacesOrder.splice(randomIndex, 1);
  const space = document.getElementById(spaceId);

  image.addEventListener("dragstart", dragStart);
  image.setAttribute("draggable", "true");
  image.setAttribute("data-space", spaceId);
});

function dragStart(event) {
  console.log("dragStart: ", event.target.id);
  event.dataTransfer.setData("text/plain", event.target.id);
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragOver(event) {
  console.log("dragOver: ", event.target.id);
  event.preventDefault();
}

function dragEnter(event) {
  console.log("dragEnter: ", event.target.id);
  const space = event.target;
  const imgId = event.dataTransfer.getData("text");
  const img = document.getElementById(imgId);
  if (isSpaceValid(space, img)) {
    space.classList.add("space-valid");
    console.log("Valid space");
  } else {
    space.classList.add("space-invalid");
    console.log("Invalid space");
  }
}

function dragLeave(event) {
  console.log("dragLeave: ", event.target.id);
  const space = event.target;
  space.classList.remove("space-valid");
  space.classList.remove("space-invalid");
}

function drop(event) {
  console.log("drop: ", event.target.id);
  event.preventDefault();
  const space = event.target;
  const imgId = event.dataTransfer.getData("text");
  const img = document.getElementById(imgId);
  if (isSpaceValid(space, img)) {
    space.appendChild(img);
    space.classList.add("space-dropped");
    console.log("Image dropped");
  }
  space.classList.remove("space-valid");
  space.classList.remove("space-invalid");
}

function isSpaceValid(space, img) {
  if (!space) {
    return false;
  }
  console.log("isSpaceValid: ", space?.id, img?.id);
  const validSpaces = {
    space1: ["img1"],
    space2: ["img2"],
    space3: ["img3"],
    space4: ["img4"],
  };
  const validImageIds = validSpaces[space.id];
  return validImageIds.includes(img?.id);
}
*/