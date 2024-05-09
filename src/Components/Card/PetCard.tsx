import React from "react";
import styles from "./petcard.module.css";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla odio ac nunc tincidunt, nec consectetur sapien tristique. Vesttis velit, nec gravida justo arcu vitae nisi. Integer eget elit id magna rhoncus pulvinar.";

const cats = [
  {
    name: "Teko",
    breed: "Ragdoll",
    age: "8 months",
    gender: "male",
    description: description,
    clean: true,
    accustomedTo: "Cats, Dogs and Children",
    vaccinated: true,
    neutered: true,
    tags: ["kitten", "familiy-friendly"],
    photo:
      "https://img.freepik.com/premium-photo/small-white-kitten-white_136670-1028.jpg?w=1380",
  },
  {
    name: "Phase",
    breed: "Selkirk Rex",
    age: "6 months",
    gender: "female",
    description: description,
    clean: true,
    accustomedTo: "Cats, Dogs and Children",
    vaccinated: true,
    neutered: true,
    tags: ["kitten", "familiy-friendly"],
    photo:
      "https://img.freepik.com/premium-photo/kitten-white-background_136670-4000.jpg?w=996",
  },
  {
    name: "Maximillian",
    breed: "Maine Coon",
    age: "10 months",
    gender: "male",
    description: description,
    clean: true,
    accustomedTo: "Cats, Dogs and Children",
    vaccinated: true,
    neutered: true,
    tags: ["kitten", "familiy-friendly"],
    photo:
      "https://img.freepik.com/premium-photo/kitten-white-background_136670-98.jpg?w=900",
  },
  {
    name: "Sita",
    breed: "Mixed Breed",
    age: "8 months",
    gender: "male",
    description: description,
    clean: true,
    accustomedTo: "Cats, Dogs and Children",
    vaccinated: true,
    neutered: true,
    tags: ["kitten", "familiy-friendly"],
    photo:
      "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?t=st=1714638748~exp=1714642348~hmac=c9abd0b72e7df4ac5a24e7b0c63f71376a5489417c6d2b89e8c110aa70615f8e&w=996",
  },
  // {
  //   name: "Leopold",
  //   breed: "Mixed Breed",
  //   age: "14 months",
  //   gender: "male",
  //   description: description,
  //   clean: true,
  //   accustomedTo: "Cats, Dogs and Children",
  //   vaccinated: true,
  //   neutered: true,
  //   tags: ["kitten", "familiy-friendly"],
  //   photo:
  //     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?t=st=1714638748~exp=1714642348~hmac=c9abd0b72e7df4ac5a24e7b0c63f71376a5489417c6d2b89e8c110aa70615f8e&w=996",
  // },
];

const PetCards = () => {
  return (
    <section className={styles.appContainer}>
      <div className={styles.headerContainer}>
        <h2>Animals At Your Closest Shelter</h2>
        <p>Based on your location</p>
      </div>
      <div className={styles.flexContainer}>
        {cats.map((cat, index) => (
          <article className={styles.petCard} key={index}>
            <img src={cat.photo || ""} alt={cat.name} />
            <div className={styles.padding}>
              <h3>{cat.name}</h3>
              <div className={styles.flex}>
                <p>{cat.breed}</p>
                <p>{cat.age}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div>
        <button className={styles.buttonSolid}>See All</button>
      </div>
    </section>
  );
};

export default PetCards;
