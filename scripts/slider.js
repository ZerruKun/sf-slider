const repairingInfo = [
  {
    projectsMenuItem: "Rostov-on-Don, Admiral",
    cityDetailes: "Rostov-on-Don <br> LCD admiral",
    apartmentAreaDetailes: "81 m2",
    repairTimeDetailes: "3.5 months",
    repairCostDetailes: "Upon request",
    scr: "../images/image1.jpg",
    alt: "repaired apartment 1",
  },
  {
    projectsMenuItem: "Sochi Thieves",
    cityDetailes: "Sochi Thieves",
    apartmentAreaDetailes: "105 m2",
    repairTimeDetailes: "4 months",
    repairCostDetailes: "Upon request",
    scr: "../images/image2.jpg",
    alt: "repaired apartment 2",
  },
  {
    projectsMenuItem: "Rostov-on-Don Patriotic",
    cityDetailes: "Rostov-on-Don <br> Patriotic",
    apartmentAreaDetailes: "93 m2",
    repairTimeDetailes: "3 months",
    repairCostDetailes: "Upon request",
    scr: "../images/image3.jpg",
    alt: "repaired apartment 3",
  },
];

const images = document.querySelector(".project-image");
const mainNavigation = document.querySelector(".projects-menu-list");
const repairingDescription = document.querySelector(".project-detailes-list");
const dots = document.querySelector(".additional-menu-list");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const projectsPreviousButton = document.querySelector(".projects-previous-button");
const projectsNextButton = document.querySelector(".projects-next-button");

const getInfo = () => {
  repairingInfo.forEach((el, index) => {
    let image = 
        `<img 
            class="${index === 0 ? "" : "hidden"}"
            src="${el.scr}" 
            alt="${el.alt}">`;
    images.innerHTML += image;
    let detailes = 
        `<div class="project-detailes-item ${index === 0 ? "" : "hidden"}"> 
            <div class="city-detailes">
                <h3>City:</h3>
                <span>${el.cityDetailes}</span>
            </div>
            <div class="apartment-area-detailes">
                <h3>apartment area:</h3>
                <span>${el.apartmentAreaDetailes}</span>
            </div>
            <div class="repair-time-detailes">
                <h3>Repair time:</h3>
                <span>${el.repairTimeDetailes}</span>
            </div>
            <div class="repair-cost-detailes">
                <h3>Repair Cost:</h3>
                <span>${el.repairCostDetailes}</span>
            </div>
        </div>`;
    repairingDescription.innerHTML += detailes;
    let menuItem = 
        `<li class="projects-menu-item">
            <a class="${index === 0 ? "active-link" : ""}" href="#">${el.projectsMenuItem}</a>
        </li>`;
    mainNavigation.innerHTML += menuItem;
  });
};

const getDots = () => {
  const dotsNumber = repairingInfo.length;
  for (let i = 0; i < dotsNumber; i++) {
    let dot = 
        `<li class="additional-menu-item ${i === 0 ? "active-dot" : ""}">
            <div></div>
        </li>`;
    dots.innerHTML += dot;
  }
};

getInfo();
getDots();