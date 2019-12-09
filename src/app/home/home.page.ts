import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  previousOperand = '';
  currentOperand = '';
  operation = '';

  displayValue = '';

  constructor() { }

  ngOnInit() {}

  handleClick(input, operatorOrNumber) {
debugger;
    if (operatorOrNumber) {
      if(this.previousOperand !== '' && this.currentOperand !== '') {
        this.calculate();
        this.operation = input;
        this.currentOperand = '';
      }
      else if(input === '=') {
        this.calculate();
        this.previousOperand = this.displayValue;
        this.currentOperand = '';
      } else {
        this.operation = input;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
      }
    } else {
      this.currentOperand = this.currentOperand + input;
    }
  }

  calculate() {
    
    if(this.previousOperand === '' || this.currentOperand === '') return;

    switch(this.operation) {
      
      case '+': {
        this.displayValue = this.currentOperand + this.previousOperand;
      }

    }
  }

}