import React, {
  useState,
} from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import useKnowledgeBaseStore from "../../store/knowledgeBaseStore";

const CreateArticleModal = ({
  open,
  handleClose,
}) => {

  const { addArticle } =
    useKnowledgeBaseStore();

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const handleSubmit = () => {

    const article = {

      id: Date.now(),

      title,

      description,

      createdBy: "Admin",

      createdDate:
        new Date().toLocaleDateString(),

      views: 0,
    };

    addArticle(article);

    handleClose();

    setTitle("");
    setDescription("");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle>
        Create Article
      </DialogTitle>

      <DialogContent>

        <Stack spacing={3} mt={2}>

          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <TextField
            label="Description"
            multiline
            rows={6}
            fullWidth
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
          >

            Submit

          </Button>

        </Stack>

      </DialogContent>

    </Dialog>
  );
};

export default CreateArticleModal;