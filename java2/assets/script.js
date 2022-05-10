// Target switch,bulb image and input field
const switchBtn = document.getElementById('roundBtn')
const switchBtnInput = document.getElementById('id_switch')
const myImage = document.getElementById('myImage')


// function: check if the checkbox checked,display the right bulb.
function toggleBulb() {

    if (switchBtnInput.checked === true) {
     myImage.src="assets/bulbon.png"  
    }
    else if (switchBtnInput.checked === false) {
        myImage.src="assets/bulboff.pngxdcfvg"
    }
}


// Add event handler to switch
switchBtn.addEventListener('click',toggleBulb)
