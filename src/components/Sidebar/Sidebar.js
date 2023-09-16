import React from "react";
import styles from "./Sidebar.module.css";
import actionStyle from "../ActionNode/ActionNode.module.css";
import logicStyle from "../LogicNode/LogicNode.module.css";
import outputStyle from "../OutputNode/OutputNode.module.css";
import startStyle from "../StartNode/StartNode.module.css";

const onDragStart = (event, node) => {
  const stringNode = JSON.stringify(node);
  event.dataTransfer.setData("application/reactflow", stringNode);
  event.dataTransfer.effectAllowed = "move";
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.description}>
        You can drag these nodes to the pane on the left.
      </div>
      <section className={styles.startNodes}>
        <h2>Start Nodes</h2>
        <div
          className={`${styles.startNode} ${startStyle.startNode} `}
          onDragStart={(event) =>
            onDragStart(event, {
              type: "startNode",
              name: "Supplier"
            })
          }
          draggable
        >
          Supplier
        </div>
      </section>
      <section className={styles.actionNodes}>
        <h2>Action Nodes</h2>
        <div
          className={`${styles.actionNode} ${actionStyle.actionNode} `}
          onDragStart={(event) =>
            onDragStart(event, { type: "actionNode", name: "Check In Visitor" })
          }
          draggable
        >
          Check In Visitor
        </div>
        <div
          className={`${styles.actionNode} ${actionStyle.actionNode} `}
          onDragStart={(event) =>
            onDragStart(event, { type: "actionNode", name: "Employee Lookup" })
          }
          draggable
        >
          Employee Lookup
        </div>
        <div
          className={`${styles.actionNode} ${actionStyle.actionNode} `}
          onDragStart={(event) =>
            onDragStart(event, { type: "actionNode", name: "Send Text" })
          }
          draggable
        >
          Send Text
        </div>
      </section>
      <section className={styles.logicNodes}>
        <h2>Logic Nodes</h2>
        <div
          className={`${styles.logicNode} ${logicStyle.logicNode} `}
          onDragStart={(event) =>
            onDragStart(event, {
              type: "logicNode",
              name: "Work Hours Condition"
            })
          }
          draggable
        >
          Work Hours Condition
        </div>
      </section>
      <section className={styles.outputNodes}>
        <h2>Output Nodes</h2>
        <div
          className={`${styles.outputNode} ${outputStyle.outputNode} `}
          onDragStart={(event) =>
            onDragStart(event, {
              type: "outputNode",
              name: "Check Out Visitor"
            })
          }
          draggable
        >
          Check Out Visitor
        </div>
        <div
          className={`${styles.outputNode} ${outputStyle.outputNode} `}
          onDragStart={(event) =>
            onDragStart(event, {
              type: "outputNode",
              name: "Start New Workflow"
            })
          }
          draggable
        >
          Start New Workflow
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
