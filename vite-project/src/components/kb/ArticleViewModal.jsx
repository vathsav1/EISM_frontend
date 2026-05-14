import React, {
  useEffect,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import useKnowledgeBaseStore from "../../store/knowledgeBaseStore";

const ArticleViewModal = ({
  open,
  handleClose,
  article,
}) => {

  const { incrementViews } =
    useKnowledgeBaseStore();

  useEffect(() => {

    if (open && article) {

      incrementViews(article.id);
    }

  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle>

        {article.title}

        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 15,
            top: 15,
          }}
        >

          <CloseIcon />

        </IconButton>

      </DialogTitle>

      <DialogContent>

        <Typography mb={1}>

          Created By:
          {" "}
          {article.createdBy}

        </Typography>

        <Typography mb={3}>

          Created Date:
          {" "}
          {article.createdDate}

        </Typography>

        <Typography
          sx={{
            lineHeight: 2,
          }}
        >

          {article.description}

        </Typography>

      </DialogContent>

    </Dialog>
  );
};

export default ArticleViewModal;