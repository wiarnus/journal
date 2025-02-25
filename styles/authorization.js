const login = document.getElementById('login');
const psswd = document.getElementById('psswd');
const error = document.querySelector('.error')

const account = ['BikovDA101','996307890']

const perenos = (Event) => {
    if (login.value == account[0] && psswd.value == account[1]) {
        setTimeout(()=>{
            window.location.href = './main.html';
        },400)
        document.querySelector('.entry').removeEventListener('click',perenos)
    } else if (login.value != account[0]) {
        error.style.opacity = 1;
        error.innerText = 'Аккаунт не существует';
        setTimeout(()=>{
            error.style.opacity = 0;
        },2000)
    } else if (login.value == account[0] && psswd.value != account[1]){
        error.style.opacity = 1;
        error.innerText = 'Неверный пароль';
        setTimeout(()=>{
            error.style.opacity = 0;
        },2000)
    }
}

document.querySelector('.entry').addEventListener('click', perenos)