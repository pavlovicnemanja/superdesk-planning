import React from 'react'
import { mount } from 'enzyme'
import { PubStatusField } from '../index'
import sinon from 'sinon'

describe('<PubStatusField/>', () => {
    it('publish an unpublished event', () => {
        const props = {
            input: {
                onChange: sinon.spy((e) => {
                    expect(e).toBe('usable')
                }),
                value: undefined,
            },
            label: 'label',
            meta: {
                touched: true,
                error: 'error',
            },
        }
        const wrapper = mount(<PubStatusField {...props}/>)
        wrapper.find('Toggle').simulate('click')
    })
    it('unpublish an unpublished event', () => {
        const props = {
            input: {
                onChange: sinon.spy((e) => {
                    expect(e).toBe(null)
                }),
                value: 'usable',
            },
            label: 'label',
            meta: {
                touched: true,
                warning : 'warning',
            },
        }
        const wrapper = mount(<PubStatusField {...props}/>)
        wrapper.find('Toggle').simulate('click')
    })
    it('unpublish a published event', () => {
        const props = {
            input: {
                onChange: sinon.spy((e) => {
                    expect(e).toBe('withhold')
                }),
                value: 'usable',
            },
            label: 'label',
            meta: { initial: 'usable' },
        }
        const wrapper = mount(<PubStatusField {...props}/>)
        wrapper.find('Toggle').simulate('click')
    })
})
