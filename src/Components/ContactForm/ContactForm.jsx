import "./ContactForm.css";
import { ContactSchema } from "../../Validations/ContactSchema";
import { useFormik } from "formik";

const ContactForm = () => {
  const onSubmit = async ( values , actions) =>{
    const isValid = await ContactSchema.validate(values);
    if(isValid) actions.resetForm();
  };
  const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
    initialValues:{
      name: "",
      contactEmail: "",
      subject: "",
      message: ""
    },
    validationSchema: ContactSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} onBlur={handleBlur} id="contactMainForm" className="contactMainForm mb-5" >
      <div className="d-flex justify-content-between align-itmes-center gap-4 mb-4 contactFlexPart">
        <input type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          className={`form-control ${(errors.name && touched.name )? "input-error" : ""}`}
          placeholder="Name"
        />
        <input type="email"
          name="contactEmail"
          id="contactEmail"
          value={values.contactEmail}
          onChange={handleChange}
          className={`form-control ${(errors.contactEmail && touched.contactEmail )? "input-error" : ""}`}
          placeholder="Email"
        />
      </div>
      <input type="text"
        name="subject"
        id="subject"
        value={values.subject}
        onChange={handleChange}
        className={`form-control mb-4 ${(errors.subject && touched.subject )? "input-error" : ""}`}
        placeholder="subject"
      />
      <textarea rows={3}
        name="message"
        id="message"
        value={values.message}
        onChange={handleChange}
        className={`form-control mb-4 ${(errors.message && touched.message )? "input-error" : ""}`}
        placeholder="Message"
      />
      <button
        className="btnBlue"
        type="submit"
        id="submitBtn"
        name='submitBtn'
      >
        Send Now
      </button>
    </form>
  );
}
export default ContactForm;
