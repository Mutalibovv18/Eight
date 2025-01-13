import React, { useState, useEffect } from 'react';
function Product() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [filterPrice, setFilterPrice] = useState(0);
  const addProduct = () => {
    if (!productName || !price || !quantity || !category) {
      alert("Fill all the fields");
      return;
    }
    const newProduct = {
      id: Date.now(), 
      name: productName,
      price: parseFloat(price),  
      quantity: parseInt(quantity),  
      category,
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setPrice('');
    setQuantity('');
    setCategory('');
  };
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  const updateQuantity = (id, newQuantity) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    }));
  };
  const filteredProducts = filterPrice
    ? products.filter(product => product.price > filterPrice)
    : products;
  useEffect(() => {
    document.title = `Total Products: ${products.length}`;
  }, [products]); 

  return (
    <div>
      <h2 className='second-title'>Uchinchi topshiriq</h2>
      <div className='product'>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Narxi"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Miqdori"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kategoriyasi"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className='btn' onClick={addProduct}>Add</button>
      </div>
      <div>
        <h3 className='filter'>Filter</h3>
        <input
          type="number"
          placeholder="Filterlash"
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value)}
        />
      </div>
      <h3 className='list'>Royxat</h3>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>Narxi ${product.price}</p>
            <p>Miqdor {product.quantity}</p>
            <p>Kategoriya {product.category}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
