import React from "react";
import {useRoutes} from "react-router";
import { Navigate } from "react-router";
// import AuthRouter from "~/router/AuthRouter";
import LandingPage from "~/pages/LandingPage";
import LoginPage from "~/pages/auth/LoginPage";
import SignUpPage from "~/pages/auth/SignUpPage";
// import ToDoPage from "~/pages/todo/ToDoPage";

const Router = () => {
    /**
     * 공통 페이지
     */
    const common = [
        { path: "/", element: <LandingPage /> },
    ];

    /**
     * 로그인 이전 페이지
     */
    const withoutAuth = [
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignUpPage /> },
        { path: "*", element: <Navigate to="/" /> },
    ];

    // const routes = useRoutes(hasToken && hasUser ? withAuthentication : withoutAuthentication);
    // const withAuthentication = [...common, ...withAuth];

    const withoutAuthentication = [...common, ...withoutAuth];
    const routes = useRoutes( withoutAuthentication);

    return (
        <>
            {routes}
        </>
    );
}

export default Router;