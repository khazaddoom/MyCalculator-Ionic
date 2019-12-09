import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value: number;

  path: string = '';


  side: [number, number];
  index: number;

  operateOn = null;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  handleClick(input, operator) {
debugger;
    this.path = this.path.concat(input);

    if (operator) {

      if(input === 'AC') this.initialize();
      
      if(this.index === 1) {
        // calculate(this.operateOn)
        this.value = this.calculate(this.operateOn);
        
        if(input !== '=')
          this.operateOn = input;
        else {
          this.index = 1;
        }

      } else {
        this.operateOn = input;
        this.index = this.index === 0? 1 : 0; // We only need a 2 index array.
      }   
      

    } else {
      if(this.side[this.index] === 0)
        this.side[this.index] = (this.side[this.index] * 10) + input;
      else
        this.side[this.index] = input;
    }

  }

  initialize() {

    this.value = 0;
    this.side = [0, 0];
    this.index = 0;

  }

  calculate(operateOn) {

    switch(operateOn) {
      case '+': {
        this.side[0] = this.side[0] + this.side[1];
        break;
      }

      case '-': {
        this.side[0] = this.side[0] - this.side[1];
        break;
      }

      case '*': {
        this.side[0] = this.side[0] * this.side[1];
        break;
      }
    }

    return this.side[0];

  }


}

export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
  CLEAR = 'CLEAR'
}