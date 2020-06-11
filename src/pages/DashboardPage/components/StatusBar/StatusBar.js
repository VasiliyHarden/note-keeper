import React from 'react';
import { connectToStore } from '../../../../hoc/connectToStore';
import { clearTextFilter } from '../../../../store/filters';

import './StatusBar.scss';

class StatusBar extends React.PureComponent {
  render() {
    if (!this.props.text) {
      return null
    }
    return (
      <div className='status-bar'>
        Current filter: {this.props.text}
        <button 
          className='status-bar__btn'
          onClick={() => { this.props.clearTextFilter() }} 
        >
          Clear
        </button>
      </div>    
    );
  }
}

const mapStateToProps = (store) => {
  const { filters: { text } } = store;
  return { text };
}

const mapDispatchToProps = (dispatch) => ({
  clearTextFilter: () => dispatch(clearTextFilter())
});

export default connectToStore(mapStateToProps, mapDispatchToProps)(StatusBar);