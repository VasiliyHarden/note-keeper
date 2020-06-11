import React from 'react';

import './ButtonGroup.scss';

class ButtonGroup extends React.PureComponent {
  render() {
    return (
      <div className='btn-group'>
        {
          this.props.buttons.map(({ label, handler, ref = null }) => (
            <button
              onClick={handler}
              className='btn-group__btn'
              key={label}
              ref={ref}
            >
              {label}
            </button>
          ))
        }
      </div>
    );
  }
}

export { ButtonGroup };