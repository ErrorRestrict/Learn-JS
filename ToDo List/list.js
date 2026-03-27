const food = document.getElementById('food')

const Mango = food.children[0]
const Grapes = food.children[1]
const Orange = food.children[2]
const Broccoli = food.children[3]

const melon = document.createElement('li');
melon.innerHTML =  `<span>🍈</span> Melon`;

food.appendChild(melon)

const onion = document.createElement('li');
const text = document.createTextNode('Onion');
const span = document.createElement('span');
const emoji = document.createTextNode('🧅');

span.appendChild(emoji)
onion.appendChild(span)
onion.append(text);

food.insertBefore(onion,Mango);

const lemon = document.createElement('li');
lemon.innerHTML =  `<span>🍋 </span> Lemon`;
food.replaceChild(lemon,Orange);


