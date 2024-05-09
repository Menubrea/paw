import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { GiLoveHowl } from "react-icons/gi";
import styles from "./informational.module.css";

const informationalData = [
  {
    icon: <IoMdSearch />,
    title: "Find the perfect pet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <GiLoveHowl />,
    title: "Meet to Bond",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <MdOutlinePets />,
    title: "Bring Them Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Informational = () => {
  return (
    <div className={styles.section}>
      <section className={styles.sectionContent}>
        <h2>How To Adopt</h2>
        <div className={styles.cardContainer}>
          {informationalData.map((item, index) => (
            <article className={styles.articleCard} key={index}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Informational;
