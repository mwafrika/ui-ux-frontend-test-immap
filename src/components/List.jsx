import React from "react";
import ListItem from "./ListItem";
import styles from "../styles/List.module.css";

const List = ({ items, onButtonClick }) => {
  return (
    <div className={styles.jobList}>
      {items.map(({ id, ...rest }) => (
        <ListItem
          key={id}
          {...rest}
          buttonText="Click me"
          onButtonClick={() => onButtonClick(id)}
        />
      ))}
    </div>
  );
};

export default List;
