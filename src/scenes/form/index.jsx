import * as yup from "yup";
import { Box, TextField, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Formik } from "formik";

const initiaValues={
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address:"",
};

const phoneRegExp=
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema=yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Emial").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone No. not valid").required("required"),
    lastName: yup.string().required("required"),
});

const Form =()=>{
    const isNonMobile=useMediaQuery("(min-width:600px)");

    const handleFormatSubmit=(value)=>{
    };

    return(
        <Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile"/>
        
        <Formik 
        onSubmit={handleFormatSubmit}
        initialValues={initiaValues}
        validationSchema={userSchema}
        >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
        }) => (
            <form onSubmit={handleSubmit}>
            <Box 
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{"& > div": {gridColumn: isNonMobile?undefined: "span 4"},}}
            >
            <TextField 
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            name="firstName"
            error={!!touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
            sx={{gridColumn:"span 2"}}
            />
            <TextField 
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            name="lastName"
            error={!!touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
            sx={{gridColumn:"span 2"}}
            />
            <TextField 
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{gridColumn:"span 4"}}
            />
            <TextField 
            fullWidth
            variant="filled"
            type="text"
            label="Contact No."
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.contact}
            name="contact"
            error={!!touched.contact && !!errors.contact}
            helperText={touched.contact && errors.contact}
            sx={{gridColumn:"span 4"}}
            />
            <TextField 
            fullWidth
            variant="filled"
            type="text"
            label="Address"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.address}
            name="address"
            error={!!touched.address && !!errors.address}
            helperText={touched.address && errors.address}
            sx={{gridColumn:"span 4"}}
            />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
             <Button type="submit" color="secondary" variant="contained">Create New User</Button>
            </Box>
            </form>
        )}
        </Formik>
        </Box>

    );
};
export default Form;