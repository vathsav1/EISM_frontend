import React, {
  useState,
} from "react";

import {
  Paper,
  Typography,
} from "@mui/material";

import ArticleViewModal from "./ArticleViewModal";

const ArticleCard = ({
  article,
}) => {

  const [open, setOpen] =
    useState(false);

  return (
    <>

      <Paper
        className="article-card"
        onClick={() =>
          setOpen(true)
        }
      >

        <Typography
          className="article-title"
        >

          {article.title}

        </Typography>

        <Typography
          className="article-meta"
        >

          Created By:
          {" "}
          {article.createdBy}

        </Typography>

        <Typography
          className="article-meta"
        >

          Views:
          {" "}
          {article.views}

        </Typography>

        <Typography
          className="article-meta"
        >

          {article.createdDate}

        </Typography>

      </Paper>

      <ArticleViewModal
        open={open}
        handleClose={() =>
          setOpen(false)
        }
        article={article}
      />

    </>
  );
};

export default ArticleCard;