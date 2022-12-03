const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.currentOperationText = currentOperationText;
        this.previousOperationText = previousOperationText;
        this.currentOperation = "";

    }

    //add digit to calculator screen
    addDigit(digit){
        //check if current operation already has a dot
        if(digit ==="," && this.currentOperationText.innerText.includes(",")){
            return;
        }
        this.currentOperation = digit;
        this.updateScreen();
    }
    // process all calculator operations
    processOperation(operation){

        //get currente and previous value
        let operationValue;
        let previous =+this.previousOperationText.innerText;
        let current=+this.currentOperationText.innerText;

        switch(operation){
            case"+":
                break;
            default:
                return;
        }
    }

    // change values of the calculcator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new calculator(previousOperationText, currentOperationText);

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const value = e.target.innerText;

        if(+value>=0 || value === ","){
            calc.addDigit(value);
        } else{
            calc.processOperation(value);
        }

    });
});