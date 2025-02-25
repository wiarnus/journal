const journalBtn = document.getElementById('journal');
const scheduleBtn = document.getElementById('schedule');
const homeBtn = document.getElementById('home');

const schedulePage = document.querySelector('.main-content__schedule-tables');
const journalPage = document.querySelector('.main-content__journal');

const getByClass = ((name)=>{
    return document.querySelector(`.${name}`);
})

const navigationSchedule = document.getElementById('navig0');
const navigationTeachers = document.getElementById('navig1')
const navigationProfile = document.getElementById('navig2')
const navigationEge = document.getElementById('navig3')
const navigationNews = document.getElementById('navig4')

const navigationPages = [
    getByClass('main-navigation__journal'),
    getByClass('main-navigation__teachers'),
    getByClass('main-navigation__ege'),
    getByClass('main-navigation__profile'),
    getByClass('main-navigation__news'),
]

const Pages = []
Pages.push(getByClass('main-content__schedule'));
Pages.push(getByClass('main-content__teachers'));
Pages.push(getByClass('main-content__ege'));
Pages.push(getByClass('main-content__profile'));
Pages.push(getByClass('main-content__news'));

const pickNavigation = ((id)=>{
    for (let i =0; i < Pages.length; i++){
        Pages[i].style.display = 'none';
        navigationPages[i].style.display = 'none';
    }
    Pages[id].style.display = 'block'
    navigationPages[id].style.display = 'block'
})

navigationSchedule.addEventListener('click', ()=>{
    pickNavigation(0)
})
navigationTeachers.addEventListener('click', ()=>{
    pickNavigation(1)
})
navigationEge.addEventListener('click', ()=>{
    pickNavigation(2)
})
navigationNews.addEventListener('click', ()=>{
    pickNavigation(1)
})
navigationProfile.addEventListener('click', ()=>{
    pickNavigation(3)
})


journalBtn.addEventListener('click', ()=>{
    journalPage.style.display = 'block';
    schedulePage.style.display = 'none';
    
});

scheduleBtn.addEventListener('click', ()=>{
    journalPage.style.display = 'none';
    schedulePage.style.display = 'block';
});
homeBtn.addEventListener('click', ()=>{
    pickNavigation(0)
})

document.getElementById('btn1').addEventListener('click', ()=>{
    window.location.href = 'https://sferum.ru/?p=parents_students';
})

