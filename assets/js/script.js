document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        let headerDiv = document.querySelector('.div-header-outer-wrap');
        if (window.scrollY > 50) {
            headerDiv.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';

        } else {
            headerDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        }
    });
});