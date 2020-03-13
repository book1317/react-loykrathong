import React from "react";

export default function Image(props) {
  return (
    <div style={{ width: "25%", display: "inline-block" }}>
      <img
        src={props.src}
        width="116"
        height="116"
        name="avas_1.png"
        alt="avas_1.png"
      />
      <h3 style={{ color: "white" }}>{props.label}</h3>
    </div>
  );
}
