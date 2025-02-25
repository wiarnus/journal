const tables = document.querySelectorAll('.main-content__schedule-table');
const dataBase = [
    [null,null,'Алгебра','Информатика','Геометрия','Разговоры о важном'],
    ['Информатика','Информатика','Английский язык','Английский язык','Обществознание'],
    ['Алгебра','Геометрия','Русский язык'],
    ['Физика','Английский язык','Русский язык','Классный час'],
    [null,null,null,'Физика','Алгебра','Информатика'],
    ['Биология','География','Русский язык','История'],
    [null, 'Биология', 'География', 'Русский язык'],
    [null, 'История', 'Алгебра', 'Физика', 'Геометрия'],
    ['География', 'Русский язык', 'Информатика'],
    [null, 'Физика', 'Геометрия', 'Английский язык','Физкультура'],
    [null, 'Английский язык', 'Обществознание', 'Биология'],
    [null, 'Биология', 'Информатика', 'История', 'Русский язык'],
    ['Алгебра', 'География', 'Физика'],
    [null, 'Русский язык', 'Физика', 'Геометрия'],
    ['История', 'Обществознание', 'Разговоры о важном'],
    [null, 'Разговоры о важном', 'Геометрия', 'Английский язык', 'Алгебра'],
    ['Русский язык','Алгебра','История','История','Классный час'],
    [null,null,'География','Физкультура','ОБЖ','Россия мои гориз.'],
    ['ОБЖ', 'Разговоры о важном', 'Геометрия', 'Английский язык', 'Алгебра'],
];

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}.${month}.${year}`; 
}

function getDatesOfCurrentWeek() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); 
    const firstDayOfWeek = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1); 

    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dates = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate.setDate(firstDayOfWeek + i));
        const dayName = daysOfWeek[date.getDay()]; 
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        const formattedDate = `${dayName} ${day}.${month}.${year}`; 
        dates.push(formattedDate); 
    }

    return dates;
}

const currentWeekDates = getDatesOfCurrentWeek();
currentWeekDates.pop();

for (let j = 0; j < tables.length; j++) {
    const tableData = tables[j].querySelector('p');
    tableData.innerText = currentWeekDates[j];

    const lessonsTable = tables[j].querySelectorAll('.lesson');
    // const lesson = dataBase[Math.floor(Math.random() * dataBase.length)];
    const lesson = dataBase[j]

    for (let k = 0; k < lesson.length; k++) {
        if (lesson[k]) {
            lessonsTable[k].innerHTML = '<div>' + lesson[k] + '</div>';
        }
    }
}
