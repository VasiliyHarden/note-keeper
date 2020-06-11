import React from 'react';
import { FilterBarView } from './FilterBarView';
import { setTextFilter } from '../../../../store/filters';
import { connectToStore } from '../../../../hoc/connectToStore';

import './FilterBar.scss';

class FilterBar extends React.Component {
  state = {
    inputValue: ''
  };
  onSearchClick = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.props.setTextFilter(this.state.inputValue);
    }
  };
  onInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState(() => ({ inputValue }));
  };
  render() {
    return (
      <FilterBarView 
        value={this.state.inputValue}
        onChange={this.onInputChange}
        onSubmit={this.onSearchClick}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connectToStore(null, mapDispatchToProps)(FilterBar);