import React from "react";

export default function Input(props) {
  return (
    <div class="input-text-container">
      <label style={{ display: "block" }}>{props.label}</label>
      <input class="input-text" placeholder={props.placeholder} />
    </div>
  );
}
