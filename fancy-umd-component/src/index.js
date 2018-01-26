// import React from 'react';
import css from './style.css'

export class Fancy extends React.Component {
  render() {
    const style = {
      color: this.props.color ? this.props.color : ''
    }

    return (
      <div style={style} className={css.fancy}>This is so Fancy!</div>
    );
  }
}

export const init = ((selector, props) => {
  ReactDOM.render(<Fancy {...props} />, document.querySelector(selector));
})
