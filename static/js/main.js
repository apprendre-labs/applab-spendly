// main.js — students will add JavaScript here as features are built

document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('how-it-works-btn');
    var modal = document.getElementById('how-it-works-modal');
    var closeBtn = document.getElementById('how-it-works-modal-close');
    var video = document.getElementById('how-it-works-modal-video');
    var videoSrc = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

    if (!openBtn || !modal || !closeBtn || !video) return;

    function openModal(event) {
        event.preventDefault();
        video.src = videoSrc + '?autoplay=1';
        modal.classList.add('is-open');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        video.src = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
});
