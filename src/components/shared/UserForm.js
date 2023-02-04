import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";


//Styles
import styles from "./UserForm.module.css";

//Icons
import Close from "../../assets/Close.png";
import Avatar from "../../assets/Service-Verification.png";

//Axios
import axios from "axios";

const UserForm = ({open}) => {
    //routes
    const Navigate = useNavigate();
    const param = useParams();

    //Hooks
    const [user, setUser] = useState({
        avatar: "",
        name: "",
        dateOfBirth: "",
        email: "",
        phoneNumber: "",
        country: "",
        city: "",
        street: "",
        zipcode: "",
        company: ""
    });
    useEffect(() => {
        if (param.id) {
            axios.get(`/users/${param.id}`)
                .then(response => {
                    setUser(response.data)
                })
        }

    }, [param.id])

    //Functions
    const ChangeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }
    const addHandler = event => {
        event.preventDefault();
        axios.post(`/users/`, user)
            .then(response => {
                setUser(response.data);
                Navigate(`/Users/${response.data.id}`)
            })
            .catch(() => {
                open(false);
            })
    }
    const editHandler = event => {
        event.preventDefault();
        axios.put(`/users/${param.id}`, user)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
            })
    }
    const deleteHandler = event => {
        event.preventDefault();
        axios.delete(`/users/${param.id}`)
            .then(() => {
                Navigate("/Users");
            })
            .catch(() => {
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {param.id ?
                    <span>ویرایش کاربر</span> :
                    <div>
                        <button className={styles.closeModal} onClick={() => open(false)}>
                            <img src={Close} alt="close"/>
                        </button>
                        <span>کاربر جدید</span>
                    </div>
                }
            </div>
            <div className={styles.formBody}>
                {param.id ?
                    <img className={styles.fixedAvatar} src={user.avatar} alt="avatar"/> :
                    <img className={styles.avatar} src={Avatar} alt="avatar"/>

                }
                <form className={styles.form}>
                    <div className={styles.col_6}>
                        <label>نام کاربر:</label>
                        <input name="name" placeholder="نام کاربر جدید را وارد کنید" onChange={ChangeHandler}
                               type="text" value={user.name}/>
                    </div>
                    <div className={styles.col_6}>
                        <label>سن:</label>
                        <input name="dateOfBirth" placeholder="سن کاربر جدید را وارد کنید" onChange={ChangeHandler}
                               type="text" value={user.dateOfBirth}/>
                    </div>
                    <div className={styles.col_6}>
                        <label>ایمیل:</label>
                        <input name="email" placeholder="ایمیل جدید را وارد کنید" onChange={ChangeHandler}
                               type="text" value={user.email}/>
                    </div>
                    <div className={styles.col_6}>
                        <label>شماره تلفن:</label>
                        <input name="phoneNumber" placeholder="شماره تلفن جدید را وارد کنید"
                               onChange={ChangeHandler} type="text" value={user.phoneNumber}/>
                    </div>
                    <div className={styles.col_3}>
                        <label>کشور:</label>
                        <input name="country" placeholder="نام کشور" onChange={ChangeHandler} type="text"
                               value={user.country}/>
                    </div>
                    <div className={styles.col_3}>
                        <label>شهر:</label>
                        <input name="city" placeholder="نام شهر" onChange={ChangeHandler} type="text"
                               value={user.city}/>
                    </div>
                    <div className={styles.col_3}>
                        <label>خیابان:</label>
                        <input name="street" placeholder="نام خیابان" onChange={ChangeHandler} type="text"
                               value={user.street}/>
                    </div>
                    <div className={styles.col_3}>
                        <label>کدپستی:</label>
                        <input name="zipcode" placeholder="کد" onChange={ChangeHandler} type="text"
                               value={user.zipcode}/>
                    </div>
                    <div className={styles.col_12}>
                        <label>شرکت:</label>
                        <input name="company" placeholder="شرکت کاربر جدید را وارد کنید" onChange={ChangeHandler}
                               type="text" value={user.company}/>
                    </div>
                    {param.id ?
                        <div className={styles.formActions}>
                            <button onClick={editHandler} className={styles.edit}>ویرایش</button>
                            <button onClick={deleteHandler} className={styles.delete}>حذف</button>
                        </div> :
                        <div className={styles.formActions}>
                            <button onClick={() => open(false)} className={styles.cancel}>لغو</button>
                            <button onClick={addHandler} className={styles.edit}>تایید</button>
                        </div>
                    }

                </form>
            </div>
        </div>
    );
};

export default UserForm;
