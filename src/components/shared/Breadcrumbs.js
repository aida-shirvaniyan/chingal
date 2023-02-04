import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import styles from "./Breadcrumbs.module.css"

const Breadcrumbs = ({title}) => {
    const location = useLocation();
    const param = useParams();
    return (
        <div className={ param.id? styles.BreadcrumbForm : styles.BreadcrumbTable}>
            <Link className={styles.CurrentRoute} to={`${location.pathname}`}>{title}</Link>
        </div>
    );
};

export default Breadcrumbs;
