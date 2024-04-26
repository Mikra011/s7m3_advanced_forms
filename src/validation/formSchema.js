import * as yup from 'yup'

// Here goes the schema for the form

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Must enter a username!')
        .min(3, 'Username must be at least 3 characters'),
    email: yup
        .string()
        .email('Email must be a valid emial address')
        .required('Must enter an email!'),
    role: yup   
        .string()
        .oneOf(['instructor', 'student', 'alumni'], 'Role is required!'),
    civil: yup  
        .string()
        .oneOf(['single', 'married'], 'Civil status is erquired!'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean(),
})

export default formSchema