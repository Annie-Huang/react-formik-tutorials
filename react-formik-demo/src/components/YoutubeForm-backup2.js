import React from 'react';
import {useFormik, Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup';
import TextError from "./TextError";

// const initialValues = {
//     // name: 'Vishwas',
//     name: '',
//     email: '',
//     channel: ''
// }
/*const initialValues = {
    // name: 'Vishwas',
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: ''
}*/
const initialValues = {
  // name: 'Vishwas',
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

// You cannot get into onSubmit if your errors from validate return is not an empty object
const onSubmit = values => {
  console.log('From data', values);
}

/*const validate = values => {
    // values.name values.email values.channel
    // errors.name errors.email errors.channel
    // errors.name = 'This field is required'
    let errors = {};

    if(!values.name) {
        errors.name = 'Required';
    }

    if(!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if(!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
}*/

const validationSchema = Yup.object({
  name: Yup.string().required('Required!!!'), // Use a differnt string from validate
  email: Yup.string().email('Invalid email format').required('Required!!!'),
  channel: Yup.string().required('Required!!!')
});

/*const YoutubeForm = () => {

    // initialValues needs to match the name field in each input
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    });

    console.log('Form values', formik.values);
    console.log('Form errors', formik.errors);
    console.log('Visited fields', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    {/!*<input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>*!/}
                    <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    {/!*<input type="text" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>*!/}
                    <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    {/!*<input type="text" id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.chanel}/>*!/}
                    <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};*/
// // Use Formik component
// const YoutubeForm = () => {
//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
//             <form onSubmit={formik.handleSubmit}>
//                 <div className="form-control">
//                     <label htmlFor='name'>Name</label>
//                     <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
//                     {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='email'>E-mail</label>
//                     <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
//                     {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='channel'>Channel</label>
//                     <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
//                     {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </form>
//         </Formik>
//     );
// };
/*// Use Form component
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input type="text" id='name' name='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id='channel' name='channel' {...formik.getFieldProps('channel')} />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};*/
// // Use Field component
// const YoutubeForm = () => {
//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
//             <Form>
//                 <div className="form-control">
//                     <label htmlFor='name'>Name</label>
//                     <Field type="text" id='name' name='name' />
//                     {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='email'>E-mail</label>
//                     <Field type="text" id='email' name='email' />
//                     {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='channel'>Channel</label>
//                     <Field type="text" id='channel' name='channel' />
//                     {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </Form>
//         </Formik>
//     );
// };
/*// Use ErrorMessage component (if the field has been visited and there is an error message existed for that field)
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="text" id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};*/

/* Field Revisited
  1. Any additional prop in the Field component will pass through, like placeholder
  2. 'as' and 'component' prop can be taking as input(default), or textarea, or select, or a custom react component as well.

  3. Implementation of field component with the rendered props pattern
  (if you want to use custom components in your form and you want them to be hooked into formik, this pattern will definitely come in handy. Good to know if you need to achieve something complex with formik)
  Render props has three things:
    - field: contains name, onBlur, onChange, value. Everything formik required to manage the state.
    - form: the formik constant that useFormik hook use to return. Got all the properties or helper methods to modify your form in any way required.
            errors, values, touched, handleSubmit, handleChange, handleBlur etc.
    - meta: whether this field has been visited or not, has an error or not, value. Can be use to render your error msg.
    (field, meta: more concerned at an individual field level.)
*/
// const YoutubeForm = () => {
//     return (
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
//             <Form>
//                 <div className="form-control">
//                     <label htmlFor='name'>Name</label>
//                     <Field type="text" id='name' name='name' />
//                     {/*<ErrorMessage name='name' component='div' />*/}
//                     <ErrorMessage name='name' component={TextError} />
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='email'>E-mail</label>
//                     <Field type="text" id='email' name='email' />
//                     {/*<ErrorMessage name='email' />*/}
//                     <ErrorMessage name='email'>
//                         {
//                             (errorMsg) => <div className='error'>{errorMsg}</div>
//                         }
//                     </ErrorMessage>
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='channel'>Channel</label>
//                     <Field type="text" id='channel' name='channel' placeholder='Youtube channel name' />
//                     <ErrorMessage name='channel' />
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='comments'>Comments</label>
//                     <Field as='textarea' id='comments' name='comments' />
//                     {/*<Field component='textarea' id='comments' name='comments' />*/}
//                 </div>
//
//                 <div className="form-control">
//                     <label htmlFor='address'>Address</label>
//                     <Field name='address'>
//                         {
//                             (props) => {
//                                 console.log('Render props', props);
//                                 const {field, form, meta} = props;
//                                 return (
//                                     <div>
//                                         <input type='text' id='address' {...field}/>
//                                         {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//                                     </div>
//                                 )
//                             }
//                         }
//                     </Field>
//                 </div>
//
//                 <button type='submit'>Submit</button>
//             </Form>
//         </Formik>
//     );
// };
/*// Nested Objects | Arrays | FieldArray component (dynamically add Field component)
const YoutubeForm = () => {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id='name' name='name' />
                    {/!*<ErrorMessage name='name' component='div' />*!/}
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <Field type="text" id='email' name='email' />
                    {/!*<ErrorMessage name='email' />*!/}
                    <ErrorMessage name='email'>
                        {
                            (errorMsg) => <div className='error'>{errorMsg}</div>
                        }
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id='channel' name='channel' placeholder='Youtube channel name' />
                    <ErrorMessage name='channel' />
                </div>

                <div className="form-control">
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                    {/!*<Field component='textarea' id='comments' name='comments' />*!/}
                </div>

                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {
                            (props) => {
                                console.log('Render props', props);
                                const {field, form, meta} = props;
                                return (
                                    <div>
                                        <input type='text' id='address' {...field}/>
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>

                <div className="form-control">
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>
                <div className="form-control">
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                </div>
                <div className='form-control'>
                    <label htmlFor='secondaryPh'>Secondary phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                </div>

                <div className='form-control'>
                    <label>List of phone numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            (fieldArrayProps) => {
                                console.log('fieldArrayProps', fieldArrayProps); // you can check other methods available in fieldArrayProps
                                const {push, remove, form} = fieldArrayProps;
                                const {values} = form;
                                const {phNumbers} = values;
                                return <div>
                                    {
                                        phNumbers.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`} />
                                                {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
                                                <button type='button' onClick={() => push('')}> + </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        }
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};*/
// FastField Component: Only worth to consider FastField Component if your form has more than 30 fields or if there are fields with very complex validation requirements
const YoutubeForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor='name'>Name</label>
          <Field type="text" id='name' name='name'/>
          {/*<ErrorMessage name='name' component='div' />*/}
          <ErrorMessage name='name' component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor='email'>E-mail</label>
          <Field type="text" id='email' name='email'/>
          {/*<ErrorMessage name='email' />*/}
          <ErrorMessage name='email'>
            {
              (errorMsg) => <div className='error'>{errorMsg}</div>
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor='channel'>Channel</label>
          <Field type="text" id='channel' name='channel' placeholder='Youtube channel name'/>
          <ErrorMessage name='channel'/>
        </div>

        <div className="form-control">
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments'/>
          {/*<Field component='textarea' id='comments' name='comments' />*/}
        </div>

        <div className="form-control">
          <label htmlFor='address'>Address</label>
          {/*                    <Field name='address'>
                        {
                            // If you update channel, the address will keep re-render if you user Field
                            (props) => {
                                console.log('Render props', props);
                                const {field, form, meta} = props;
                                return (
                                    <div>
                                        <input type='text' id='address' {...field}/>
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </Field>*/}
          <FastField name='address'>
            {
              // If you update channel, the address will not keep re-rendering if you use FastField, it implement shouldComponentUpdate internally
              (props) => {
                console.log('Render props', props);
                const {field, form, meta} = props;
                return (
                  <div>
                    <input type='text' id='address' {...field}/>
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                )
              }
            }
          </FastField>
        </div>

        <div className="form-control">
          <label htmlFor='facebook'>Facebook profile</label>
          <Field type='text' id='facebook' name='social.facebook'/>
        </div>
        <div className="form-control">
          <label htmlFor='twitter'>Twitter profile</label>
          <Field type='text' id='twitter' name='social.twitter'/>
        </div>

        <div className='form-control'>
          <label htmlFor='primaryPh'>Primary phone number</label>
          <Field type='text' id='primaryPh' name='phoneNumbers[0]'/>
        </div>
        <div className='form-control'>
          <label htmlFor='secondaryPh'>Secondary phone number</label>
          <Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
        </div>

        <div className='form-control'>
          <label>List of phone numbers</label>
          <FieldArray name='phNumbers'>
            {
              (fieldArrayProps) => {
                // console.log('fieldArrayProps', fieldArrayProps); // you can check other methods available in fieldArrayProps
                const {push, remove, form} = fieldArrayProps;
                const {values} = form;
                const {phNumbers} = values;
                return <div>
                  {
                    phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`}/>
                        {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>}
                        <button type='button' onClick={() => push('')}> +</button>
                      </div>
                    ))
                  }
                </div>
              }
            }
          </FieldArray>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
