let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                const indexOfp = display.innerText.indexOf('(');
                if(indexOfp!=-1&&parseFloat(display.innerText[indexOfp-1])!='NaN')
                {
                    display.innerText = display.innerText.substring(0,indexOfp)+'*'+display.innerText.substring(indexOfp);
                }
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Błąd!';
                }
                break;
            default:
                    display.innerText += e.target.innerText;
        };
    });
});