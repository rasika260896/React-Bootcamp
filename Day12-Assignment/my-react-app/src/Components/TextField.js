import {ErrorMessage, useField} from 'formik';

const TextField = ({label, ...props})=>{
    const [field, meta] = useField(props);
    console.log(field,meta);
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field}{...props}/>
            <ErrorMessage name={field.name} />
        </div>
    )
}

export default TextField;