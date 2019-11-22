const weather = document.getElementById('weather');
const para = document.querySelector('p');
const bg = document.getElementById('bg');
const html = document.querySelector('html');
weather.addEventListener('change',setWeather);

function setWeather(){
    const choice = weather.value;
    switch(choice){
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today.';
            break;
        case 'rainy':
                para.textContent = 'It is nice and rainy outside today.';
                break;
        case 'snowing':
                para.textContent = 'It is nice and snowing outside today.';
                break;
        case 'overcast':
                para.textContent = 'It is nice and overcast outside today.';
                break;
        default:
                para.textContent = '';
    }

}

function setBg(bgColor,textColor){
    html.style.backgroundColor =  bgColor;
    html.style.color = textColor;
}
bg.onchange = function(){
    (bg.value ==='black')?setBg('black','white'):setBg('white','black');
}
