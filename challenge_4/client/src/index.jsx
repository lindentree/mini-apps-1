import React from 'react'
import ReactDOM from 'react-dom'

// class ConnectFourRow extends React.Component {
//    render() {
//    	 return (
//        <div>
//          <h1> Hello world! </h1>
//        </div>

//    	 	);
//    }

// }


class Board extends React.Component {
  renderSquare(val) {
    return <Square value={val} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
        <div className="board-row">
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
          {this.renderSquare(null)}
        </div>
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