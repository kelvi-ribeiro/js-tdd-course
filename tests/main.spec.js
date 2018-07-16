import  {expect} from 'chai';
import {sum, sub, mult, div} from '../src/main.js';

describe('Calc', () =>  {

  describe('Smoke tests',() => {
  
  });

    describe('Sum',() => {
      it('should return 4 when `sum(2,2)`',() => {
        expect(sum(2,2)).to.be.equal(4);
      });
    });  
    

  
    describe('Sub',() => {
      it('should return 4 when `sub(6,2)`',() => {
        expect(sub(6,2)).to.be.equal(4);
      });      
      
      it('should return -4 when `sub(6,10)`',() => {
        expect(sub(6,10)).to.be.equal(-4);
      });    
    });      

    describe('Mult',() => {
      it('Should return 4 when `mult(2,2)` ',() => {
        expect(mult(2,2)).to.be.equal(4);
      });
    });

    describe('Div',() => {
      it('Should return 2 when `div(4,2)` ',() => {
        expect(div(4,2)).to.be.equal(2);
      });

      it('should return `Não é possível divisão por zero` when divide by 0',() => {
        expect(div(4,0)).to.be.equal('Não é possível divisão por zero!');
      });
    })

  });    
    
