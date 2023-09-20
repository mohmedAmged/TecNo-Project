import "./QouteForm.css";
import { HomePageEmailSchema } from "../../Validations/ValidateHomePageEmail";
import { useFormik } from "formik";

export default function QouteForm() {
  const onSubmit = async ( values , actions) =>{
    const isValid = await HomePageEmailSchema.validate(values);
    if(isValid) actions.resetForm();
  };
  const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
    initialValues:{
      homePageEmail: "",
    },
    validationSchema: HomePageEmailSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} onBlur={handleBlur} id="myHomeForm" className="myHomeForm mb-5" >
      <input type="email"
        name="homePageEmail"
        id="homePageEmail"
        value={values.homePageEmail}
        onChange={handleChange}
        className={`form-control ${(errors.homePageEmail && touched.homePageEmail )? "input-error" : ""}`}
        placeholder="Email Address"
      />
      <button
        className="btn btnSubmitEmail"
        type="submit"
        id="submitBtn"
        name='submitBtn'
      >
        Check Now
      </button>
    </form>
  )
}
