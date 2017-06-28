describe('controllers', () => {
  let vm;
  beforeEach(inject(() => {
    vm = $controller('MainController');
  }));
  it('should render', () => {
    expect(vm.solution).toEqual('test');
  })
});
