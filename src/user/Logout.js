import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function MainLayout(){
    const loginFlag=useSelector(state=>state.userInfo.loginFlag);
    return (
        <>
{/* 
            {!loginFlag? <NavLink to={"/customer-login"}>로그인</NavLink>:
                <NavLink to={"/customer-logout"}>로그아웃</NavLink> */}
            {/* } */}

            <Outlet/>
        </>
    );
}