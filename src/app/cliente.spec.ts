import { Cliente } from './cliente';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente("","","","","",0)).toBeTruthy();
  });
});
