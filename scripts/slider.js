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
    cityDetailes: "Sochi Thieves <br><br>",
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
const buttons = document.querySelectorAll(".project-button");

let activeProjectInfo = 0;

const getInfo = () => {
  repairingInfo.forEach((el, index) => {
    let image = 
        `<img 
            class="${index === 0 ? "" : "hidden"}" 
            data-index="${index}" 
            src="${el.scr}" 
            alt="${el.alt}">`;
    images.innerHTML += image;
    let detailes = 
        `<div class="project-detailes-item ${index === 0 ? "" : "hidden"}" data-index="${index}"> 
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
        `<li class="projects-menu-item" data-index="${index}">
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

const setButtonActions = () => {
    buttons.forEach(el => {
        el.addEventListener("click", event => {
            event.preventDefault();
            images.childNodes[activeProjectInfo].classList.add("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.add("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.remove("active-link");
            dots.childNodes[activeProjectInfo].classList.remove("active-dot");
            if(el.classList.contains("right")) {
                activeProjectInfo++;
                if(activeProjectInfo > (repairingInfo.length-1)) {
                    activeProjectInfo = 0;
                }
            } else {
                activeProjectInfo--;
                if(activeProjectInfo < 0) {
                    activeProjectInfo = repairingInfo.length-1;
                }
            }
            images.childNodes[activeProjectInfo].classList.remove("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.remove("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.add("active-link");
            dots.childNodes[activeProjectInfo].classList.add("active-dot");
        }) 
    })
}

const setDotsActions = () => {
    const dotItems = document.querySelectorAll(".additional-menu-item");
    dotItems.forEach ((el, index) => {
        el.addEventListener("click", () => {
            images.childNodes[activeProjectInfo].classList.add("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.add("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.remove("active-link");
            dots.childNodes[activeProjectInfo].classList.remove("active-dot");
            activeProjectInfo = index;
            images.childNodes[activeProjectInfo].classList.remove("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.remove("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.add("active-link");
            dots.childNodes[activeProjectInfo].classList.add("active-dot");
        })
    })
}

const setLinksActions = () => {
    const linkItems = document.querySelectorAll(".projects-menu-item");
    linkItems.forEach((el, index) => {
        el.addEventListener("click", () => {
            images.childNodes[activeProjectInfo].classList.add("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.add("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.remove("active-link");
            dots.childNodes[activeProjectInfo].classList.remove("active-dot");
            activeProjectInfo = index;
            images.childNodes[activeProjectInfo].classList.remove("hidden");
            repairingDescription.childNodes[activeProjectInfo].classList.remove("hidden");
            mainNavigation.childNodes[activeProjectInfo].childNodes[1].classList.add("active-link");
            dots.childNodes[activeProjectInfo].classList.add("active-dot");
        })
    })
}

getInfo();
getDots();
setButtonActions();
setDotsActions();
setLinksActions();