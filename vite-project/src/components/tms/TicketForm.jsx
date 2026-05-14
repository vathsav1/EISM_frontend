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
    <Box mt={2}>

      <Grid container spacing={3}>

        {/* TITLE */}

        <Grid item xs={12} md={6}>

          <FormControl fullWidth>

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

        </Grid>

        {/* OTHER TITLE */}

        {formData.title === "Others" && (

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              label="Specify Other"
              name="otherTitle"
              value={
                formData.otherTitle
              }
              onChange={handleChange}
            />

          </Grid>

        )}

        {/* REQUESTED FOR */}

        <Grid item xs={12} md={6}>

          <FormControl fullWidth>

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

        </Grid>

        {/* CATEGORY */}

        <Grid item xs={12} md={6}>

          <FormControl fullWidth>

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
                (category, index) => (
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

        </Grid>

        {/* DESCRIPTION */}

        <Grid item xs={12}>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
          />

        </Grid>

        {/* URGENCY */}

        <Grid item xs={12} md={4}>

          <FormControl fullWidth>

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
                (urgency, index) => (
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

        </Grid>

        {/* IMPACT */}

        <Grid item xs={12} md={4}>

          <FormControl fullWidth>

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
                (impact, index) => (
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

        </Grid>

        {/* PRIORITY */}

        <Grid item xs={12} md={4}>

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

        </Grid>

        {/* ATTACHMENTS */}

        <Grid item xs={12}>

          <TextField
            fullWidth
            type="file"
            inputProps={{
              multiple: true,
            }}
            onChange={handleFileChange}
          />

        </Grid>

        {/* ADDITIONAL NOTES */}

        <Grid item xs={12}>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Additional Notes"
            name="additionalNotes"
            value={
              formData.additionalNotes
            }
            onChange={handleChange}
          />

        </Grid>

      </Grid>

      {/* BUTTONS */}

      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        mt={4}
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