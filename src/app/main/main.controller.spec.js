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
  it('should calculate a total', () => {
    expect(mainctrl.calculation(1,2)).toEqual(3);
  })
  xit('should not accept anything other than numbers, operators, or spaces', () => {
  //   expect(mainctrl.calcStr).not.toEqual('abc');
  //   expect(mainctrl.calcStr).not.toEqual('&');
  })
});
