/*
 * title 标题
 * field 提交字段
 * required 是否校验
 * data 组件的数据
 * name 数据渲染的名字
 * id 数据渲染的id
 * component 渲染的组件
 */
export const componentList = [
  {
    title: '姓名',
    field: 'name',
    required:true,
    name: 'label',
    id: 'value',
    component: 'select',
    data: [
      {
        label: 'qiu',
        value: '1'
      },
      {
        label: 'yuan',
        value: '2'
      }
    ]
  },
  {
    title: '性别',
    field: 'sex',
    name: 'label',
    id: 'value',
    component: 'radio',
    data: [
      {
        label: '男',
        value: '1'
      },
      {
        label: '女',
        value: '2'
      }
    ]
  },
  {
    field: 'inputValue',
    title: '年龄',
    component: 'input'
  }
]

export const list = [
  {
    label: 'qiu1',
    value: '1'
  },
  {
    label: 'qiu2',
    value: '2'
  },
  {
    label: 'qiu3',
    value: '3'
  },
  {
    label: 'qiu4',
    value: '4'
  },
  {
    label: 'qiu5',
    value: '5'
  },
  {
    label: 'qiu6',
    value: '6'
  },
  {
    label: 'qiu7',
    value: '7'
  },
  {
    label: 'qiu8',
    value: '8'
  },
  {
    label: 'qiu9',
    value: '9'
  },
  {
    label: 'qiu10',
    value: '10'
  }
]
