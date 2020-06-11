import React from 'react';
import { resizeTextarea } from './utils/resizeTextarea';

import './TextArea.scss';

const TEXTAREA_MIN_HEIGTH = 150;

class TextArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.elemRef = React.createRef();
  }
  componentDidMount() {
    resizeTextarea(this.elemRef.current, TEXTAREA_MIN_HEIGTH);
  }
  componentDidUpdate() {
    resizeTextarea(this.elemRef.current, TEXTAREA_MIN_HEIGTH);
  }
  onChange = (e) => {
    this.props.onChange(e.target.value, this.props.dataType);
  }
  render() {
    return (
      <textarea
        placeholder='Provide a description'
        className='modal__input modal__textarea'
        value={this.props.value}
        onChange={this.onChange}
        ref={this.elemRef}
      />      
    );
  }
}

export default TextArea;