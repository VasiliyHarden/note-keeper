import React from 'react';
import { connectToStore } from '../../hoc/connectToStore';
import { listLayout, masonryLayout } from '../../store/layouts';
import { layoutTypes } from '../../constants/layout-types';

import './Header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.masonryRef = React.createRef();
    this.state = {
      isList: this.props.layoutType === layoutTypes.list
    }
  }
  onListClick = () => {
    this.listRef.current.classList.add('layout__option--active');
    this.masonryRef.current.classList.remove('layout__option--active');
    this.props.listLayout();
  };
  onMasonryClick = () => {
    this.listRef.current.classList.remove('layout__option--active');
    this.masonryRef.current.classList.add('layout__option--active');
    this.props.masonryLayout();
  };
  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <h1 className='header__title'>Note Keeper</h1>
          <div>
            <span 
              className='layout__option layout__option--active' 
              ref={this.listRef}
              onClick={this.onListClick}
              tabIndex='0'
            >
              <i className="fas fa-ellipsis-v"></i>
            </span>
            <span 
              className='layout__option' 
              ref={this.masonryRef}
              onClick={this.onMasonryClick}
              tabIndex='0'
            >
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (store) => {
  const { layouts: { layoutType } } = store;
  return {
    layoutType
  }
};

const mapDispatchToProps = (dispatch) => ({
  listLayout: () => dispatch(listLayout()),
  masonryLayout: () => dispatch(masonryLayout())
});

export default connectToStore(mapStateToProps, mapDispatchToProps)(Header);