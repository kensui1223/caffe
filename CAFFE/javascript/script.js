const menu = document.querySelector('.menu');

const list = [
    {
        name: 'アボカドトースト',
        img: 'menu1.webp',
    },
    {
        name: '生ハムカプレーゼ',
        img: 'menu2.webp',
    },
    {
        name: 'ペンネボロネーゼ',
        img: 'menu3.webp',
    },
    {
        name: 'ムール貝のワイン蒸し',
        img: 'menu4.webp',
    },
    {
        name: '根菜のグリル',
        img: 'menu5.webp',
    },
    {
        name: 'ジェノベーゼ',
        img: 'menu6.webp',
    },
    {
        name: 'ラザニア',
        img: 'menu7.webp',
    },
    {
        name: 'カプチーノ',
        img: 'menu8.webp',
    },
    {
        name: 'チョコブラウニー',
        img: 'menu9.webp',
    },
];
for(let i = 0; i < list.length; i++){
    const name = list[i].name;
    const img = list[i].img;
    const content = `<div><img src="img/${img}" alt=""><p>${name}</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);

}
