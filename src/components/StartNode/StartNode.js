import React, { useState, useEffect } from "react";
import { Handle, useUpdateNodeInternals } from "react-flow-renderer";
import NodeHeader from "../NodeHeader/NodeHeader";
import globalStyles from "../Node.module.css";
import styles from "./StartNode.module.css";

const StartNode = ({ data, id, type }) => {
  const [formData, setFormData] = useState({});
  const updateNodeInternals = useUpdateNodeInternals();
  const [values, setValues] = React.useState([20, 50, 80, 90]);

  useEffect(() => {
    if (data.internal.name === "Supplier") {
      data.formData = formData;
      updateNodeInternals(id);
    }
  }, [formData]);

  return (
    <div className={globalStyles.node}>
      <div className={styles.startNode}>
        <NodeHeader label={data.internal.name} type={type} />
        <Handle
          id={`${id}`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.handleRight}`}
          isConnectable
        />
        {data.label === "Supplier" ? (
          <div className={styles.body}>
            <label className={styles.label}>Message</label>
            <textarea
              className={`nodrag nowheel ${styles.input}`}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  message: e.target.value
                }))
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StartNode;
