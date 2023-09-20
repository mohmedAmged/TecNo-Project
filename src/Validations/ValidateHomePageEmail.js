import * as yup from "yup";

export const HomePageEmailSchema = yup.object().shape({
    homePageEmail: yup
    .string()
    .required("Required Feild")
});