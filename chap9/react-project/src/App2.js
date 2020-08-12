import React from 'react';

class Wrapper extends React.Component {
  render() {
    return (
      <section style={{ padding: '4em', background: 'papayawhip' }}>
        {this.props.children}
      </section>
    );
  }
}

class Title extends React.Component {
  render() {
    const fontSize = this.props.isBig ? '3em' : '1.5em';
    return (
      <h1 style={{ fontSize, textAlign: 'center', color: 'palevioletred' }}>
        {this.props.children}
      </h1>
    );
  }
}

function App2() {
  const component = <Title>Hello World!</Title>;
  return <Wrapper children={component} />;
}

export default App2;
