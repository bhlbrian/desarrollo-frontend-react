import React, {useState} from "react";
import ProductTable from '../product/.components/ProductTable'
import Search from "../product/.components/SearchBar";

const Product = () => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <>
        <div>
            <Search 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText} 
                onInStockOnlyChange={setInStockOnly} 
            />
            <ProductTable 
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
        </>
    )

}

export default Product;