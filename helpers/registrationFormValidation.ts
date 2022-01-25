import * as yup from "yup";

export const RegistrationFormSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be a valid email")
        .required("Email is a required field"),
    name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40, "Name must be at most 40 characters")
        .required("Name is a required field"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(24, "Password must be at most 24 characters")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain one uppercase, one number and one special character",
        )
        .required("Password is a required field"),
});
