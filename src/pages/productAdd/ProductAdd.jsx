import { useState } from "react";
export function ProductAdd() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState({
    name: "",
    price: "",
    description: ""
  });

  const changeName = (e) => {
    let value = e.target.value;
    if (value.length <= 20) {
      setName(value);
    }
  }
  const changePrice = (e) => {
    let value = e.target.value;
    value = value.replace(/[^\d.]/g, '');
    let dotCount = value.split('.');
    if (
      dotCount.length > 2 || 
      (dotCount[1] && dotCount[1].length > 2) ||
      (dotCount[0] && parseInt(dotCount[0]) > 10000)
    ) {
      return;
    }
    setPrice(value);
  }
  const changeDescription = (e) => {
    setDescription(e.target.value);
  }

  const processErrors = (errorType) => {
    let newError = { ...error };
    if (errorType === "name") {
      newError.name = "დასახელება აუცილებელია";
    } else if (errorType === "price") {
      newError.price = "ფასი აუცილებელია";
    } else if (errorType === "description") {
      newError.description = "აღწერა აუცილებელია";
    } else {
      newError.name = "";
      newError.price = "";
      newError.description = "";
    }
    setError(newError);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length > 20) {
      processErrors("name");
    } else {
      processErrors("");
    }
  }
  return (
    <div id="formAdd">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label htmlFor="name">დასახელება</label>
          <input type="text"
            value={name} 
            onChange={changeName} 
          />
          {error.name &&
            <label className="error">
              {error.name}
            </label>
          }
        </div>
        <div className="form-element">
          <label htmlFor="price">ფასი</label>
          <input type="text"
            placeholder="0.00"
            value={price}
            onChange={changePrice}
          />
          {error.price &&
            <label className="error">
              {error.price}
            </label>
          }
        </div>
        <div className="form-element">
          <label htmlFor="description">აღწერა</label>
          <textarea id="description"
            value={description} 
            onChange={changeDescription}
          />
          {error.description &&
            <label className="error">
              {error.description}
            </label>
          }
        </div>
        <div className="form-element">
          <button type="submit">დამატება</button>
        </div>
      </form>
    </div>
  )
}