import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../api/userApi";

const Login = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { loginFlag, loading, error } = useSelector((state) => state.userInfo);

  const loginHandler = async () => {
    const userData = { username:userId, password };
    await dispatch(loginThunk(userData));
  };


  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler} disabled={loading}>
        로그인
      </button>
      {error && <p style={{ color: "red" }}>{error.message || error.toString()}</p>}
      {loginFlag && <p>로그인 성공하였습니다</p>}
    </div>
  );
};

export default Login;
