const background_img = document.getElementById('background-img');
const moon_img = document.getElementById('moon');
const mountain_img = document.getElementById('mountain');
const road_img = document.getElementById('road');
const moonlight_txt = document.getElementById('moonlight');

const rates = {
    background: 0.5,
    moon: 0.5,
    mountain: 0.15,
    road: 0.15,
    text: 1
}

const handleScroll = () => {
    let scrollDistance = window.scrollY;

    background_img.style.top = scrollDistance * rates['background'] + 'px';
    moon_img.style.left = -scrollDistance * rates['moon'] + 'px';
    mountain_img.style.top = -scrollDistance * rates['mountain'] + 'px';
    road_img.style.top = scrollDistance * rates['road'] + 'px';
    moonlight_txt.style.top = scrollDistance * rates['text'] + 'px';
}

window.addEventListener('scroll', handleScroll);