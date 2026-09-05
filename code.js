const input = document.getElementById('terminal-input')
const history = document.getElementById('terminal-history')

//lista komend co mozna uzyc
const commands = {
    'profiles': "Profiles:\n  Youtube: <a href='https://www.youtube.com/@Tutkuww' target='_blank'>@Tutkuww</a>\n  Printables: <a href='https://www.printables.com/@tutkuw_2466432' target='_blank'>tutkuw_</a>\n",
    'about': "\ntutkuw | tech enthusiast fascinated by electronics, 3D printing, physics, and math.\n",
    'help': "\nCommands:\n  profiles  : List my profiles\n  projects  : Stuff I am working on\n  gear      : My hardware and 3D printing setup\n  skills    : Things I know\n  contact   : How to reach me\n  help      : Show this menu\n  clear     : Clear the screen\n  about     : some stuff about me\n",
    'skills': "\nSkills:\n  Design : 3D Modeling (Fusion 360), Circuit Layout\n  Code   : C++, Python, Web (HTML/CSS)\n",
    'gear': "\nHardware & Tools:\n  3D Printer : Ender 3 V3 SE moded\n  Micro      : Arduino, Raspberry Pi, ESP32\n  Software   : Fusion 360, FreeCad, Cura Slicer\n",
    'projects': "\nCurrent Projects:\n  - Macro pad (esp32)\n  - 3D Printed Robotic Arm\n  - J.A.R.V.I.S ai assistant (like the one from Iron Man)\n",
    'contact': "\nDm me on discord\n  Discord tag: tutkuww\n",
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
        entry.innerHTML = `> ${input.value}\n`;

        //sprawdz komende
        if (commands[cmd]) {
            //wypisz tekst
            entry.innerHTML += commands[cmd];
        } else if (cmd !== '') {
            //daj errora
            entry.innerHTML += `command not found: "${cmd}". Type "help" for options.`;
        }

        history.appendChild(entry);
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

document.addEventListener('click', () => input.focus());
