// import React, { useEffect, useState } from "react";

// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";

// import {
//   CATEGORY_OPTIONS,
//   IMPACT_OPTIONS,
//   TICKET_TYPES,
//   URGENCY_OPTIONS,
//   USERS,
// } from "../../constants/ticketConstants";

// import usePriorityCalculator from "../../hooks/usePriorityCalculator";
// import useTicketStore from "../../store/ticketStore";

// import { generateTicketNumber } from "../../utils/generateTicketNumber";

// const CreateTicketModal = ({ open, handleClose }) => {

//   const { addTicket } = useTicketStore();

//   const { calculatePriority } = usePriorityCalculator();

//   const [formData, setFormData] = useState({
//     title: "",
//     otherTitle: "",
//     requestedFor: "",
//     description: "",
//     category: "",
//     urgency: "",
//     impact: "",
//     priority: "P4",
//     attachments: null,
//     additionalNotes: "",
//   });

//   useEffect(() => {

//     const priority = calculatePriority(
//       formData.urgency,
//       formData.impact
//     );

//     setFormData((prev) => ({
//       ...prev,
//       priority,
//     }));

//   }, [formData.urgency, formData.impact]);

//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//   const handleFileChange = (e) => {

//     setFormData({
//       ...formData,
//       attachments: e.target.files,
//     });
//   };

//     const handleSubmit = () => {

//     const newTicket = {
//       id: Date.now(),

//       ticketNumber: generateTicketNumber(),

//       title:
//         formData.title === "Others"
//           ? formData.otherTitle
//           : formData.title,

//       requestedFor: formData.requestedFor,

//       description: formData.description,

//       category: formData.category,

//       urgency: formData.urgency,

//       impact: formData.impact,

//       priority: formData.priority,

//       attachments: formData.attachments
//         ? "Attached"
//         : "No Attachments",

//       additionalNotes: formData.additionalNotes,

//       assignedTo: "-",

//       status: "Open",
//     };


//      addTicket(newTicket);

//     handleClose();

//     setFormData({
//       title: "",
//       otherTitle: "",
//       requestedFor: "",
//       description: "",
//       category: "",
//       urgency: "",
//       impact: "",
//       priority: "P4",
//       attachments: null,
//       additionalNotes: "",
//     });
//   };



//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       maxWidth="md"
//       fullWidth
//     >
//       <DialogTitle>Create Ticket</DialogTitle>

//       <DialogContent>
//         <Grid container spacing={3} mt={1}>

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Title</InputLabel>

//               <Select
//                 name="title"
//                 value={formData.title}
//                 label="Title"
//                 onChange={handleChange}
//               >
//                 {TICKET_TYPES.map((type, index) => (
//                   <MenuItem key={index} value={type}>
//                     {type}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           {formData.title === "Others" && (
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Specify Other"
//                 name="otherTitle"
//                 value={formData.otherTitle}
//                 onChange={handleChange}
//               />
//             </Grid>
//           )}

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Requested For</InputLabel>

//               <Select
//                 name="requestedFor"
//                 value={formData.requestedFor}
//                 label="Requested For"
//                 onChange={handleChange}
//               >
//                 {USERS.map((user, index) => (
//                   <MenuItem key={index} value={user}>
//                     {user}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               multiline
//               rows={4}
//               label="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Category</InputLabel>

//               <Select
//                 name="category"
//                 value={formData.category}
//                 label="Category"
//                 onChange={handleChange}
//               >
//                 {CATEGORY_OPTIONS.map((category, index) => (
//                   <MenuItem key={index} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Urgency</InputLabel>

//               <Select
//                 name="urgency"
//                 value={formData.urgency}
//                 label="Urgency"
//                 onChange={handleChange}
//               >
//                 {URGENCY_OPTIONS.map((urgency, index) => (
//                   <MenuItem key={index} value={urgency}>
//                     {urgency}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Impact</InputLabel>

//               <Select
//                 name="impact"
//                 value={formData.impact}
//                 label="Impact"
//                 onChange={handleChange}
//               >
//                 {IMPACT_OPTIONS.map((impact, index) => (
//                   <MenuItem key={index} value={impact}>
//                     {impact}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//            <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Priority"
//               value={formData.priority}
//               InputProps={{
//                 readOnly: true,
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               type="file"
//               fullWidth
//               inputProps={{
//                 multiple: true,
//               }}
//               onChange={handleFileChange}
//             />
//           </Grid>


//                <Grid item xs={12}>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               label="Additional Notes"
//               name="additionalNotes"
//               value={formData.additionalNotes}
//               onChange={handleChange}
//             />
//             </Grid>
//         </Grid>
//          </DialogContent>

//          <DialogActions>
//         <Button onClick={handleClose}>
//           Cancel
//         </Button>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//         >
//           Submit Tickets
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CreateTicketModal;