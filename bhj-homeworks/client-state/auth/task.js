const myFrom = document.getElementById('signin__form')
const user_name = document.getElementsByName('login')
const password = document.getElementsByName('password')
const userID = document.getElementById('user_id')
const signin = document.querySelector('.signin')
const welcome = document.querySelector('.welcome')

function saveObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
};

function welcomeActive(user_id) {
    signin.classList.remove('signin_active')
    userID.textContent = user_id
    welcome.classList.add('welcome_active');
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myFrom);
    const xhr = new XMLHttpRequest();

    const user = {
        userName: user_name,
        userPassword: password,
    };

    xhr.onload = (() => {
        const data = xhr.response;
        console.log(data);
        if (data['success']) {
            welcomeActive(data['user_id']);
            saveObject(data['user_id'], user);
        } else {
            form.reset();
            alert('Неверный логи или пароль');
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.responseType = 'json'
    xhr.send(formData)
});
