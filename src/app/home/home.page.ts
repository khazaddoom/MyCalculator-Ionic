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
      this.operator = input;
      this.index = (this.index == 0)? 1: 0;
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

}