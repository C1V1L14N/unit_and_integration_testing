import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'



describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.previousTotal = 4
      wrapper.vm.add('5');
      expect(wrapper.vm.runningTotal).to.equal(9);
  })
})

// Add is tested above so there is no need for a dedicated test

describe('App.vue', () => {
  it('should be able to subtract numbers', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })
})

describe('App.vue', () => {
  it('should be able to multiply numbers', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15);
  })
})

describe('App.vue', () => {
  it('should be able to divide numbers', () => {
  const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3);
  })
})

describe('numberClick', () => {
  it('should concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(2)
      wrapper.vm.numberClick(3)
      wrapper.vm.numberClick(4)
      wrapper.vm.numberClick(5)
      wrapper.vm.numberClick(6)
      wrapper.vm.numberClick(7)
      expect(wrapper.vm.runningTotal).to.equal(234567)
  })
})

describe('operatorClick', () => {
  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(5)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(5)
      wrapper.vm.operatorClick('/')
      wrapper.vm.numberClick(2)
      wrapper.vm.operatorClick('*')
      wrapper.vm.numberClick(5)
      wrapper.vm.operatorClick('=')  
      expect(wrapper.vm.runningTotal).to.equal(25)
  }) 
})

describe('clearClick', () => {
  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
      wrapper.vm.numberClick(4)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(4)
      wrapper.vm.operatorClick('+')
      wrapper.vm.numberClick(4)
      wrapper.vm.clearClick()
      expect(wrapper.vm.runningTotal).to.equal(0)
      expect(wrapper.vm.previousTotal).to.equal(8)
  })
})