import Image from "next/image";
import Form from "next/form"

export default function Home() {
  return (
    <div>
      <h1 className="title">Q Bank</h1>
      {/* <div className="card">
        <h3>로그인 /api/session</h3>
        <Form action="form-login">
          <div className="control">
            <label>이메일</label>
            <input id="li-email" type="email" required />
          </div>
          <div className="control">
            <label>비밀번호</label>
            <input id="li-pass" type="password" required />
          </div>
          <button type="submit">POST 로그인</button>
        </Form>
        <div className="muted" style={{marginTop:'6px'}}>성공 시 브라우저가 <code>Set-Cookie: session=...</code>을 저장합니다.</div>
      </div> */}
    </div>
  );
}
