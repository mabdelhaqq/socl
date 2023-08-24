import { useState, useEffect } from 'react'
import "./AddNewPost.scss"
import { Formik, Form, Field } from 'formik'
import { Dropdown } from 'primereact/dropdown';
import * as Yup from 'yup'
import { dataAPI } from './data-api'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner';
import { useAppContext } from '../helpers/app-store';

  const countries = [
    { label: 'Palestine', value: 'Palestine' },
    { label: 'Tunisia', value: 'Tunisia' },
  ];
  
const AddNewPost = () => {
    const { username } =useAppContext();
    const navigate = useNavigate();
    const [nextId, setNextId] = useState(101);
    const [country, setCountry ]= useState('');
    useEffect(() => {
      const storedNextId = localStorage.getItem('nextId');
      if (storedNextId) {
        setNextId(parseInt(storedNextId));
      }
    }, []);
  
    const initialValues = {
        title: '',
        country: '',
        verified: false,
        body: '',
        img: "http://dummyimage.com/217x100.png/ff4444/ffffff",
      };
      const validationSchema = Yup.object({
        title: Yup.string().required('Title is required').min(5, 'Title must be at least 5 characters'),
      });    
      const onSubmit = async (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setNextId(nextId => nextId + 1);
        localStorage.setItem('nextId', String(nextId + 1));
        const now = new Date().toISOString();
        const newPost = {
            hashtags: values.title,
            country: values.country,
            is_verified: values.verified,
            body: values.body,
            likes: 0,
            comments: 0,
            shares: 0,
            user_name: username,
            user_avatar: "https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=d",
            user_id: nextId,
            image_url: values.img,
            timestamp: now,
          };
          <Spinner/>
          setSubmitting(true);
          try {
            await dataAPI.addPost(newPost);
            navigate('/posts');
          } catch (error) {
            console.error('Error : ', error);
          } finally {
            setSubmitting(false);
          }
        };
  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <Field type="text" id="body" name="body" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Dropdown id="country" name="country" options={countries} optionLabel="label" optionValue="value"
              placeholder='choose your country' onChange={(e)=> setCountry(e.value)}/>
            </div>
            <div className="form-group-check">
              <label htmlFor='ver'>Verified</label>
                <Field id ="ver" type="checkbox" name="verified" />
            </div>
            <div className="form-group">
              <button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Post'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddNewPost