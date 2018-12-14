import React from 'react'

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Column extends React.Component {
	constructor(props) {
      super(props); 
    }


    renderSquare(val) {
      return <Square value={val} />;
    }

    render() {
    	return (
          <div id="outer">
            <div>{this.renderSquare(null)}</div>
            <div>{this.renderSquare(null)}</div>
            <div>{this.renderSquare(null)}</div>
            <div>{this.renderSquare(null)}</div>
            <div>{this.renderSquare(null)}</div>
            <div>{this.renderSquare(null)}</div>
          </div>
        )
    }
}

export default Column;