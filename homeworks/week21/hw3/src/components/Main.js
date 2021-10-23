import { useState } from "react";
import { Title, Input, Button, Warning } from "./styledComponents";

export default function Main() {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");

  const handleValidation = () => {
    // 驗證個別欄位是否為空
    if (!Q1.value) {
      setQ1({
        ...Q1,
        isEmpty: true,
      });
    }
    if (!Q2.value) {
      setQ2({
        ...Q2,
        isEmpty: true,
      });
    }
    if (!Q3.value) {
      setQ3({
        ...Q3,
        isEmpty: true,
      });
    }
    if (!Q4.value) {
      setQ4({
        ...Q4,
        isEmpty: true,
      });
    }
    if (!Q5.value) {
      setQ5({
        ...Q5,
        isEmpty: true,
      });
    }
    // 若通過驗證則把值存成物件 alert 出來
    if (Q1.value && Q2.value && Q3.value && Q4.value && Q5.value) {
      const data = {
        "您的暱稱：": Q1.value,
        "電子郵件：": Q2.value,
        "手機號碼：": Q3.value,
        "報名類型：": Q4.value,
        "怎麼知道這個活動的：": Q5.value,
        "其他：": Q6.value,
      };
      alert(JSON.stringify(data));
      // 清空欄位
      setQ1({
        ...Q1,
        value: "",
      });
      setQ2({
        ...Q2,
        value: "",
      });
      setQ3({
        ...Q3,
        value: "",
      });
      setQ4({
        ...Q4,
        value: "",
      });
      setQ5({
        ...Q5,
        value: "",
      });
      setQ6({
        ...Q6,
        value: "",
      });
    }
  };
  return (
    <>
      <Title>
        暱稱 <span>*</span>
      </Title>
      <Input
        placeholder="您的回答"
        value={Q1.value}
        onChange={(e) => {
          setQ1({
            value: e.target.value,
            isEmpty: false,
          });
        }}
      />
      {Q1.isEmpty && <Warning>此欄位不得留空</Warning>}
      <Title>
        電子郵件 <span>*</span>
      </Title>
      <Input
        placeholder="您的電子郵件"
        type="email"
        value={Q2.value}
        onChange={(e) => {
          setQ2({
            value: e.target.value,
            isEmpty: false,
          });
        }}
      />
      {Q2.isEmpty && <Warning>此欄位不得留空</Warning>}
      <Title>
        手機號碼 <span>*</span>
      </Title>
      <Input
        placeholder="您的手機號碼"
        type="number"
        value={Q3.value}
        onChange={(e) => {
          setQ3({
            value: e.target.value,
            isEmpty: false,
          });
        }}
      />
      {Q3.isEmpty && <Warning>此欄位不得留空</Warning>}
      <Title>
        報名類型 <span>*</span>
      </Title>
      <div>
        <Input
          type="radio"
          name="radio"
          id="1"
          onClick={(e) => {
            setQ4({
              value: e.target.id,
              isEmpty: false,
            });
          }}
        />
        <label htmlFor="radio">躺在床上用想像力實作</label>
      </div>
      <div>
        <Input
          type="radio"
          name="radio"
          id="2"
          onClick={(e) => {
            setQ4({
              value: e.target.id,
              isEmpty: false,
            });
          }}
        />
        <label htmlFor="radio">趴在地上滑手機找現成的</label>
      </div>
      {Q4.isEmpty && <Warning>此欄位不得留空</Warning>}
      <Title>
        怎麼知道這個活動的 <span>*</span>
      </Title>
      <Input
        placeholder="您的回答"
        value={Q5.value}
        onChange={(e) => {
          setQ5({
            value: e.target.value,
            isEmpty: false,
          });
        }}
      />
      {Q5.isEmpty && <Warning>此欄位不得留空</Warning>}
      <Title>
        其他<p>對活動的一些建議</p>
      </Title>
      <Input
        placeholder="您的回答"
        value={Q6.value}
        onChange={(e) => {
          setQ6({
            value: e.target.value,
            isEmpty: false,
          });
        }}
      />
      <Button onClick={handleValidation}>提交</Button>
      <p>請勿透過表單送出您的密碼。</p>
    </>
  );
}
