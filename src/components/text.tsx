import React from 'react';

/*
 * @Author: xbai xbai@foxmail.com
 * @Date: 2024-09-27 10:11:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-11 20:06:35
 * @FilePath: \react-ts\src\components\text.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MyComponent extends React.Component {
  // render 阶段 ： 纯净且不包含副作用，可能会被React暂停、终止或重新启动
  constructor(props) {
    super(props);
  }

  getDerivedStateFromProps(props, state): Object {
    return {};
  }

  shouldComponentUpdate(nextProps, nextState): boolean {
    return true;
  }

  render() {
    return <div></div>;
  }

  // pre-commit 阶段：可以读取DOM
  getSnapshotBeforeUpdate(nextProps, nextState) {}

  // commit 阶段，可以使用DOM，运运行副作用，安排更新。
  componentDidMount(): void {}

  componentDidUpdate(prevProps: any, prevState, snapshot): void {}

  componentWillUnmount(): void {}
}
