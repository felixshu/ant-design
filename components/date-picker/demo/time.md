---
order: 3
title:
  zh-CN: 日期时间选择
  en-US: Choose Time
---

## zh-CN

增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

## en-US

This property provide an additional time selection. When `showTime` is an Object, its properties will be passed on to built-in `TimePicker`.

````jsx
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

ReactDOM.render(
  <div>
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      onChange={onChange}
    />
    <br />
    <RangePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange}
    />
  </div>
, mountNode);
````