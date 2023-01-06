import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch", "Mike Tyson"]);

  const onNewCategory = (newCategory) => {
    //Sabiendo como funciona .some() se puede entender esto.
    if (
      categories.some(
        (categorie) => categorie.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onNewCategory} />

      {/* Recorremos las categorias y por cada categoria devueve un <GifGrid/>, y React nesecita un key para cada <GifGrid/> para que internamente pueda manejarlos de manera eficiente.*/}
      {categories.map((categorie) => (
        <GifGrid key={categorie} category={categorie} />
      ))}
    </>
  );
};
