import { Avatar, Grid, Skeleton, Box } from "@mui/material";

export const ListAddressSkeleton = () => {
  return (
    <Grid item xs={8}>
      <Grid container>
        <Grid item xs={2}>
          <Box variant="div" style={{display:"flex", alignItems:"center"}} >
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Grid>
      </Grid>
    </Grid>
  );
};
