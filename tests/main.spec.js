describe('Main', function () {
  describe('Method A', function () {
    context('Case 1', function () {
      it.skip('schould happen blabla', function () {
        // Espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar (4) => true | false => broken test
        throw new Error('just an error');
      });
    });
    context('Case 2', function () {
      it('schould happen blabla', function () {
        // Espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar (4) => true | false => broken test
        throw new Error('just an error');
      
      });

      it('schould happen mimi', function () {
        // Espera que aconteça
        // Entrada de dados / método sum(2,2)
        // Espera retornar (4) => true | false => broken test

      });

    });
  });
  describe('Mehotd B', function () {

  });
}); 
