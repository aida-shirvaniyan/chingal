import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

//routes
import Users from "./components/Users";
import User from "./components/User";

//Redux
import store from "./redux/store";
import {Provider} from "react-redux"

//Styles
import "./App.css";

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path={"/Users/:id"} element={<User/>} />
                <Route path={"/Users"} element={<Users title="لیست کاربران"/>}/>
                <Route path={"/"} element={<Navigate to={"/Users"}/>}/>
            </Routes>
        </Provider>
    );
}

export default App;
