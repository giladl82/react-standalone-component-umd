// import React from 'react';
import css from './style.css'

export class Fancy extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      text: 'This is so Fancy!'
    }

    this.refreshData = this.refreshData.bind(this);
  }

  refreshData () {
    this.setState({
      text: 'Fancy and updated'
    })
  }

  render() {
    const style = {
      color: this.props.color ? this.props.color : ''
    }

    return (
      <div style={style} className={css.fancy}>{this.state.text}</div>
    );
  }
}

export const init = ((selector, props) => {
  return ReactDOM.render(<Fancy {...props} />, document.querySelector(selector));
})
