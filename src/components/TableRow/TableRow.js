import React, { Component } from 'react';

const TableRow = (props) => {
  console.log('tri', props);
  const filtered = props.itemList.data.filter((product) =>
    product.name.toLowerCase().includes(props.query.toLowerCase())
  );

  return filtered.map((product) => {
    return (
      <tr className="rowAll">
        <td className="rowName">{product.name}</td>
        <td className="rowPrice">{product.price}</td>
      </tr>
    );
  });
};

export default TableRow;
