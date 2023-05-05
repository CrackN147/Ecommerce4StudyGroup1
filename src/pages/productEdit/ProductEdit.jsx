import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'services/api';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export function ProductEdit() {
  const { prID } = useParams();
  const [price, setPrice] = useState('');
  const [initialValues, setInitialValues] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    description: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
  })
  const handleSubmit = async (values) => {
    values.price = price;
    const apiData = await api._put(`https://fakestoreapi.com/products/${prID}`, values);
    if (apiData.status === 200) {
      alert('Product updated successfully');
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
      
  useEffect(() => {
    const fetchData = async () => {
      const apiData = await api._get(`https://fakestoreapi.com/products/${prID}`);
      if (apiData.status === 200) {
        setInitialValues(apiData.data);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='product-edit'>
      <h1>Product Edit</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form id="formAdd">
          <div className="form-element">
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" id="title" />
            <ErrorMessage component="label" className="error" name="title" />
          </div>
          <div className="form-element">
            <label htmlFor="price">Price</label>
            <Field type="text" name="price" id="price" value={price} onChange={changePrice} />
            <ErrorMessage className="error" name="price" />
          </div>
          <div className="form-element">
            <label htmlFor="description">Description</label>
            <Field type="text" name="description" id="description" />
            <ErrorMessage  className="error" name="description" />
          </div>
          <div className="form-element">
            <label htmlFor="image">Image</label>
            <Field type="text" name="image" id="image" />
            <ErrorMessage className="error" name="image" />
          </div>
          <div className="form-element">
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" id="category" />
            <ErrorMessage className="error" name="category" />
          </div>
          <div className="form-element">
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}