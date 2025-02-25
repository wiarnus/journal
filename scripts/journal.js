const marks = [
    'Н434Н5442', // Алгебра
    'Н44', // Биология
    '53Н', // География
    'Н343', // Геометрия
    'Н44Н5Н', // Английский
    '5Н5Н5Н55', // Информатика
    'Н4', // История
    '2Н2433', // Литература
    '43', // Мат. Практикум
    '5', // Обж
    '34НН', // Обществознание
    '55', // Основы программирования
    'Н2Н5', // Русский язык
    '442', // Теория вероятности и статистика
    'Н2443Н', // Физика
    'Н5', // Физкультура
    '44Н' // Химия
]
const allItems = []
allItems.push(document.getElementById('algebra'));
allItems.push(document.getElementById('biologiy'));
allItems.push(document.getElementById('geographia'));
allItems.push(document.getElementById('geometry'));
allItems.push(document.getElementById('english'));
allItems.push(document.getElementById('informatika'));
allItems.push(document.getElementById('history'));
allItems.push(document.getElementById('literatura'));
allItems.push(document.getElementById('matPraktikum'));
allItems.push(document.getElementById('obj'));
allItems.push(document.getElementById('obshestvo'));
allItems.push(document.getElementById('osnoviProg'));
allItems.push(document.getElementById('rus'));
allItems.push(document.getElementById('teory'));
allItems.push(document.getElementById('fizika'));
allItems.push(document.getElementById('fizra'));
allItems.push(document.getElementById('himia'));

const funcAverage = (nums) => {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum / nums.length; 
};

const markColor = ((mark) => {
    switch (mark){
        case '1':
            return 'red'
        case '2':
            return 'red'
        case '3':
            return 'orange'
        case '4':
            return ' #00e68a'
        case '5':
            return ' #00e68a'
    }
})

for (let i = 0; i < allItems.length; i++){
    const items = allItems[i].querySelectorAll('*');
    const average = items[2];
    const grid = items[3].querySelectorAll('*');
    const nums = []

    for (let j = 0; j < marks[i].length; j++){
        if (marks[i][j] != undefined){
            grid[j].innerText = marks[i][j]
            grid[j].style.color = markColor(marks[i][j])
        }
        const markValue = +marks[i][j];
        if (!isNaN(markValue)){
            nums.push(markValue)
        }
    }
    average.innerText = funcAverage(nums).toFixed(2);
    items[2].style.backgroundColor = markColor(Math.round(funcAverage(nums)).toString());
}


