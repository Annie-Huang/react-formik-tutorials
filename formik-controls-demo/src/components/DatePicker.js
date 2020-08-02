import React from 'react';
import {ErrorMessage, Field} from "formik";
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from "./TextError";


const DatePicker = ({label, name, ...rest}) => {
    /*
() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};
 */

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form, field}) => {
                        const {setFieldValue} = form;
                        const {value} = field;

                        return (
                            <DateView
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />)
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default DatePicker;
