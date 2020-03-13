import React from "react";

export default function Header() {
  return (
    <div class="Header" style={headerStyle}>
      <h1>
        <p>ลอยกระทงออนไลน์</p>
      </h1>
    </div>
  );
}

const headerStyle = {
  color: "white",
  background:
    "url(https://s.isanook.com/se/0/loykrathong/2019/assets/img/bg-header.png) center bottom no-repeat",
  backgroundSize: "100%",
  height: "400px",
  maxWidth: "1170px",
  padding: "0px 15px",
  margin: "0px auto"
};
