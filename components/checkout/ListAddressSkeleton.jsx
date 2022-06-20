import { Avatar, Grid, Skeleton, Box } from "@mui/material";

export const ListAddressSkeleton = () => {
  return (
    <Grid item xs={12} md={8} p={0}>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </Grid>
  );

  function ItemSkeleton() {
    return <Grid container columnSpacing={1} p={0} mt={2}>
      <Grid item xs={2} sm={1} p={0} display={"flex"} alignItems={"center"}>
        <Skeleton variant="circular" animatio="wave">
          <Avatar />
        </Skeleton>
      </Grid>
      <Grid item xs={10} p={0}>
        <Skeleton animation="wave" width={100} />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Grid>
    </Grid>;
  }
};
