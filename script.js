const sketchCon = document.querySelector('.sketchCon');
const pixelCountSlider = document.querySelector(`#gridSizeSlider`);
const pixelCount = (pixelCountSlider.value ** 2);
const pixelHeightandWidth = (100 / pixelCountSlider.value)

//This function populates the set space with divs. It gives the divs a height and a width as a percentage and uses a pixel count. 

function addDivs() {
    for (let i = 0; i < pixelCount; i++) {
        sketchCon.innerHTML += `<div class="createdDiv" style="height:${pixelHeightandWidth}%; width:${pixelHeightandWidth}%"></div>`
    }
}

//This click event takes in the value of the slider and calls the function to create the dives. 

pixelCountSlider.addEventListener()

addDivs()







