import { useState } from 'react';
import { api } from 'services/api';
export function ProductAdd() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  function onChangeTitle(e){
    setTitle(e.target.value)
  }
  function onChangePrice(e){
    setPrice(e.target.value)
  }
  function onChangeDescription(e){
    setDescription(e.target.value)
  }

  function cleanInputs(){
    setTitle('');
    setPrice(0);
    setDescription('');
  }

  async function addProduct(e){
    e.preventDefault();
    let postData = {
      title: title,
      price: price,
      description: description,
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    const apiPostData = await api._post('https://fakestoreapi.com/products', postData);
    if(apiPostData.status === 200){
      alert('Product added successfully')
      cleanInputs();
    } else {
      alert('Error adding product')
    }
  }

  return (
    <div id="formAdd">
      <h1>ProductAdd</h1>
      <form onSubmit={addProduct}>
        <div className="form-element">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div className="form-element">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price"
            value={price}
            onChange={onChangePrice} 
          />
        </div>
        <div className="form-element">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"
            onChange={onChangeDescription}
            defaultValue={description}
          />
        </div>
        <div className="form-element">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}