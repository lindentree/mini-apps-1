import React from 'react'
import ReactDOM from 'react-dom'

class Board extends React.Component {
  renderSquare(val) {
    return <Square value={val} />;
  }

  renderRow(val) {
  	return (<div className="board-row">
          {Array(7).fill(1).map((el, i) =>
            this.renderSquare(null) 
          )}
        </div>
        )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        {this.renderRow(null)}
        {this.renderRow(null)}
        {this.renderRow(null)}
        {this.renderRow(null)}
        {this.renderRow(null)}
        {this.renderRow(null)}
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}


ReactDOM.render(<Board />, document.getElementById('app'));