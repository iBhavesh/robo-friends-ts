import React from "react";

const Scroll = (props) => (
  <div className="overflow-y-scroll ba bw2 vh-75 ">{props.children}</div>
);

export default Scroll;
