import * as yup from "yup";

export const RegistrationFormSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is a required field")
        .email("Email must be a valid email"),
    name: yup
        .string()
        .required("Name is a required field")
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40, "Name must be at most 40 characters"),
    password: yup
        .string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(24, "Password must be at most 24 characters")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain one uppercase, one number and one special character",
        ),
    phoneNumber: yup
        .string()
        .required("Phone number is a required field")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid",
        ),
});
