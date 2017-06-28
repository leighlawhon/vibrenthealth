export function CalcInput() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/calcInput/calcInput.html',
    link: linkFunc,
    controller: CalcInputCtrl,
    controllerAs: 'calc'
  };

  return directive;

  function linkFunc(scope, el, attr, vm) {
    
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