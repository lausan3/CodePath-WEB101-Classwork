// Add JavaScript code here
const form = document.getElementById('songRequests');

const printSong = (event) => {
    let name = document.getElementById('name-input').value;
    let song = document.getElementById('song-input').value;
    let artist = document.getElementById('artist-input').value;

    console.log(name + " submitted " + song + " by " + artist + ".");

    event.preventDefault();
}

form.addEventListener('submit', printSong);
