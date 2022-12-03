const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator{
    constructor(previousOperationText, currentOperationText){
        this.currentOperationText = currentOperationText;
        this.previousOperationText = previousOperationText;
        this.currentOperation = "";
    }
    
    // change values of the calculcator screen
    updateScreen(){
        this.currentOperationText.innerText += this.currentOperation;
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
        const previous =+this.previousOperationText.innerText;
        const current=+this.currentOperationText.innerText;

        switch(operation){
            case"+":
            operationValue = previous + current;
            this.updateScreen(operationValue,operation,current,previous);

                break;
            default:
                return;
        }
    }
    //changes values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null,
        current = null,
        previous = null,
        )
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