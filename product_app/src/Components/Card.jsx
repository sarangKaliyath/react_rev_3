import React from "react";
import { useState } from "react";
import styles from "./Card.module.css";

export const Card = ({ data, handleAdd, handleSub }) => {
  const [showDesp, setShowDesp] = useState(false);
  return (
    <div className={`${styles.container}`}>
      <div>
        <h2>Item : {data.product_name}</h2>
      </div>
      <div className={styles.price}>
        <span>Price: {data.price}</span>
        {data.quantity > 2 ? (
          <span>
            <button>Add to cart</button>
          </span>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className={styles.quantity}>
          Quantity:
          <div>
            <button
              onClick={() => {
                handleSub(data.id, data.quantity);
              }}
            >
              -
            </button>
            <span>{data.quantity}</span>
            <button
              onClick={() => {
                handleAdd(data.id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setShowDesp(!showDesp);
          }}
          className={styles.more}
        >
          more...
        </div>
        <div>{showDesp ? <div>{data.description}</div> : <></>}</div>
      </div>
    </div>
  );
};
