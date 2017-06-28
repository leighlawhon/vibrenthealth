export class MainController {
  constructor () {
    'ngInject';
    this.calcStr = '';
    this.calculation = (a,b) => {
      return a + b;
    };
  }
}
