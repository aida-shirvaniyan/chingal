import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

//Redux
import {fetchApi} from "../redux/users/usersAction";

//Styles
import styles from "./Users.module.css";

//Icons
import Magnify from "../assets/Search.png";
import logo from "../assets/chingal-logo 1.png";

//Functions
import {ageCalculator} from "../helper/function";

//Components
import Modal from "./Modal";
import Breadcrumbs from "./shared/Breadcrumbs";

const Users = () => {
        //Redux
        const usersData = useSelector(state => state.userState);
        const dispatch = useDispatch();

        //Router
        const Breadcrumb = "لیست کاربران";

        //Hooks
        const [isOpen, setIsOpen] = useState(false);
        const [search, setSearch] = useState("");
        useEffect(() => {
            dispatch(fetchApi())
        }, [dispatch]);

        //Functions
        const SearchHandler = event => {
            setSearch(event.target.value)
        }
        const searchedUsers = usersData.users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

        return (
            <>
                {isOpen && <Modal setIsOpen={setIsOpen}/>}
                <div className={styles.main}>
                    <div className={styles.container}>
                        <header className={styles.header}>
                            <img width={"100px"} src={logo} alt="logo"/>
                            <div>
                                <img src={Magnify} alt="search"/>
                                <input className={styles.Search} onChange={SearchHandler} value={search} type="text"
                                       placeholder="جستجو..."/>
                            </div>
                        </header>
                        <div className={styles.body}>
                            <div className={styles.Actions}>
                                <Breadcrumbs title={Breadcrumb}/>
                                <button className={styles.Add} onClick={() => setIsOpen(true)}>کاربر جدید</button>
                            </div>
                            <div className={styles.tableContainer}>
                                <table className={styles.table}>
                                    <thead>
                                    <tr>
                                        <th>نام کاربر</th>
                                        <th>سن</th>
                                        <th>شماره تماس</th>
                                        <th>ایمیل</th>
                                        <th>آدرس</th>
                                        <th>شرکت</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {usersData.loading &&
                                    <tr className={styles.loading}>در حال بارگذاری ...</tr>}
                                    {usersData.error && <tr>{usersData.error}</tr>}
                                    {searchedUsers.map(item =>
                                        <tr key={item.id}>
                                            <td>
                                                <Link className={styles.userLink}
                                                      to={`/Users/${item.id}`}>{item.name}</Link>
                                            </td>
                                            <td>{ageCalculator(item.dateOfBirth)}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.email}</td>
                                            <td>{item.city} , {item.street} , {item.zipcode}</td>
                                            <td>{item.company}</td>
                                        </tr>
                                    )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
;

export default Users;
