let popupClose = document.querySelector('.modal__close')
let modal = document.getElementById('subscribe-modal')

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + ';';
    console.log('set')
}


function getCookie(name) {
    const pairs = document.cookie.split('; ');
    try {
        const cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.length + 1);
        console.log('get')
    } catch {
        console.log('get1')
        return null
    }
}

if (getCookie('popup') === null) {
    modal.classList.add('modal_active');
    console.log('active')
}

popupClose.onclick = () => {
    setCookie('popup', 'closed')
    modal.classList.remove('modal_active');
}