import React from 'react'
import Column from './components/column.jsx'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
  
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
        <Column className="column" id="0"/>
        <Column className="column" id="1"/>
        <Column className="column" id="2"/>
        <Column className="column" id="3"/>
        <Column className="column" id="4"/>
        <Column className="column" id="5"/>
        <Column className="column" id="6"/>
      </div>
    );
  }
}


export default Board


