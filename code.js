const input = document.getElementById('terminal-input')
const history = document.getElementById('terminal-history')

//lista komend co mozna uzyc
const commands = {
    'profiles': "\nProfiles:\n  Discord: tutkuww\n  Youtube: https://www.youtube.com/@Tutkuww\n  Printables: https://www.printables.com/@tutkuw_2466432",
    'help': "\nCommands:\n  profiles  : List my profiles\n  help      : Show this menu\n  clear     : Clear the screen\n",
    'clear': "__CLEAR__"
};

//sprawdz czy enter kliknieto
input.addEventListener('keydown', (key_pressed) => {

    if (key_pressed.key === 'Enter') {
        //komenda
        const cmd = input.value.trim().toLowerCase();
        
        //czyszczenie
        if (cmd === 'clear') {
            history.innerHTML = '';
            input.value = '';
            return;
        }

        //drokoj komende wpisana
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = `> ${input.value}\n`;

        //sprawdz komende
        if (commands[cmd]) {
            //wypisz tekst
            entry.textContent += commands[cmd];
        } else if (cmd !== '') {
            //daj errora
            entry.textContent += `command not found: "${cmd}". Type "help" for options.`;
        }

        history.appendChild(entry);
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

document.addEventListener('click', () => input.focus());
