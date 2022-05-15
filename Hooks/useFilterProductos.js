import { useState, useEffect } from "react";

export const useFilterProductos = (currentProducst) => {
    const { products, category } = currentProducst
    const [productos, setProductos] = useState(products);

    useEffect(() => {
        if (category != 0) {
            const auxProduc = products.filter(product => product.idCategoria == category);
            setProductos(auxProduc);
        }else{
            setProductos(products)
        }
    }, [category]);
    return productos;
}