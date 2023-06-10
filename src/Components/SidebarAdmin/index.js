import React, { useState } from 'react';
import classes from "./style.module.css"


const Sidebar = ({header, users }) => {
  const [selectedItem, setSelectedItem] = useState(users[0]);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    console.log("item "+itemId+" clicked");
  };

  return (
    <section className={classes.requests}>
      <h2 className={classes.reqTitle}>{header}</h2>
      <ul className={classes.reqList}>
        {users.map((item , index) => (
          <li
            className={ selectedItem === index? classes.rereqSelectedItem :classes.reqItem}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            {item.fullName}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
