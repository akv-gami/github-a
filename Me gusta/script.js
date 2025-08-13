document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postActions = button.closest('.post-actions');
            const likeCountElement = postActions.querySelector('.like-count');
            
            let currentLikes = parseInt(likeCountElement.innerText);
            currentLikes++;
            
            likeCountElement.innerText = `${currentLikes} Me gusta`;
        });
    });
});