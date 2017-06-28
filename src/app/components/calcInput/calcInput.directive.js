export function CalcInput() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/calcInput/calcInput.html',
    link: linkFunc,
    controller: CalcInputCtrl,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc() {
    
  }

}

class CalcInputCtrl {
  constructor () {
    'ngInject';
    this.calcStr = '';
    this.noLetters = '(\[-+\]\?\[0-9\]\*\.\?\[0-9\]\*\.+\[\\/\\+\\-\\*\])+(\[-+\]\?\[0-9\]\*\.\?\[0-9\]+)'
    this.calculation = (a,b) => {
      return a + b;
    };
  }
}