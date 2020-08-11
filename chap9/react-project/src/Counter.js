import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propsType = {
    onClick: PropTypes.func,
  };
  state = {};
  render() {
    return <div onClick={this.props.onClick}>Counter</div>;
  }
}

export class Counter1 extends React.Component {
  static defaultProps = {
    color: 'red',
  };

  static propTypes = {
    color: PropTypes.string,
  };

  state = {
    color: this.props.color,
    value: 0,
  };
  onClick = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  onContextMenu = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      value: prevState.value >= 1 ? prevState.value - 1 : 0,
    }));
  };
  render() {
    const { color } = this.state;
    const { value } = this.state;
    return (
      <div
        onContextMenu={this.onContextMenu}
        onClick={this.onClick}
        style={{ ...style, backgroundColor: color }}
      >
        {value}
      </div>
    );
  }
}

const style = {
  width: '100px',
  height: '100px',
  display: 'inline-block',
  borderRadius: '50px',
  textAlign: 'center',
  lineHeight: '100px',
  userSelect: 'none',
  margin: '1rem',
  fontSize: '3rem',
};

export default Counter;
