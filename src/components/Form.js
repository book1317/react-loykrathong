import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <div class="Form">
      <div class="input-container">
        <Input
          label="ชื่อ-สกุล (ใส่ได้ไม่เกิน 30 ตัวอักษร)*"
          placeholder="พิมพ์ชื่อของคุณ"
        />
        <Input
          label="ใส่คำอธิษฐาน (ใส่ได้ไม่เกิน 120 ตัวอักษร)*"
          placeholder="พิมพ์คำอธิษฐานตรงนี้"
        />
        <Input label="อีเมล์*" placeholder="พิมพ์อีเมลล์ของคุณ" />
        <Input label="เบอร์โทร*" placeholder="พิมพ์เบอร์โทรของคุณ" />
        <div class="input-text-container">
          <input type="checkbox" id="ch_fb" />
          <strong>แชร์ไปยัง Facebook</strong>
        </div>
      </div>
    </div>
  );
}
