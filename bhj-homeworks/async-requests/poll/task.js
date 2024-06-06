const poll = document.querySelector('.poll')
const pollTitle = document.querySelector('.poll__title')
const pollAnsw = document.getElementById('poll__answers')
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const title = xhr.response['data']['title']
        const answers = xhr.response['data']['answers']
        pollTitle.innerHTML = title
        for (let answ of answers) {
            pollAnsw.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">${answ}</button>
            `)
        }
    let buttons = document.querySelectorAll('.poll__answer')
    buttons.forEach((btn) => {
        btn.onclick = () => {
            alert('Спасибо, ваш голос засчитан!')
            location.reload ()
        }
    })
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.responseType = 'json';

xhr.send();