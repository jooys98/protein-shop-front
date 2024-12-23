import React, { useState } from "react";
import { checkUserId, joinUser } from "./JoinUserHandler";

const JoinUser = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [mobile, setMobile] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleCheckUserId = async () => {
    try {
      const res = await checkUserId(userId);
      setMessage(res);
      alert("사용가능한 아이디 입니다")
      setIsAvailable(res.trim() === "아이디 사용 가능");
    } catch(error) {
      console.error("오류 발생", error);
      setMessage("아이디 중복 확인 중 오류 발생: " + error.message);
  setIsAvailable(false);
    }
  };

  const handleJoin = async () => {
    if (!isAvailable) {
      setMessage("아이디 중복 확인을 먼저 해주세요.");
      return;
    }

    if (!userId || !password || !userName || !birthYear || !mobile || !address) {
      setMessage("모든 필수 정보를 입력해주세요.");
      return;
    }

    const userInfo = {
      userId,
      userName,
      password,
      birthYear,
      mobile,
      joinDate,
      address,
    };

    try {
      const newUser = await joinUser(userInfo);
      setMessage(`${userName}님, 회원가입에 성공하였습니다!`);
      console.log(userInfo)
    } catch(error) {
      console.error("회원가입 중 오류 발생", error);
      setMessage("회원가입 중 오류 발생: " + error.message);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input
        type="text"
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleCheckUserId}>아이디 중복 확인</button>
      <br />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="사용자 이름"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="생년월일"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="주소"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="전화번호"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <input
        type="date"
        placeholder="가입 날짜"
        value={joinDate}
        onChange={(e) => setJoinDate(e.target.value)}
      />
      <br />
      <button onClick={handleJoin}>회원가입</button>
      <p>{message}</p>
    </div>
  );
};

export default JoinUser;
