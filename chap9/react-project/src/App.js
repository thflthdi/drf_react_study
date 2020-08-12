import React from 'react';
// import { Button } from 'antd';
import PropTypes from 'prop-types';
import Profile from 'Profile';
import Message from 'Message';
import Counter, { Counter1 } from 'Counter';
import ThemedButton from 'ThemedButton';
import 'App.css';

// const actions = {
//   init(initialValue) {
//     return { value: initialValue };
//   },
//   increment(prevState) {
//     return { value: prevState.value + 1 };
//   },
//   decrement(prevState) {
//     return { value: prevState.value - 1 };
//   },
// };

// class Counter1 extends React.Component {
//   state = {
//     value: this.props.initialValue,
//   };
//   onClick = () => {
//     const { value } = this.state;
//     if (value === 10) {
//       this.setState({ value: 0 });
//     } else {
//       this.setState({ value: value + 1 });
//     }
//   };
//   render() {
//     const { value } = this.state;

//     return (
//       <div>
//         Counter1 : {value}
//         <Button style={{ width: 100 }} type="primary" onClick={this.onClick}>
//           +1
//         </Button>
//         <Button onClick={() => this.setState(actions.increment)}>+1</Button>
//         <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
//       </div>
//     );
//   }
// }

// class FruitComponent extends React.Component {
//   state = {
//     fruit: this.props.fruits,
//     is_click: ['', '', ''],
//   };

//   render() {
//     const { is_click } = this.state;
//     const handler = (index) => {
//       if (is_click[index] === 'is_clicked') {
//         is_click[index] = '';
//       } else {
//         is_click[index] = 'is_clicked';
//       }
//       this.setState({ is_click });
//     };
//     return (
//       <div>
//         <h1>좋아하는 과일</h1>
//         <ul>
//           {this.props.fruits.map((name, index) => (
//             <li key={index} onClick={() => handler(index)}>
//               {name}
//               {is_click[index]}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// function App() {
// const fruits = ['바나나', '딸기', '복숭아'];
// return (
//   <div>
//     <Counter1 initialValue={0} />
//     <FruitComponent fruits={fruits} />
//   </div>
//     <div>

//     </div>
//   );
// }

class PostDetail extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  };
  state = {
    postDetail: null,
  };
  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }
  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }
  requestPost(postId) {
    console.log(`request post #${postId}`);
    this.setState({
      postDetail: null,
    });
    setTimeout(() => {
      this.setState({
        postDetail: `로딩된 post #${postId}`,
      });
    }, 1000);
  }
  render() {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {!postDetail && '로딩중 ..'}
        {postDetail}
      </div>
    );
  }
}

class AppCounter extends React.Component {
  state = { myquery: '', language: '' };
  onChange = (e) => {
    const { name, value } = e.target;
    console.log('객체', { name });
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <Counter onClick={() => console.log('clicked')} />
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} />
        <hr />
        {JSON.stringify(this.state)}
      </>
    );
  }
}

class App extends React.Component {
  state = {
    postId: 10,
  };
  render() {
    return (
      <div>
        <ThemedButton theme="success" label="Say Hello" />
        <PostDetail postId={this.state.postId} />
        <button onClick={() => this.setState({ postId: 20 })}>
          postId 변경
        </button>
        <AppCounter />
        <hr />
        <Counter1 />
        <Counter1 color="green" />
        <Counter1 color={'blue'} />
        <hr />
        <Profile />
        <Message />
      </div>
    );
  }
}

export default App;
