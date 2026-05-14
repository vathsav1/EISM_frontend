import React from "react";

import {
  Grid,
} from "@mui/material";

import ArticleCard from "./ArticleCard";

const MostReadArticles = ({
  articles,
}) => {

  return (
    <Grid container spacing={3} >

      {articles.map((article) => (

        <Grid
          xs={12}
          md={6}
          lg={4}
          key={article.id}
        >

          <ArticleCard
            article={article}
          />

        </Grid>

      ))}

    </Grid>
  );
};

export default MostReadArticles;