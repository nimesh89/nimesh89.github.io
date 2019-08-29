(function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', '' + vh + 'px');
    var timeout;
    window.addEventListener('resize', () => {
        if (timeout) return;
        timeout = setTimeout(function () {
            vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', '' + vh + 'px');
            timeout = undefined;
        }, 300);
    });
})();