import React, { useState } from "react";

import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import CreateArticleModal from "./CreateArticleModal";

const KBHeader = ({
  search,
  setSearch,
}) => {

  const [openModal, setOpenModal] =
    useState(false);

  return (
    <Paper className="kb-header">

      <div className="kb-overlay">

        <h1 className="kb-title">

          Find Answers, Faster

        </h1>

        <p className="kb-subtitle">

          Find the answers you need
          when you need them

        </p>

        <Box className="kb-search-wrapper">

          <TextField
            fullWidth
            placeholder="Search Articles"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="kb-search"
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                },
            }}
          />

          <Button
            variant="contained"
            sx={{ borderRadius: '12px' }}
            onClick={() =>
              setOpenModal(true)
            }
          >

            Create Blog

          </Button>

        </Box>

      </div>

      <CreateArticleModal
        open={openModal}
        handleClose={() =>
          setOpenModal(false)
        }
      />

    </Paper>
  );
};

export default KBHeader;