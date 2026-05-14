import React, {
  useMemo,
  useState,
} from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import KBHeader from "../components/kb/KBHeader";

import MostReadArticles from "../components/kb/MostReadArticles";

import useKnowledgeBaseStore from "../store/knowledgeBaseStore";

const KnowledgeBaseAdmin = () => {

  const { articles } =
    useKnowledgeBaseStore();

  const [search, setSearch] =
    useState("");

  const filteredArticles =
    useMemo(() => {

      return articles.filter(
        (article) =>

          article.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [articles, search]);

  return (
    <div className="dashboard-content">

      {/* HEADER */}

      <KBHeader
        search={search}
        setSearch={setSearch}
      />

      {/* ARTICLES */}

      <Box className="kb-articles-section">

        <Typography
          variant="h4"
          fontWeight={700}
          mb={3}
        >

          Most Read Articles

        </Typography>

        <div className="kb-articles-section">
            <MostReadArticles
            articles={filteredArticles}
        />
        </div>

      </Box>

    </div>
  );
};

export default KnowledgeBaseAdmin;