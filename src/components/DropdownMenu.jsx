import React, { useState } from "react";
import Button from "./Button";
import styles from "../styles/ListItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const iconDropdown = (
    <FontAwesomeIcon
      icon={faSortDown}
      style={{
        color: "rgb(190, 33, 38)",
        fontSize: "1.5rem",
        marginBottom: "8px",
      }}
    />
  );

  return (
    <div className={styles.dropdown}>
      <Button text={"MORE ACTIONS"} onClick ={toggleMenu} icon = {iconDropdown} className={styles.more_actions} />
      {isOpened && (
        <ul
          className={styles.dropdown_menu}
          style={{
            position: "absolute",
            top: "100%",
            backgroundColor: "#ffe4e5",
            left: 0,
            zIndex: 1,
            listStyle: "none",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        >
          <li className={styles.interview}>
            <img src="/interview.png" />
            <a href="#">Interview question</a>
          </li>
          <li className={styles.applicant}>
            <img src="/applicant.png" />
            <a href="#">View applicants</a>
          </li>
          <li className={styles.recommandation}>
            <img src="/star.svg" />
            <a href="#">Recommandations</a>
          </li>
          <li className={styles.vacancy}>
            <img src="/vacancy.svg" />
            <a href="#">View vacancy</a>
          </li>
          <li className={styles.contract}>
            <img src="/contract.png" />
            <a href="#">view contract</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
