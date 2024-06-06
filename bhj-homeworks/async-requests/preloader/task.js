const items = document.getElementById('items')
const loader = document.querySelector('.loader')

const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const valutes = xhr.response['response']['Valute']
        for (let key in valutes){
            items.insertAdjacentHTML('afterbegin', `
            <div class="item">
            <div class="item__code">${valutes[key]['CharCode']}</div>
            <div class="item__value">${valutes[key]['Value']}</div>
            <div class="item__currency">руб.</div>
            </div>`);
            loader.classList.remove('loader_active')
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

xhr.responseType = 'json';

xhr.send()




