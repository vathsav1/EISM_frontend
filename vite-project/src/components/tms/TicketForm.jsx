  import React, {
    useEffect,
    useState,
  } from "react";

  import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
  } from "@mui/material";

  import Typography from "@mui/material/Typography";

  import {
    CATEGORY_OPTIONS,
    IMPACT_OPTIONS,
    TICKET_TYPES,
    URGENCY_OPTIONS,
    USERS,
  } from "../../constants/ticketConstants.js";


  import usePriorityCalculator from "../../hooks/usePriorityCalculator.js";

  import useTicketStore from "../../store/ticketStore.js";

  import { generateTicketNumber } from "../../utils/generateTicketNumber.js";

  import "../../styles/ticketform.css"

  const TicketForm = ({ handleClose }) => {

    const { addTicket } = useTicketStore();

    const { calculatePriority } =
      usePriorityCalculator();

    const [formData, setFormData] =
      useState({
        title: "",
        otherTitle: "",
        requestedFor: "",
        description: "",
        category: "",
        urgency: "",
        impact: "",
        priority: "P4",
        attachments: null,
        additionalNotes: "",
      });

    useEffect(() => {

      const priority = calculatePriority(
        formData.urgency,
        formData.impact
      );

      setFormData((prev) => ({
        ...prev,
        priority,
      }));

    }, [
      formData.urgency,
      formData.impact,
    ]);

    const handleChange = (e) => {

      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleFileChange = (e) => {

      setFormData({
        ...formData,
        attachments: e.target.files,
      });
    };

    const handleSubmit = () => {

      if (
        !formData.title ||
        !formData.requestedFor ||
        !formData.category ||
        !formData.urgency ||
        !formData.impact
      ) {

        alert("Please fill all required fields");
        return;
      }

      const newTicket = {


        id: Date.now(),

        ticketNumber:
          generateTicketNumber(),

        title:
          formData.title === "Others"
            ? formData.otherTitle
            : formData.title,

        category: formData.category,

        requestedFor:
          formData.requestedFor,

        createdBy : "sample",

        description:
          formData.description,

        urgency: formData.urgency,

        impact: formData.impact,

        priority: formData.priority,

        assignedTo: "-",

        status: "Open",

        attachments:
          formData.attachments
            ? "Attached"
            : "No Attachments",

        additionalNotes:
          formData.additionalNotes,
      };

      addTicket(newTicket);

      handleClose();
    };

    return (
  <Box mt={3}>

  <Typography
    variant="h6"
    mb={4}
    fontWeight={700}
  >
    Ticket Information
  </Typography>

  {/* ROW 1 */}

  <Box className="form-row">

    <FormControl fullWidth required>

      <InputLabel>
        Title
      </InputLabel>

      <Select
        name="title"
        label="Title"
        value={formData.title}
        onChange={handleChange}
      >

        {TICKET_TYPES.map(
          (type, index) => (

            <MenuItem
              key={index}
              value={type}
            >
              {type}
            </MenuItem>

          )
        )}

      </Select>

    </FormControl>

    <FormControl fullWidth required>

      <InputLabel>
        Requested For
      </InputLabel>

      <Select
        name="requestedFor"
        label="Requested For"
        value={
          formData.requestedFor
        }
        onChange={handleChange}
      >

        {USERS.map(
          (user, index) => (

            <MenuItem
              key={index}
              value={user}
            >
              {user}
            </MenuItem>

          )
        )}

      </Select>

    </FormControl>

  </Box>

  {/* OTHER */}

  {formData.title ===
    "Others" && (

    <Box mt={3}>

      <TextField
        fullWidth
        label="Specify Other"
        name="otherTitle"
        value={
          formData.otherTitle
        }
        onChange={handleChange}
      />

    </Box>

  )}

  {/* ROW 2 */}

  <Box className="form-row">

    <FormControl fullWidth required>

      <InputLabel>
        Category
      </InputLabel>

      <Select
        name="category"
        label="Category"
        value={
          formData.category
        }
        onChange={handleChange}
      >

        {CATEGORY_OPTIONS.map(
          (
            category,
            index
          ) => (

            <MenuItem
              key={index}
              value={category}
            >
              {category}
            </MenuItem>

          )
        )}

      </Select>

    </FormControl>

    <TextField
      fullWidth
      label="Priority"
      value={
        formData.priority
      }
      InputProps={{
        readOnly: true,
      }}
    />

  </Box>

  {/* ROW 3 */}

  <Box className="form-row">

    <FormControl fullWidth required>

      <InputLabel>
        Urgency
      </InputLabel>

      <Select
        name="urgency"
        label="Urgency"
        value={
          formData.urgency
        }
        onChange={handleChange}
      >

        {URGENCY_OPTIONS.map(
          (
            urgency,
            index
          ) => (

            <MenuItem
              key={index}
              value={urgency}
            >
              {urgency}
            </MenuItem>

          )
        )}

      </Select>

    </FormControl>

    <FormControl fullWidth required>

      <InputLabel>
        Impact
      </InputLabel>

      <Select
        name="impact"
        label="Impact"
        value={
          formData.impact
        }
        onChange={handleChange}
      >

        {IMPACT_OPTIONS.map(
          (
            impact,
            index
          ) => (

            <MenuItem
              key={index}
              value={impact}
            >
              {impact}
            </MenuItem>

          )
        )}

      </Select>

    </FormControl>

  </Box>

  {/* DESCRIPTION */}

  <Box mt={3}>

    <TextField
      fullWidth
      multiline
      rows={7}
      label="Description"
      name="description"
      value={
        formData.description
      }
      onChange={handleChange}
    />

  </Box>

  {/* ATTACHMENT */}

  <Box mt={6} mb={2}>

    <Button
      variant="outlined"
      component="label"
    >

      Upload Attachments

      <input
        hidden
        multiple
        type="file"
        onChange={
          handleFileChange
        }
      />

    </Button>

  </Box>

  {/* NOTES */}

  <Box mt={3}>

    <TextField
      fullWidth
      multiline
      rows={7}
      label="Additional Notes"
      name="additionalNotes"
      value={
        formData.additionalNotes
      }
      onChange={handleChange}
    />

  </Box>

  {/* BUTTONS */}

  <Stack
    direction="row"
    spacing={2}
    mt={5}
    justifyContent="flex-end"
  >

    <Button
      variant="outlined"
      onClick={handleClose}
    >
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={handleSubmit}
    >
      Submit Ticket
    </Button>

  </Stack>

</Box>
);
  };

  export default TicketForm;