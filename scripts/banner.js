const banner = document.querySelector('.main-banner').querySelectorAll('*');
console.log(banner);
const bannerText = [
    null,
    'Учитесь вместе с сферум',
    'Анализируйте свои результаты',
    'Узнавайте о актуальных новостях школы'
];

banner[4].style.transition = 'none';
banner[4].style.opacity = 0;
banner[5].style.transition = 'none';
banner[5].style.opacity = 0;

banner[1].innerText = banner[2].innerText = banner[3].innerText = null;

setTimeout(() => {
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.transition = 'all ease 0.2s';
    }
}, 1);

let index = 0;

function TextCreate(text, obj) {
    return new Promise((resolve) => {
        if (index < text.length) {
            obj.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => {
                TextCreate(text, obj).then(resolve); 
            }, 10);
        } else {
            index = 0
            resolve();
        }
    });
}

async function Text() {
    await TextCreate(bannerText[1], banner[1]);
    await TextCreate(bannerText[2], banner[2]);
    await TextCreate(bannerText[3], banner[3]);
    await new Promise((resolve)=>{
        banner[4].style.transition = 'all ease 0.7s';
        banner[4].style.opacity = 1;
        banner[4].style.top = '2em';
        setTimeout(()=>{
            resolve()
        },200)
    })
    banner[5].style.transition ='all ease 0.7s';
    banner[5].style.opacity = 1;
    banner[5].style.marginRight = '5em';
}


Text();




