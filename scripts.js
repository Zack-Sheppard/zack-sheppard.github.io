
const ACTIVE_COLOUR   = "#0FF"; // isn't it ironic
const INACTIVE_COLOUR = "#474747";

const categories = [
    { 
        title: "software",
        visible: false
    },
    { 
        title: "education",
        visible: false
    },
    { 
        title: "music",
        visible: false
    }
];

function toggleCategory(category) {
    categories.forEach((el, i) => {
        if(el.title == category) {
            categories[i].visible = !el.visible;
            let link = document.getElementById(category + "-link");
            link.style.color = categories[i].visible ? ACTIVE_COLOUR : INACTIVE_COLOUR;
        }
    });
}

function hideAllParagraphs() {
    // Trust me, this was easier
    document.getElementById("self").style.display = "none";
    document.getElementById("software").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("music").style.display = "none";
    document.getElementById("software-education").style.display = "none";
    document.getElementById("software-music").style.display = "none";
    document.getElementById("education-music").style.display = "none";
    document.getElementById("software-education-music").style.display = "none";
}

// you sneaky bastard
function displayCorrectParagraph() {

    let paragraph = categories.reduce((acc, curr) => {
        if(curr.visible && acc == "") {
            return acc + curr.title;
        }
        else if(curr.visible) {
            return acc + "-" + curr.title;
        }
        else {
            return acc;
        }
    }, "");

    if(paragraph == "") {
        document.getElementById("self").style.display = "block";
    }
    else {
        document.getElementById(paragraph).style.display = "block";
    }
}

function changeView(category) {
    toggleCategory(category);
    hideAllParagraphs();
    displayCorrectParagraph();
}
