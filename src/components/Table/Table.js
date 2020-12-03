import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';
import './Table.css';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="tableHead">
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <TableRow itemList={this.props.itemList} query={this.props.query} />
          </tbody>
        </table>
      </div>
    );
  }
}
