// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Grid, TextField, Button, Typography, Box } from "@mui/material";
// import { styled } from "@mui/system";
// import ContactCard from "./ContactCard/ContactCard";

// const ContactForm = () => {
//   // Form State
//   const formRef = useRef(); // Ref for the form
//   const [formData, setFormData] = useState({
//     name: "",
//     country: "",
//     contactNumber: "",
//     email: "",
//     requirement: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false); // Prevent double submissions

//   // Styled Components
//   const StyledTextField = styled(TextField)({
//     marginBottom: "16px",
//     "& .MuiInputBase-root": {
//       borderRadius: "8px",
//     },
//   });

//   const StyledButton = styled(Button)({
//     backgroundColor: "#1976D2",
//     borderRadius: "12px",
//     color: "#fff",
//     padding: "12px 24px",
//     fontWeight: "bold",
//     "&:hover": {
//       backgroundColor: "#4f19d2",
//       borderRadius: "12px",
//     },
//   });

//   // Validation Rules
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.country) newErrors.country = "Country is required.";
//     if (!formData.contactNumber)
//       newErrors.contactNumber = "Contact number is required.";
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!formData.requirement)
//       newErrors.requirement = "Requirement is required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Input Change Handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true); // Prevent multiple submissions
//     try {
//       await emailjs.sendForm(
//         "service_hqsckpr",
//         "template_f5u6lss",
//         formRef.current,
//         "5h1aKMlx3UYX3RH9F"
//       );
//       console.log("SUCCESS!");

//       // Reset form data and errors after successful submission
//       setFormData({
//         name: "",
//         country: "",
//         contactNumber: "",
//         email: "",
//         requirement: "",
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("FAILED...", error.text);
//     } finally {
//       setIsSubmitting(false); // Allow future submissions
//     }
//   };

//   return (
//     <Box p={4}>
//       <Grid container spacing={4}>
//         {/* Left Side Form */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" fontWeight="bold" gutterBottom>
//             Kindly share with us your requirement
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//             We are always willing to help you with our services
//           </Typography>
//           <form ref={formRef} onSubmit={sendEmail}>
//             <StyledTextField
//               fullWidth
//               label="Name"
//               name="name"
//               // value={formData.name}
//               // onChange={handleChange}
//               error={!!errors.name}
//               helperText={errors.name}
//               required
//             />
//             <StyledTextField
//               fullWidth
//               label="Country"
//               name="country"
//               // value={formData.country}
//               // onChange={handleChange}
//               error={!!errors.country}
//               helperText={errors.country}
//               required
//             />
//             <StyledTextField
//               fullWidth
//               label="Contact Number"
//               name="contactNumber"
//               // value={formData.contactNumber}
//               // onChange={handleChange}
//               error={!!errors.contactNumber}
//               helperText={errors.contactNumber}
//               required
//             />
//             <StyledTextField
//               fullWidth
//               label="Email"
//               name="email"
//               // value={formData.email}
//               // onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//               required
//             />
//             <StyledTextField
//               fullWidth
//               label="Requirement"
//               name="requirement"
//               // value={formData.requirement}
//               // onChange={handleChange}
//               error={!!errors.requirement}
//               helperText={errors.requirement}
//               required
//               multiline
//               rows={4}
//             />
//             <StyledButton fullWidth type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Requirement"}
//             </StyledButton>
//           </form>
//         </Grid>

//         {/* Right Side Contact Info */}
//         <Grid item xs={12} md={6} marginTop={"40px"}>
//           <ContactCard />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ContactForm;


// ----

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { styled } from "@mui/system";
import ContactCard from "./ContactCard/ContactCard";

const ContactForm = () => {
  const formRef = useRef(); // Ref for the form
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    contactNumber: "",
    email: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent double submissions
  const [statusMessage, setStatusMessage] = useState(null); // Status message for success or failure

  // Styled Components
  const StyledTextField = styled(TextField)({
    marginBottom: "16px",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  });

  const StyledButton = styled(Button)({
    backgroundColor: "#1976D2",
    borderRadius: "12px",
    color: "#fff",
    padding: "12px 24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#4f19d2",
      borderRadius: "12px",
    },
  });

  // Validation Rules
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.requirement)
      newErrors.requirement = "Requirement is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // if (!validate()) return;

    setIsSubmitting(true); // Prevent multiple submissions
    setStatusMessage(null); // Reset status message
    try {
      await emailjs.sendForm(
        "service_wi8tatk",
        "template_o6o5f2r",
        formRef.current,
        "Vu6r3MY1vxSfmQckG"
      );
      console.log("SUCCESS!");

      // Reset form data and errors after successful submission
      setFormData({
        name: "",
        country: "",
        contactNumber: "",
        email: "",
        requirement: "",
      });
      setErrors({});
      setStatusMessage({ type: "success", text: "Email sent successfully!" });
    } catch (error) {
      console.error("FAILED...", error.text);
      setStatusMessage({ type: "error", text: "Failed to send email. Please try again." });
    } finally {
      setIsSubmitting(false); // Allow future submissions

      // Clear the status message after 5 seconds
      setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
    }
  };

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* Left Side Form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Kindly share with us your requirement
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            We are always willing to help you with our services
          </Typography>
          <form ref={formRef} onSubmit={sendEmail}>
            <StyledTextField
              fullWidth
              label="Name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
            <StyledTextField
              fullWidth
              label="Country"
              name="country"
              // value={formData.country}
              // onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
              required
            />
            <StyledTextField
              fullWidth
              label="Contact Number"
              name="contactNumber"
              // value={formData.contactNumber}
              // onChange={handleChange}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber}
              required
            />
            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
            <StyledTextField
              fullWidth
              label="Requirement"
              name="requirement"
              // value={formData.requirement}
              // onChange={handleChange}
              error={!!errors.requirement}
              helperText={errors.requirement}
              required
              multiline
              rows={4}
            />
            <StyledButton fullWidth type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Requirement"}
            </StyledButton>
          </form>
          {statusMessage && (
            <Box mt={2}>
              <Alert severity={statusMessage.type}>{statusMessage.text}</Alert>
            </Box>
          )}
        </Grid>

        {/* Right Side Contact Info */}
        <Grid item xs={12} md={6} marginTop={"40px"}>
          <ContactCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
