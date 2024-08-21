let popupClose = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')

popupClose.onclick = () => {
    setCookie('popup', 'closed')
    modal.className = 'modal';
}

function setCookie(name, value) {
    console.log(name)
    document.cookie = name + '=' + encodeURIComponent(value);
    console.log(document.cookie)
}


function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}


try {
    getCookie('popup') === 'closed';
} catch (err) {
    modal.className = 'modal modal_active';
}

