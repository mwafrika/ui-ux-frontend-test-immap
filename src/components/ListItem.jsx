import React from "react";
import Button from "./Button";
import styles from "../styles/ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";
import {
  faTrash,
  faPencil,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ buttonText, onButtonClick, ...rest }) => {
  const {
    id,
    jobTitle,
    country,
    city,
    Type,
    status,
    Opening_date,
    Closing_date,
    Organization,
    Languages,
    number_of_applicants,
  } = rest;

  return (
    <div className={styles.jobCardContainer}>
      <div className={styles.jobHeader}>
        <div className={styles.applicants}>
          <div>{number_of_applicants}</div>
          <div>Applicants</div>
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.jobTitle}>
            <div>
              <h1>{jobTitle}</h1>
            </div>
            <div className={styles.actions}>
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
                  backgroundColor: "black",
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
              <DropdownMenu />
            </div>
          </div>
          <div className={styles.headerDetails}>
            <div className={styles.country}>{country}</div>
            <div className={styles.city}>{city}</div>
            <div className={styles.type}>{Type}</div>
            <div className={styles.status}>{status}</div>
          </div>
        </div>
      </div>
      <div className={styles.headerBody}>
        <h3>
          From <span className={styles.custom_style}>{Opening_date}</span>
        </h3>
        <h3>
          To <span className={styles.custom_style}>{Closing_date}</span>
        </h3>
        {" | "}
        <h3>Organization</h3>
        <h3>
          <span className={styles.custom_style}>{Organization}</span>
        </h3>{" "}
        |<h3>Languages</h3>
        <h3>
          <span className={styles.custom_style}>{Languages.join(",  ")}</span>
        </h3>
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
