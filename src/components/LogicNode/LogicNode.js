import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './LogicNode.module.css'

const LogicNode = ({ data, id, type }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.logicNode}>
        <Handle
          id={`${id}`}
          type="target"
          position="left"
          className={`${styles.handle} ${styles.handleLeft}`}
          isConnectable
        />
        <NodeHeader label={data.internal.name} type={type} onDelete={data.internal.onDelete} id={id} />
        <Handle
          id={`${id}-true`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.true} ${styles.handleRight} `}
          isConnectable
        />
        <Handle
          id={`${id}-false`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.false} ${styles.handleRight} `}
          isConnectable
        />
      </div>
    </div>
  )
}

export default LogicNode
