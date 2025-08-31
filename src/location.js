import locationImg from './images/map.png';

export function generateContent() {
    const map = document.createElement('img');
    map.src = locationImg;

    const content = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const header = document.createElement('h2');
    header.classList.add('page-header');
    header.textContent = 'Location';

    const description = document.createElement('div');
    description.classList.add('page-text');
    description.innerHTML = 
        `<p>Down the main hallway, then down the main staircase til it teminates; then down the leftward tunnel about 40 paces, right, then left, right agin, then on a bit until a burning can be smelled; then straight on until you see a dim light, and there we are.</p>
        <p>If you get lost, follow the shouting.</p>`;

    mainContainer.appendChild(header);
    mainContainer.appendChild(map);
    mainContainer.appendChild(description);

    content.appendChild(mainContainer);
}