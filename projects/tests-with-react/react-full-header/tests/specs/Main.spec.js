import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme())

describe('FullHeader Hello', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />)
        expect(wrapper.find('header')).to.have.length(1)
    })
    context('title', () => {
        it('should have h1 when title passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />)
            expect(wrapper.find('h1')).to.have.length(1)
        })
        it('should not have have h1 when title is not passed', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('h1')).to.have.length(0)
        })

        it('should have have h1 with the title passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />)
            expect(wrapper.find('h1').props().children).to.be.equal('TDD')
        })
    })
    context('subtitle', () => {
        it('should have h2 when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle='TDD' />)
            expect(wrapper.find('h2')).to.have.length(1)
        })

        it('should not have have h2 when subTitle is not passed', () => {
            const wrapper = shallow(<FullHeader />)
            expect(wrapper.find('h2')).to.have.length(0)
        })

        it('should have have h2 with the title passed', () => {
            const wrapper = shallow(<FullHeader subtitle='Curso' />)
            expect(wrapper.find('h2').props().children).to.be.equal('Curso')
        })
    })
    context('bgColor', () => {
        it('should have backgrund-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title='Teste' />)
            expect(wrapper).to.have.style('background-color').equal('#ccc')
        })

        it('should have backgrund-color equal #000 when bgColor is passed with #000 value', () => {
            const wrapper = shallow(<FullHeader title='Teste' bgColor='#000' />)
            expect(wrapper).to.have.style('background-color').equal('#000')
        })
    })
});
