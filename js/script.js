function scrollAppear() {
    const introText = document.querySelector('.intro-text');
    const introPos = introText.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;
    if (introPos < screenPos) {
        introText.classList.add('intro-appear')
    }

}
window.addEventListener('scroll', scrollAppear)
