window.addEventListener('load', changeColor);

function changeColor() {
    let red = document.getElementById('redRange').value;
    let green = document.getElementById('greenRange').value;
    let blue = document.getElementById('blueRange').value;
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    
    let color = document.querySelector('.result-color');
    color.style.backgroundColor = rgb;

    document.getElementById('redNumber').innerHTML = red;
    document.getElementById('greenNumber').innerHTML = green;
    document.getElementById('blueNumber').innerHTML = blue;
}

document.getElementById('redRange').addEventListener('input', changeColor);
document.getElementById('greenRange').addEventListener('input', changeColor);
document.getElementById('blueRange').addEventListener('input', changeColor);