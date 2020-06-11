import React from 'react';

const FilterBarView = (props) => (
  <form className='filter-bar' onSubmit={props.onSubmit}>
    <input 
      type='text'
      placeholder='Filter by substring'
      className='filter-bar__input'
      value={props.value}
      onChange={props.onChange}
    />
    <button className='filter-bar__btn'>
      Search
    </button>
  </form>
);

export { FilterBarView };