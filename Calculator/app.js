let input = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    buttons.addEventListener('click', (e) => {
        if(e.target.innerHML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHML == 'AC'){
            string = "";
            input.value = string;
        }
          else{
            string += e.target.innerHML;
            input.value = string;
    
          }
    })
})