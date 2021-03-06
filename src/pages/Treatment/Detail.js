import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField as MuiTextField,
} from "@material-ui/core";
import { InfoCard } from "@mystiny/ui";
import DescriptionIcon from "@material-ui/icons/Description";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useQuery, Query } from "@apollo/client";
import { GET_TREATMENT_BY_ID } from "./GraphQL/Querie";
import { GET_PATIENT } from "../Patients/GraphQL/Querie";
import moment from "moment";
import TreatmentForm from "./Treatment-form";
import DiagnosisForm from "../Dianosis/Diagnosis-form";
import { Form, Field } from "react-final-form";
import CreatePrescription from '../Medicine/Prescription/Create'
import PrescriptionByID from '../Medicine/Prescription/PrescriptionMyId'

const useStyles = makeStyles((theme) => ({
  create: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}));

const DetailTreatmentPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_TREATMENT_BY_ID, {
    variables: {
      id,
    },
  });
  const PatientId = data?.treatmentById?.patientId;

  const {
    loading: loadingPatient,
    error: errorPatient,
    data: dataPatient,
  } = useQuery(GET_PATIENT, {
    variables: {
      id: PatientId,
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading) return "...Loading";
  if (error) return `Error! ${error}`;
  if (loadingPatient) return "...Loading";
  if (errorPatient) return `Error! ${error}`;
  console.log(data.treatmentById.prescription)
  return (
    <React.Fragment>
      <Box>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={6}>
            <Typography
              paragraph
              style={{ fontWeight: "bold", fontSize: "2em" }}
            >
              <DescriptionIcon color="primary" fontSize="small" />{" "}
              ??????????????????????????????????????????????????????
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <Box
              style={{ alignItems: "center", justifyContent: "flex-end" }}
            ></Box>
          </Grid>
          <Grid item xs={12}>
            <InfoCard
              title={
                <React.Fragment>
                  <Box
                    display="flex "
                    style={{
                      fontSize: "1em",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h4>???????????????????????????????????????</h4>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        navigate(
                          `/app/patients/detail/${data.treatmentById.patientId}`
                        )
                      }
                      style={{ marginLeft: 20 }}
                      className={classes.create}
                    >
                      ???????????????????????????????????????????????????
                    </Button>
                  </Box>
                </React.Fragment>
              }
              actionTopRight={
                <Box display="flex">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(-1)}
                  >
                    ????????????????????????
                  </Button>
                </Box>
              }
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MuiTextField
                    id="standard-read-only-input"
                    label="????????????"
                    defaultValue={dataPatient.patientById.firstname}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiTextField
                    id="standard-read-only-input"
                    label="?????????????????????"
                    defaultValue={dataPatient.patientById.lastname}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiTextField
                    id="standard-read-only-input"
                    label="?????????????????????????????????"
                    defaultValue={dataPatient.patientById.congenitalDisease.toString()}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiTextField
                    id="standard-read-only-input"
                    label="?????????/???????????????/??????????????????"
                    defaultValue={`${moment(
                      new Date(dataPatient.patientById.birthdate)
                    ).format("DD-MM-YYYY")}`}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </InfoCard>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <InfoCard
            title={
              <React.Fragment>
                <Box
                  display="flex "
                  style={{
                    fontSize: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>?????????????????????????????????????????????</h4>
                </Box>
              </React.Fragment>
            }
          >
            <TreatmentForm defaultdata={data} mode={"update"} />
          </InfoCard>
        </Grid>
        {data.treatmentById.status === 'MEDICINE' ? (
          <Grid item xs={12} style={{ marginTop: 20 }}>
          <InfoCard
            title={
              <React.Fragment>
                <Box
                  display="flex "
                  style={{
                    fontSize: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>???????????????????????????????????????</h4>
                </Box>
              </React.Fragment>
            }
          >
              <CreatePrescription treatmentId={id}/>
          </InfoCard>
        </Grid>
        ):
        (
          null
        )}
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <InfoCard
            title={
              <React.Fragment>
                <Box
                  display="flex "
                  style={{
                    fontSize: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>???????????????????????????????????????????????????????????????</h4>
                </Box>
              </React.Fragment>
            }
          >
            {data.treatmentById.diagnosis.length > 0 ? (
              <React.Fragment>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <MuiTextField
                      id="standard-read-only-input"
                      label="??????????????????????????????"
                      defaultValue={data.treatmentById.diagnosis[0].detail}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MuiTextField
                      id="standard-read-only-input"
                      label="?????????????????????"
                      defaultValue={data.treatmentById.diagnosis[0].advice}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MuiTextField
                      id="standard-read-only-input"
                      label="???????????????????????????"
                      defaultValue={`${moment(
                        new Date(data.treatmentById.diagnosis[0].followUpDate)
                      ).format("DD-MM-YYYY")}`}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <MuiTextField
                      id="standard-read-only-input"
                      label="????????????????????????????????????????????????"
                      defaultValue={data.treatmentById.diagnosis[0].followUpDetail}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
            ) : null}
          </InfoCard>
          
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <InfoCard
            title={
              <React.Fragment>
                <Box
                  display="flex "
                  style={{
                    fontSize: "1em",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>??????????????????????????????????????????</h4>
                </Box>
              </React.Fragment>
            }
          >
           {data.treatmentById.prescription.length > 0 ?  <PrescriptionByID data={data.treatmentById}/>: null }
          </InfoCard>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default DetailTreatmentPage;
