import './styles.css';
import { generateContent as generateWelcome } from './welcome.js';
import { generateContent as generateMenu } from './menu.js';
import { generateContent as generateLocation } from './location.js';

(function () {
    const content = document.querySelector('#content');
    const tabs = document.querySelectorAll('button');

    function clear() { content.innerHTML = ''; }

    for (let i = 0; i < tabs.length; i++) {
        
        tabs[i].addEventListener('click', function () {
            clear();
            switch (tabs[i].id) {
                case 'home':
                    return generateWelcome();
                case 'menu':
                    return generateMenu();
                case 'location':
                    return generateLocation();
            }
        })
    }

    generateWelcome();

})();
