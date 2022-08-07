import React from "react";
import {useNavigate} from "react-router";


const TopNav = () => {
    const navigate = useNavigate();
    return(
        <nav>
            <ul>
                <li onClick={() => navigate('/login')}>로그인</li>
                <li onClick={() => navigate('/signup')}>회원가입</li>
            </ul>
        </nav>
    )

}

export default TopNav
