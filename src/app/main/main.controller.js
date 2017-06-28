export class MainController {
  constructor () {
    'ngInject';
    this.calcStr = '';
    this.noLetters = '(\[-+\]\?\[0-9\]\*\.\?\[0-9\]\*\.+\[\\/\\+\\-\\*\])+(\[-+\]\?\[0-9\]\*\.\?\[0-9\]+)'
    this.calculation = (a,b) => {
      return a + b;
    };
  }
}
