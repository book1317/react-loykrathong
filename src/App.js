import React from "react";
import "./styles.scss";
import "./formStyles.css";
import Form from "./components/Form";
import KratongForm from "./components/KratongForm";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <div class="App">
      <Header />
      <Content />
      <strong class="form-header-text">
        ขอพรให้คุณเป็นคนใหม่ อยากกำจัดอะไร ก็ลอยทิ้งเลย
      </strong>
      <form style={formContainerStyle}>
        <KratongForm />
        <Form />
        <div>
          <button class="button-flow" />
        </div>
      </form>
    </div>
  );
}

const formContainerStyle = {
  display: "inline-block",
  padding: "20px",
  background: "#270044",
  border: "2px solid #5be8ff",
  borderRadius: "4rem"
};
