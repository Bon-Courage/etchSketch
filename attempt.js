mainSection.addEventListener('click', (event) => {
    const createdDivs = document.getElementsByClassName('createdDiv');
    const createdDivsArray = Array.from(createdDivs);
    const buttonSelected = getButtonChoice(event.target);

    createdDivsArray.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            if (buttonSelected === `black`) {
                blackColor(div);
            } else if (buttonSelected === `erase`) {
                eraseDiv(div)
            } else if (buttonSelected === `rainbow`) {
                rainbowColor(div);
            } else if (buttonSelected === 'cold') {
                coldColors(div);
            } else if (buttonSelected === 'warm') {
                warmColors(div);
            } else if (buttonSelected === 'color') {
                selectColor(div);
            }
        });
    });
});