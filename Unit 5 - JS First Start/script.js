const like_button = document.getElementById('like-btn');

const addOneToLikeCount = () => {
    const like_count = document.getElementById('like-count');

    like_count.innerText = Number(like_count.innerText) + 1;
}

like_button.addEventListener('click', addOneToLikeCount);