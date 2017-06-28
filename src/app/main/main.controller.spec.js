describe('controllers', () => {
  let mainctrl, elem;
  beforeEach(angular.mock.module('vibrenthealth'));
  beforeEach(inject(($controller) => {
    mainctrl = $controller('MainController');
    elem = angular.element('<input type="text"></input>');
  }));
  it('should render and input', () => { 
    expect(elem.html()).not.toEqual(null);
  })
  xit('should calculate a total', () => {
    expect(mainctrl.solution).toEqual('test');
  })
});
