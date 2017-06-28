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
    this.calcTotal = () => {
    	this.calcStr = this.calcStr.replace(/[\s]/g, '');
    	const operators = this.calcStr.match(/[\+]+/);
    	const paranArray = [], multiplyArr = [], divArr = [], addArr = [], subArr = [];
    	multiplyArr.push(this.calcStr.split('*'));
    	for (var i = multiplyArr.length - 1; i >= 0; i--) {
    		divArr.push(multiplyArr[i].split('+'))
    	}
    	// addArr.push(this.calcStr.split('+'));
    	console.log(multiplyArr);
    }
  }
}