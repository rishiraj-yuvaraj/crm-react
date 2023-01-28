import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function BasicForm() {

  const formValidationSchema = yup.object({
      email : yup.string().min(8, "Need a bigger email").required("Need email"),
      password : yup.string().min(5, "Need a bigger password").required("Need password").max(12, "Too much password"),
  })
  const formik = useFormik({
    initialValues : {
      email : "",
      password : "",
    },

      validationSchema : formValidationSchema,
      onSubmit : (values) => {
      console.log("your values are submitted", values);
    }
  })

  
  return (
    <div className = "basicform-container">
    <form className = "basic-form" onSubmit = {formik.handleSubmit}>
     <TextField id="outlined-basic" 
          label="Email" 
          variant="outlined"
          name="email" type="email" 
          value={formik.values.email} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur}
          error = {formik.touched.email && formik.errors.email}
          helperText= {formik.touched.email && formik.errors.email ? formik.errors.email : null}
          />

      
      <TextField id="outlined-basic" 
          label="Password" 
          variant="outlined"
          name="password" type="password" 
          value={formik.values.password} 
          onChange ={formik.handleChange} 
          onBlur = {formik.handleBlur} 
          error = {formik.touched.password && formik.errors.password}
          helperText = {formik.touched.password && formik.errors.password ? formik.errors.password : null}
          />

      
      <Button type="submit" variant="contained">Submit</Button>
    </form>
    </div>
  );
}