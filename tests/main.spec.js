describe('Main', function () {
  //Roda uma vez, antes do bloco
    before(function () {
      console.log('before')
  });
  //Roda uma vez, depois do bloco
    after(function () {
      console.log('after');
  });
    // Roda todas as vezes, antes de CADA bloco
    beforeEach(function () {
      console.log('beforeEach');
  });
    // Roda todas as vezes, depois de CADA bloco
    afterEach(function () {
      console.log('afterEach');
    });

    it('test 1',function(){

    });

    it('test 2',function(){

    });

    

}); 
