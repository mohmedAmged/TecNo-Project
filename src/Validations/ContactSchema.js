import * as yup from "yup";

export const ContactSchema = yup.object().shape({
    name: yup
    .string()
    .required("Required Feild")
    .min(3,"Name must be more than 3 characters")
    .max(20,"Name mustn't be more than 20 characters"),
    contactEmail: yup
    .string()
    .required("Required Input"),
    subject: yup
    .string()
    .required("Required Input")
    .min(3,"Name must be more than 3 characters")
    .max(15,"Name mustn't be more than 15 characters"),
    message: yup
    .string()
    .required("Required Input")
    .min(10,"Name must be more than 10 characters")
});