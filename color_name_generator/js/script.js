// color generator function
const colorGenerator = (color) => {

    if (color) {
        displayColor(color);
    }
    else {
        const randomColor = Math.floor(Math.random()* 16777215).toString(16);
        displayColor(randomColor);    
        }
    }


// display color function
const displayColor = () => {
    let name_value = ntc.name(color);
    console.log(name_value);

    document.body.style.backgroundColor = name_value[0];
}