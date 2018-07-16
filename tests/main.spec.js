describe('Main', function () {
  var arr; 
  //Roda uma vez, antes do bloco
    before(function () {
      // Pode ser usado para inicar uma conexão no banco
      // Pode ser usado para criar um conjunto de dados
  });
  //Roda uma vez, depois do bloco
    after(function () {
      // Pode ser usado para fechar uma conexão no banco
      // Pode ser usado para apagar um conjunto de dados criado no after
  });
    // Roda todas as vezes, antes de CADA bloco
    beforeEach(function () {
       arr = [1, 2, 3];
  });
    // Roda todas as vezes, depois de CADA bloco
    afterEach(function () {
      
    });       

    it('should have a size of 4 when push another value to the array',function(){
      
      arr.push(4);
      console.log(arr.length);//4
    });

    it('should have a size of 2 when pop a value from the array',function(){
      
      arr.pop();
      console.log(arr.length); //2
    });

    it('should remove 3 when use pop in the array',function(){
      
      console.log(arr.pop() === 3); //true
    });

    

}); 
