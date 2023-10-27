import React from "react";

function List({ item }) {
  const listitem = item.map((e) => <li key={e}>{e}</li>);
  return (
    <>
      <ul>{listitem}</ul>
    </>
  );
}

export default List;
