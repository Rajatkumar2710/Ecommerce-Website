import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCrad = () => {
  return (
    <div className="pb-5">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 50, height: 50, bgcolor: "#9155fd" }}
            ></Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-70">August 23,2023</p>
            </div>
          </div>
          <Rating value={4} readonly />
          <p>nice product,i love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCrad;
