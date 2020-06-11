import React from 'react';

const { Provider, Consumer } = React.createContext();

class StoreProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.store.getState(),
      dispatch: this.props.store.dispatch
    };
    this.props.store.subscribe(() => {
      this.setState(() => ({ ...this.props.store.getState() }));
    });
  }
  render() {
    return (
      <Provider value={ this.state }>
        { this.props.children }
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };