import React from "react";
import Button from "./Button";
import styles from "../styles/ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash,
  faTrashAlt,
  faEdit,
  faPencil,
  faEllipsisV,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ buttonText, onButtonClick, ...rest }) => {
  return (
    <div className={styles.jobCardContainer}>
      <div className={styles.jobHeader}>
        <div className={styles.applicants}>
          <div>{rest.number_of_applicants}</div>
          <div>Applicants</div>
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.jobTitle}>
            <div>
              <h1>{rest.jobTitle}</h1>
            </div>
            <div className={styles.actions}>
              <div
                style={{
                  width: "42.5px",
                  height: "42.5px",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
              </div>
              <div
                style={{
                  width: "42.5px",
                  height: "42.5px",
                  backgroundColor: "rgb(190, 33, 38)",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
              </div>
              <div className={styles.more_actions}>
                <h3>MORE ACTIONS</h3>
                <FontAwesomeIcon
                  icon={faSortDown}
                  style={{
                    color: "rgb(190, 33, 38)",
                    fontSize: "1.5rem",
                    marginBottom: "8px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.headerDetails}>
            <div className={styles.country}>{rest.country}</div>
            <div className={styles.city}>{rest.city}</div>
            <div className={styles.type}>{rest.Type}</div>
            <div className={styles.status}>{rest.status}</div>
          </div>
        </div>
      </div>
      <div className={styles.headerBody}>
        <h3>From {rest.Opening_date}</h3>
        <h3>To {rest.Closing_date}</h3> |<h3>Organization</h3>
        <h3>{rest.Organization}</h3> |<h3>Languages</h3>
        <h3>Langaguages</h3>
        <h3>{rest.Languages}</h3>
        <h3>Duty station</h3>
        <h3>{rest.Duty_station}</h3>
      </div>

      <div className={styles.jobFooter}>
        <h3>
          mwafrikajosue@gmail.com(Josue) <span></span>{" "}
          mwafrikajosue@gmail.com(Josue)
        </h3>
      </div>
    </div>
  );
};

export default ListItem;
