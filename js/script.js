document.getElementsByClassName('mobile-toggle')[0].addEventListener('click',(e) => {

    if(e.target.classList.length > 0){
        document.getElementsByTagName('body')[0].classList.toggle('menu-active');
        e.target.classList.toggle('active');
        document.getElementById('menu').classList.toggle('active-menu');
        return;
    }

    if(e.target.offsetParent.classList.length > 0) {
        document.getElementsByTagName('body')[0].classList.toggle('menu-active');
        e.target.offsetParent.classList.toggle('active');
        document.getElementById('menu').classList.toggle('active-menu');
        return;
    }
})