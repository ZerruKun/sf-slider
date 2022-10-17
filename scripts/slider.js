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
        alt: "repaired apartment 2"
    },
    {
        projectsMenuItem: "Rostov-on-Don Patriotic",
        cityDetailes: "Rostov-on-Don <br> Patriotic",
        apartmentAreaDetailes: "93 m2",
        repairTimeDetailes: "3 months",
        repairCostDetailes: "Upon request",
        scr: "../images/image3.jpg",
        alt: "repaired apartment 3"
    },
]

const images = document.querySelector(".project-image");
const dots = document.querySelector(".additional-menu-list");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const projectsPreviousButton = document.querySelector(".projects-previous-button");
const projectsNextButton = document.querySelector(".projects-next-button");

const getImages = () => {
    repairingInfo.forEach((el, index) => {
        let imageItem = 
            `<img 
                class="${index === 0 ? "" : "hidden"}"
                src="${el.scr}" 
                alt="${el.alt}">`
        images.innerHTML += imageItem;
    });
}

const getDots = () => {
    const dotsNumber = repairingInfo.length;
    for(let i = 0; i < dotsNumber; i++) {
        let dot = 
            `<li class="additional-menu-item ${i === 0 ? "active-dot" : ""}">
                <div></div>
            </li>`;
        dots.innerHTML += dot;
    }
}

getImages();
getDots();
