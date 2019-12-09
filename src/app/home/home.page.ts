import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  previousOperand: number = null;
  currentOperand: number = null;
  operation = '';

  displayValue: number;
  path = '';

  constructor() { }

  ngOnInit() {}

  handleClick(input, operatorOrNumber) {
debugger;
    this.path = this.path + ' ' + input;

    if (operatorOrNumber) {
      if(this.previousOperand !== null && this.currentOperand !== null) {
        this.calculate();
        this.operation = input;
        this.currentOperand = null;
      }
      else if(input === '=') {
        this.path = '';
        this.calculate();
        this.previousOperand = this.displayValue;
        this.currentOperand = null;
      } else {
        this.operation = input;
        this.previousOperand = this.currentOperand;
        this.currentOperand = null;
      }
    } else {
      this.currentOperand = (this.currentOperand*10) + input;
    }

  }

  calculate() {
    
    if(this.previousOperand === null || this.currentOperand === null) return;

    switch(this.operation) {
      
      case '+': {
        this.displayValue = this.currentOperand + this.previousOperand;
      }

    }
  }

  reset() {
    this.currentOperand = null;
    this.previousOperand = null;
    this.path = '';
  }

}