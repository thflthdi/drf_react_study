import React from 'react';
import { Input, List } from 'antd';
// const { produce } = require('immer');
// class TodoItem extends React.Component {
//   render() {
//     const { todo } = this.props;
//     return <li>{todo}</li>;
//   }
// }

// const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ['파이썬 익히기', '리엑트 익히기'],
    current: '',
    current2: '',
  };

  onChange = (e) => {
    const { value } = e.target;
    console.log('hi');
    this.setState({
      current: value,
    });
    console.log(value);
  };

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // this.setState(
      //   produce(this.state, (draft) => {
      //     const current = draft.current.trim();
      //     if (current.length > 0) {
      //       draft.current = '';
      //       draft.todoList.push(current);
      //     }
      //   }),
      // );
      const { todoList, current } = this.state;
      if (current.trim().length > 0) {
        this.setState({
          current: '',
          todoList: [...todoList, current],
        });
      }
    }
  };

  onDelete = (index) => {
    const { todoList } = this.state;
    todoList.splice(index, 1);
    this.setState({ todoList });
  };

  render() {
    return (
      <div style={{ width: '300px', margin: '30px auto' }}>
        <List
          dataSource={this.state.todoList}
          bordered={true}
          renderItem={(todo, index) => (
            <List.Item>
              {/* Todo: Input으로 Update 만들기 */}
              {/* <Input
                type="text"
                value={this.state.current2}
                placeholder={todo}
              ></Input> */}
              <div>{todo}</div>
              <div onClick={() => this.onDelete(index)}>X</div>
            </List.Item>
          )}
          //   style={{ marginBottom: '4px;' }}
        />
        <Input
          type="text"
          value={this.state.current}
          placeholder={'할 일을 입력해주세요'}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        ></Input>

        {/* <ul>
          {this.state.todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
        <input
          type="text"
          placeholder="할일을 입력해주세요"
          value={this.state.current}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
        />
        <hr />
        {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default TodoList;
