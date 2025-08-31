import easyMealImg from './images/easy-meal.png';
import fineMealImg from './images/fine-meal.png';
import lavishMealImg from './images/lavish-meal.png';
import brewskiImg from './images/brew.png';

export function generateContent() {
    const easyMeal = document.createElement('img');
    const fineMeal = document.createElement('img');
    const lavishMeal = document.createElement('img');
    const brewski = document.createElement('img');
    easyMeal.src = easyMealImg;
    fineMeal.src = fineMealImg;
    lavishMeal.src = lavishMealImg;
    brewski.src = brewskiImg;

    const content = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const header = document.createElement('h2');
    header.classList.add('page-header');
    header.textContent = 'Menu';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-drinks-container');

    const itemEasy = document.createElement('div');
    const itemEasyContent = document.createElement('div');
    itemEasyContent.innerHTML = 
        `<h3>Easy Meal</h3>
        <p>A hearty vegetable slop probably reheated from yesterday, for the hungry yet un-discerning client.</p>`;
    itemEasy.classList.add('menu-item');
    itemEasy.appendChild(easyMeal);
    itemEasy.appendChild(itemEasyContent);

    const itemFine = document.createElement('div');
    const itemFineContent = document.createElement('div');
    itemFineContent.innerHTML = 
        `<h3>Fine Meal</h3>
        <p>Basically your standard Easy Meal but with a side of some kind of under-done* meat or fish. (*Cooked through: add +50p)</p>`;
    itemFine.classList.add('menu-item');
    itemFine.appendChild(fineMeal);
    itemFine.appendChild(itemFineContent);

    const itemLavish = document.createElement('div');
    const itemLavishContent = document.createElement('div');
    itemLavishContent.innerHTML = 
        `<h3>Lavish Meal</h3>
        <p>A fine meal, finer than Fine. Includes a fresh salad and side of fruit. Oh la la!</p>`;
    itemLavish.classList.add('menu-item');
    itemLavish.appendChild(lavishMeal);
    itemLavish.appendChild(itemLavishContent);

    const drinksHeader = document.createElement('h2');
    drinksHeader.classList.add('page-header');
    drinksHeader.textContent = 'Drinks';

    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('menu-drinks-container');

    const itemBrew = document.createElement('div');
    const itemBrewContent = document.createElement('div');
    itemBrewContent.innerHTML = 
        `<h3>Special Brew</h3>
        <p>Ulristina's family recipe. A hearty brown ale, the perfect accompaniment to any meal.</p>`;
    itemBrew.classList.add('menu-item');
    itemBrew.appendChild(brewski);
    itemBrew.appendChild(itemBrewContent);

    menuContainer.appendChild(itemEasy);
    menuContainer.appendChild(itemFine);
    menuContainer.appendChild(itemLavish);
    
    drinksContainer.appendChild(itemBrew);

    mainContainer.appendChild(header);
    mainContainer.appendChild(menuContainer);
    mainContainer.appendChild(drinksHeader);
    mainContainer.appendChild(drinksContainer);

    content.appendChild(mainContainer);
};