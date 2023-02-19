import React from "react";
import Button from "./Button";
import styles from "../styles/ListItem.module.css";

const ListItem = ({ buttonText, onButtonClick, ...rest }) => {
  return (
    <div className={styles.jobCardContainer}>
      <div className={styles.jobHeader}>
        <div className={styles.applicants}>
          <div>{rest.number_of_applicants}</div>
          <div>Applicants</div>
        </div>
        <div className={styles.jobTitle}>
          <h1>{rest.jobTitle}</h1>
          <div className={styles.actions}>
            
          </div>
        </div>
        <div className={styles.jobType}>{rest.Type}</div>
      </div>

      <div className={styles.jobInfo}>
        <div>{rest.jobTitle}</div>
        <div>{rest.country}</div>
        <p>{rest.jobTitle}</p>
        <p>{rest.country}</p>
        <p>{rest.city}</p>
        <p>{rest.Type}</p>
        <p>{rest.status}</p>
        <p>{rest.Organization}</p>
        <p>{rest.Opening_date}</p>
        <p>{rest.Closing_date}</p>
        <p>{rest.Duty_station}</p>
        <p>{rest.group}</p>
        <p>{rest.number_of_applicants}</p>
        <p>{rest.Languages}</p>
        <p>{rest.id}</p>
      </div>
      <div className={styles.jobFooter}>Footer</div>
    </div>
  );
};

export default ListItem;
