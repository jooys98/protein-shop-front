import { useOutletContext } from "react-router-dom";
import apiClient from "../api/axiosInstance";
import { useDispatch } from "react-redux";
import { addUserInfo, clearUserInfo } from "../store";
import { useNavigate } from "react-router-dom";
import errorDisplay from "../util/errorDisplay";

export default function DetailCondition() {
    const { userId, userName } = useOutletContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            id: e.target.id.value
        };

        try {
            await dispatch(clearUserInfo());
            const response = await apiClient.get("/search-userinfo", {
                params: formData
            });
            response.data.forEach(user => dispatch(addUserInfo(user)));
            navigate("/display-userinfo");
        } catch (error) {
            errorDisplay(error);
        }
    }

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>이름:</label>
                    <input type="text" name="name" />
                </div>
                <div className="form-group">
                    <label>아이디:</label>
                    <input type="text" name="id" />
                </div>
                <button type="submit">검색</button>
            </form>
        </div>
    );
}