import React from "react";

import {
  Box,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const UserKBHeader = ({
  search,
  setSearch,
}) => {

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

        </Box>

      </div>

    </Paper>
  );
};

export default UserKBHeader;