import React from 'react';
import { noteColors } from '../../../../../constants/note-colors';

import './ColorPicker.scss';

class ColorPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.pickerRef = React.createRef();
  }
  componentDidMount() {
    this.pickerRef.current.addEventListener('focus', () => {
      this.setState(() => ({ isOpen: true }));
    });
    this.pickerRef.current.addEventListener('blur', () => {
      this.setState(() => ({ isOpen: false }));
    });
  }
  onColorPick = (e) => {
    const color = e.target.dataset.color;
    this.props.onChange(color, this.props.dataType);
    this.pickerRef.current.blur();
  };
  onColorClear = (e) => {
    this.props.onChange('', this.props.dataType);
    this.pickerRef.current.blur();
  }
  onCancelMouseDown = (e) => {
    e.preventDefault();
  }
  computeClasses = () => {
    const classes = ['color-picker'];
    classes.push(this.state.isOpen ? 'color-picker--focused' : 'color-picker--blurred');
    if (!this.state.isOpen && this.props.color) { 
      classes.push(noteColors[this.props.color]);
    }
    return classes.join(' ');
  }
  render() {
    return (
      <div className={ this.computeClasses() } ref={this.pickerRef} tabIndex='0'>
        {
          !this.state.isOpen &&
          (this.props.color ? 
          <span 
            className='color-picker__cancel-button'
            onClick={this.onColorClear}
            onMouseDown={this.onCancelMouseDown}
          >
            &times;
          </span>
          :
          <p className='color-picker__msg'>Pick a color</p>)
        }
        {
          this.state.isOpen &&
          Object.entries(noteColors).map(([colorName, className]) => {
            return (
              <div 
                key={colorName} 
                data-color={colorName}
                className={`color-pick ${className}`}
                onClick={this.onColorPick}
              >
              </div>
            );
          })
          
        }
      </div>
    );
  }
}

export default ColorPicker;