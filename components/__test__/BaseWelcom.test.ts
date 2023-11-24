import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseWelcome from '../BaseWelcome.vue'

describe('BaseWelcome component', () => {
  test('text render correctly', () => {
    const message = 'Nuxt3 Starter Kit'
    const wrapper = mount(BaseWelcome, {
      props: {
        message
      }
    })
    expect(wrapper.find('h1').text()).toEqual(message)
  })
})
