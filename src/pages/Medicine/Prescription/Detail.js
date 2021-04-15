import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { InfoCard } from "@mystiny/ui";
import DescriptionIcon from "@material-ui/icons/Description";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { green } from "@material-ui/core/colors";
import Create from "./Create";
import { GET_PRESCRIPTION_BY_ID } from "./GraphQL/Querie";

const useStyles = makeStyles((theme) => ({
  create: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}));

const PrescriptionDetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PRESCRIPTION_BY_ID, {
    variables: {
      id,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return "...Loading";
  if (error) return `Error! ${error}`;

  return (
    <React.Fragment>
      <Box>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={6}>
            <Typography
              paragraph
              style={{ fontWeight: "bold", fontSize: "2em" }}
            >
              <DescriptionIcon color="primary" fontSize="small" /> รายละเอียดยา
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Box
              style={{ alignItems: "center", justifyContent: "flex-end" }}
            ></Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InfoCard
            title="ข้อมูลยา"
            actionTopRight={
              <Box display="flex">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate(-1)}
                >
                  ย้อนกลับ
                </Button>
              </Box>
            }
          >
            <Create mode={"confirm"} dataPrescription={data} />
          </InfoCard>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default PrescriptionDetailPage;
