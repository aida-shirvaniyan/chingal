import React from 'react';

//Styles
import styles from "./User.module.css";

//Icons
import logo from "../assets/chingal-logo 1.png";

//Components
import Breadcrumbs from "./shared/Breadcrumbs";
import UserForm from "./shared/UserForm";

const User = () => {
    //Router
    const Breadcrumb = "ویرایش کاربر";

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <img width={"100px"} src={logo} alt="logo"/>
                    </header>
                    <div className={styles.body}>
                        <Breadcrumbs title={Breadcrumb}/>
                        <UserForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
