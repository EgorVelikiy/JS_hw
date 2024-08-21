const myFrom = document.getElementById('signin__form')
const name = document.getElementsByName('login')
const password = document.getElementsByName('password')
const id = document.getElementById('user_id')

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myFrom);
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')

    xhr.send(formData)
});
