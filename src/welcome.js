import feastImg from './images/welcome.png';

export function generateContent() {
    const container = document.getElementById('content');
    const mainContainer = document.createElement('div');

    mainContainer.classList.add('main-container');
    container.appendChild(mainContainer)

    const welcomeImg = document.createElement('img');
    welcomeImg.src = feastImg;

    const welcome = document.createElement('h2');
    welcome.classList.add('page-header');
    welcome.textContent = 'Welcome';

    const info = document.createElement('div');
    info.classList.add('page-text');
    info.innerHTML = 
        `<p>For those seeking a fine dining experience, friendly hosts, or a warm and welcoming atmposhere: shove off!</p>
        <p>We are a family-run establishment, serving our hard-working residents the gloppiest stews, porridge, and other boiled edibles around. Reheated fresh daily! For those willing to shell out the extra gold, we'll even sprinkle a little 'mystery herb' on top!</p>
        <p>Slurp your slop accompanied by in-house brew, a bubbly brown ale strong enough to straighten your nostril hairs. And you'll need a few to 'enjoy' our nightly live entertainment. Sing along to your heart's content, and be sure to leave your pockets open.</p>`;


    mainContainer.appendChild(welcome);
    mainContainer.appendChild(welcomeImg);
    mainContainer.appendChild(info);
};