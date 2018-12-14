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


  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="column" id="0"><Column /></div>
        <div className="column" id="1"><Column /></div>
        <div className="column" id="2"><Column /></div>
        <div className="column" id="3"><Column /></div>
        <div className="column" id="4"><Column /></div>
        <div className="column" id="5"><Column /></div>
        <div className="column" id="5"><Column /></div>
      </div>
    );
  }
}


export default Board


