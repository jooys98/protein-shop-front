import apiClient from "../api/axiosInstance";

export const checkUserId = async (userId) => {
  // 아이디 중복 체크
  try {
    const res = await apiClient.get(`/user-checked/${userId}`);
    return res.data;
  } catch (error) {
    console.error("아이디 중복확인 기능 오류", error);
    throw error;
  }
};

export const joinUser = async (userInfo) => {
    //회원가입 
  try {
    const res = await apiClient.post("/user-join", userInfo , { withCredentials: true });
    return res.data;
  } catch(error) {
    throw error;
  }
};
