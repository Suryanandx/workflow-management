import React from "react";
import { ReactComponent as CloseIcon } from "../../assets/Close.svg";
import { ReactComponent as DraggerIcon } from "../../assets/Dragger.svg";
import styles from "./NodeHeader.module.css";

const NodeHeader = ({ label, type, onDelete, id }) => {
  return (
    <div className={styles.header}>
      <div className={styles.labelContainer}>
        <DraggerIcon className={styles.draggerIcon} />
        {label}
      </div>
      {type !== "startNode" ? (
        <button className={styles.close} onClick={() => onDelete([{ id: id }])}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      ) : null}
    </div>
  );
};

export default NodeHeader;
