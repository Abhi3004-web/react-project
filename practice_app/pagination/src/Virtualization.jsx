import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = React.memo(({ index, style, data }) => {
  const item = data[index];

  return (
    <div style={style}>
      {item.username} - {item.age}
    </div>
  );
});

export default function Virtualization({ data = [] }) {
  return (
    <List
      height={400}
      width={400}
      itemCount={data.length}
      itemSize={40}
      itemData={data}
    >
      {Row}
    </List>
  );
}