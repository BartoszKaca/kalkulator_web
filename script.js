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
                const indexOf2p = display.innerText.indexOf(')');
                console.log(parseFloat(display.innerText[indexOfp-1]));
                if(parseFloat(display.innerText[indexOfp-1])!='NaN')
                {
                    console.log(display.innerText.substring(0,indexOfp)+'*'+display.innerText.substring(indexOfp));
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