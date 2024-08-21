const myFrom = document.getElementById('signin__form')
const user_name = document.getElementsByName('login')
const password = document.getElementsByName('password')
const user_id = document.getElementById('user_id')
const signin = document.querySelector('.signin')
const welcome = document.querySelector('.welcome')

function saveObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
};

function restoreObject(key) {
    return JSON.parse(localStorage.getItem(key));
};


function countID(initialValue) {
    counter = initialValue;
    return () => {
        counter++;
    }
};

let idResult = countID(1)

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myFrom);
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        const storedUser = restoreObject(user_name);

        if (storedUser) {
            if (storedUser['password'] === password && storedUser['login'] === user_name) {
                signin.className = 'signin';
                welcome.className = 'welcome welcome_active';
                user_id.textContent = user['id'];
            } else {
                alert('Неверный логин/пароль');
            }
        } else {
            const user = {
                id: idResult(),
                login: user_name,
                password: password,
            }
            saveObject(user_name, user);
            signin.className = 'signin';
            welcome.className = 'welcome welcome_active';
            user_id.textContent = user['id'];
        }
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    
    xhr.send(formData)
});
