import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  displayValue: number = 0;

  operands = [0, 0];
  index = 0;
  operator = ''

  constructor() { }

  ngOnInit() {}

  handleClick(input, isOperator) {

    if(isOperator) {
      // operator block
      
      if(this.index == 1) {
        this.calculate(input);
      } else {
        this.index = 1;
      }

      this.operator = input;

    } else {
      //number
      this.operands[this.index] = (this.operands[this.index] * 10) + +input;
    }

  }

  reset() {
    this.operands = [0, 0];
    this.operator = '';
    this.index = 0;
    this.displayValue = 0;
  }

  get path() {
    return `${this.operands[0]} ${this.operator} ${this.operands[1]}`;
  }

  calculate(currentOperator) {
    // do the thing
    switch(this.operator) {
      case '+': {
        this.operands[0] = this.operands[0] + this.operands[1];
        break;
      }
      case '-': {
        this.operands[0] = this.operands[0] - this.operands[1];
        break;
      }
      case '*': {
        this.operands[0] = this.operands[0] * this.operands[1];
        break;
      }
      case '/': {
        this.operands[0] = this.operands[0] / this.operands[1];
        break;
      }
      default: break;
    }
    this.displayValue = this.operands[0]
    this.operands[1] = 0;

    this.operator = currentOperator;

  }

}