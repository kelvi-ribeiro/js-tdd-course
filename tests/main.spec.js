var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function () {

  describe('Smoke tests',function(){
  
  });

    describe('Sum',function(){
      it('should return 4 when `sum(2,2)`',function(){
        expect(calc.sum(2,2)).to.be.equal(4);
      });
    });  
    

  
    describe('Sub',function(){
      it('should return 4 when `sub(6,2)`',function(){
        expect(calc.sub(6,2)).to.be.equal(4);
      });      
      
      it('should return -4 when `sub(6,10)`',function(){
        expect(calc.sub(6,10)).to.be.equal(-4);
      });    
    });      

    describe('Mult',function(){
      it('Should return 4 when `mult(2,2)` ',function(){
        expect(calc.mult(2,2)).to.be.equal(4);
      });
    });

    describe('Div',function(){
      it('Should return 2 when `div(4,2)` ',function(){
        expect(calc.div(4,2)).to.be.equal(2);
      });

      it('should return `Não é possível divisão por zero` when divide by 0',function(){
        expect(calc.div(4,0)).to.be.equal('Não é possível divisão por zero!');
      });
    })

  });    
    
