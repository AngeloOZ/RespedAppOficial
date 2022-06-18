import { Avatar, Grid, Skeleton, Box } from "@mui/material";

export const ListAddressSkeleton = () => {
  return (
    <Grid item xs={8}>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </Grid>
  );

  function ItemSkeleton() {
    return <Grid container spacing={1} p={0} mt={2}>
      <Grid item xs={1} p={0} display={"flex"} alignItems={"center"}>
        <Skeleton variant="circular" animatio="wave">
          <Avatar />
        </Skeleton>
      </Grid>
      <Grid item xs={10} p={0}>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Grid>
    </Grid>;
  }
};
