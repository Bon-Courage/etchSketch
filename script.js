const sketchCon = document.querySelector('.sketchCon');
const pixelCountSlider = document.querySelector(`#gridSizeSlider`);
const gridSizeDisplay = document.querySelectorAll('.gridSizeDisplay');
const eraseButton = document.querySelector(`.eraseMode`);
const blackButton = document.querySelector('.blackMode');
const leftControls = document.querySelector('.leftControls');
const colorPicker = document.querySelector('.colorPicker')

let pixelCount = (pixelCountSlider.value ** 2);
let pixelHeightandWidth = (100 / pixelCountSlider.value);

//These functions are called first so it is available on page load. 

addDivs()
updateDisplay()
colourBlack()

//This functionfirst retrieves the pixel count and the pixelheight and width. It populates the set space with divs. It gives the divs a height and a width as a percentage of the overall height and width. 

function addDivs() {
    pixelCount = (pixelCountSlider.value ** 2);
    pixelHeightandWidth = (100 / pixelCountSlider.value);
    for (let i = 0; i < pixelCount; i++) {
        sketchCon.innerHTML += `<div ${i} class="createdDiv" style="height:${pixelHeightandWidth}%; width:${pixelHeightandWidth}%"></div>`
    }
}


//This Function sets divs to color black without any button press. 

function colourBlack() {
    const createdDivs = document.getElementsByClassName('createdDiv');
    const createdDivsArray = Array.from(createdDivs);
    createdDivsArray.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            div.style.background = ``;
            e.target.setAttribute("class", "createdDiv black");
        });
    });
}

// This click event clears out the previosly created divs. It then calls the function again but because the pixelcountslider.value has changed it will calculate a new pixel count and pixel height and innerWidth. IT also calls the update display div. 

pixelCountSlider.addEventListener("click", () => {
    sketchCon.innerHTML = ``;
    addDivs();
    updateDisplay()
    colourBlack();
})

//This function updates the grid size display by adding text for each to a node list

function updateDisplay() {
    gridSizeDisplay.forEach(item => item.textContent = `${pixelCountSlider.value}`)
}


//This overly long function listens for a click in the control panel. If black, erase, or clear are selcted the code has to first on hover remove the inline style before the set attribute function.   A switch statement would be good here. But I've tried unsuccessfully. 

leftControls.addEventListener('click', (e) => {
    const createdDivs = document.getElementsByClassName('createdDiv');
    const createdDivsArray = Array.from(createdDivs);
    const buttonSelected = getButtonChoice(e.target);

    if (buttonSelected === `black`) {
        createdDivsArray.forEach((div) => {
            div.addEventListener('mouseover', (e) => {
                div.style.background = ``;
                e.target.setAttribute("class", "createdDiv black");
            });
        });
    }
    else if (buttonSelected === `rainbow`) {
        createdDivsArray.forEach((div) => {
            div.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                console.log(`rgb(${r}, ${g}, ${b})`)
                div.style.background = `rgb(${r}, ${g}, ${b})`

            });
        });
    }
    else if (buttonSelected === `erase`) {
        createdDivsArray.forEach((div) => {
            div.addEventListener('mouseover', (e) => {
                div.style.background = ``
                e.target.setAttribute("class", "createdDiv white");
            });
        });
    }
    else if (buttonSelected === `clear`) {
        createdDivsArray.forEach((div) => {
            div.style.background = ``
            div.setAttribute("class", "createdDiv white");
        });
    } else if (buttonSelected === 'color') {
        colorPicker.addEventListener('change', (event) => {
            const selectedColor = event.target.value;
            createdDivsArray.forEach((div) => {
                div.addEventListener('mouseover', (e) => {
                    div.style.background = selectedColor
                    e.target.setAttribute("class", "createdDiv");
                });
            });
        })
    } else if (buttonSelected === 'warm') {
        createdDivsArray.forEach((div) => {
            div.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * (255 - 150 + 1) + 150);
                let g = Math.floor(Math.random() * 100);
                let b = Math.floor(Math.random() * 100);
                console.log(`rgb(${r}, ${g}, ${b})`)
                div.style.background = `rgb(${r}, ${g}, ${b})`
            });
        });
    } else if (buttonSelected === 'cold') {
        createdDivsArray.forEach((div) => {
            div.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random() * 75);
                let g = Math.floor(Math.random() * (150 - 100 + 1) + 100);
                let b = Math.floor(Math.random() * (255 - 100 + 1) + 100);
                console.log(`rgb(${r}, ${g}, ${b})`)
                div.style.background = `rgb(${r}, ${g}, ${b})`
            });
        });
    }
})






//This function gives a value to each button selection.

function getButtonChoice(target) {
    switch (true) {
        case target.classList.contains('blackMode'):
            console.log('User chose Black Mode');
            return 'black';
        case target.classList.contains('rainbowMode'):
            console.log('User chose rainbow mode');
            return 'rainbow';
        case target.classList.contains('eraseMode'):
            console.log('User chose erase mode');
            return 'erase';
        case target.classList.contains('clear'):
            console.log('User chose clear');
            return 'clear';
        case target.classList.contains('colorPicker'):
            console.log('user chose a new color');
            return 'color';
        case target.classList.contains('warmMode'):
            console.log('User chose warm mode');
            return 'warm';
        case target.classList.contains('coldMode'):
            console.log('User chose cold mode');
            return 'cold';
        default:
            return null;
    }
}

