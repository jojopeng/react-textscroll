import React from 'react'
import Vertical from './Vertical'
import { mount, configure } from 'enzyme'
import { TextScrollProp, Mode } from 'interface'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
// import render from 'preact-render-to-json'

configure({ adapter: new Adapter() })

describe('render', () => {
  const data: string[] = [
    '还是上面的例子，我们将transition属性合并，并扩展几个浏览器，如下CSS代码：',
    '向上滚动动画',
    '向上滚'
  ]

  it('renders four <li/> components', () => {
    const props: TextScrollProp = { mode: Mode.vertical, text: data, speed: 5000 }
    const wrapper = mount(<Vertical {...props} />)
    expect(wrapper.find('li')).toHaveLength(4)
    // expect(wrapper.find('li')).toHaveLength(4)
  })

})