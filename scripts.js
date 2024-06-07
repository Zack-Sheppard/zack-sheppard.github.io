
// you sneaky bastard

const paragraphs = ["self", "software", "education", "music"];

function toggleSoftware() {
    let x = document.getElementById("software");
    let y = document.getElementById("software-link");
    if (x.style.display == "none" || x.style.display == "") {
        x.style.display = "block";
        y.style.color = "#000000";
    }
    else if(x.style.display == "block") {
        // embolden the header text
        x.style.display = "none";
        y.style.color = "#333333";
    }
    else {
        console.log("something went wrong");
        console.log(x.style.display);
    }
}

function toggleEducation() {
    // TODO
}

function toggleMusic() {
    // TODO
}
