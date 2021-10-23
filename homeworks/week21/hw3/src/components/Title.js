import { TitleH1, Desc, Required } from "./styledComponents";

export default function Title() {
  return (
    <>
      <TitleH1>新拖延運動報名表單</TitleH1>
      <Desc>活動日期：2021/9/1 ~2021/9/2</Desc>
      <Desc>活動地點：台北市大安區新生南路二段 1 號</Desc>
      <Required>* 必填</Required>
    </>
  );
}
