import React, { useState, useEffect } from "react";
import { Handle, useUpdateNodeInternals } from "react-flow-renderer";
import NodeHeader from "../NodeHeader/NodeHeader";
import globalStyles from "../Node.module.css";
import styles from "./OutputNode.module.css";
import GooglePlacesAutocomplete from "../GoogleNode/GooglePlacesAutocomplete";
import { FormProvider, useForm } from "react-hook-form";
import FormTextField from "../GoogleNode/FormTextField";
const defaultValues = {
  name: "",
  Location: ""
};

const OutputNode = ({ data, id, type }) => {
  // const [selectOption, setSelectOption] = useState("workflow1");
  // const updateNodeInternals = useUpdateNodeInternals();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  // useEffect(() => {
  //   if (data.internal.name === "Start New Workflow") {
  //     data.nextWorkflow = selectOption;
  //     updateNodeInternals(id);
  //   }
  // }, [selectOption]);

  return (
    <div className={globalStyles.node}>
      <div className={styles.outputNode}>
        <Handle
          id={`${id}`}
          type="target"
          position="left"
          className={styles.handle}
          isConnectable
        />
        <NodeHeader
          label={data.internal.name}
          type={type}
          onDelete={data.internal.onDelete}
          id={id}
        />
        {data.internal.name === "Start New Workflow" ? (
          <div className={styles.body}>
            <label className={styles.label}>Workflow</label>
            <GooglePlacesAutocomplete
              name="Location"
              setPlaceName={setPlaceName}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            />
            {/* <select
              className={`nodrag nowheel ${styles.select}`}
              onChange={(e) => setSelectOption(e.target.value)}
              value={selectOption}
            >
              <option value="workflow1">Workflow 1</option>
              <option value="workflow2">Workflow 2</option>
              <option value="workflow3">Workflow 3</option>
            </select> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OutputNode;
