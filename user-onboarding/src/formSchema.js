import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup.string().required("Must have a first name").min(2, "Must be 2 letters or more"),
    last_name: yup.string().required("Must have a last name").min(2, "Must be 2 letters or more"),
    email: yup.string().email("Must be a valid email address").required("Must have an email address"),
    password: yup.string().required("Password required").min(4, "Must be 4 characters or more"),
    termsAgreed: yup.boolean().oneOf([true], "You must agree to the terms of service.")
});

export default schema;