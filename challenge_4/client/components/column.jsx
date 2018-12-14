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
          <div>
            {this.renderSquare(null)}
            {this.renderSquare(null)}
            {this.renderSquare(null)}
            {this.renderSquare(null)}
            {this.renderSquare(null)}
            {this.renderSquare(null)}
          </div>
        )
    }
}

export default Column;