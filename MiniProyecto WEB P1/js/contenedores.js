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
