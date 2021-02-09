import React from "react";

function MemoComp({ name }) {
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
