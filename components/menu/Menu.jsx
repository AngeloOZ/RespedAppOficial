import { useState, useEffect } from "react";
import { GridItemsMenu } from "./GridItemsMenu";
import { MenuCategorias } from "./MenuCategorias";

export const Menu = ({ categorias, productos }) => {

  return (
    <main className="container-fluid py-3 px-md-5">
      <MenuCategorias
        categorias={categorias}
        category={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <GridItemsMenu productos={productos} />
    </main>
  );
};
