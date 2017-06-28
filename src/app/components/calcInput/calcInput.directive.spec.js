describe('calcInput', () => {
  let element, vm;

  beforeEach(angular.mock.module('vibrenthealth'));

 beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <calc-input></calc-input>
    `);

    // var test = $compile(element)($rootScope.$new());
    $rootScope.$digest();
    // vm = test.isolateScope().vm;
  }));

  it('should render and input', () => { 
    expect(element.html()).not.toEqual(null);
  })
  it('should calculate a total', ($log) => {
    $log('Isolated scope:', vm);
    // expect(element.isolateScope().vm).toBeDefined();
    // expect(vm.calculation(1,2)).toEqual(3);
  })
  // using this reference https://stackoverflow.com/questions/40019907/how-to-unit-test-angular-form-validation-with-jasmine
  xit('should not accept anything other than numbers, operators, or spaces', () => {
    expect(vm).toEqual(jasmine.any(Object));
  //   expect(inputctrl.calcStr).not.toEqual('abc');
  //   expect(inputctrl.calcStr).not.toEqual('&');
  })
});
