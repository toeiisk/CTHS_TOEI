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
              รายละเอียดการรักษา
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
                    <h4>ข้อมูลผู้ป่วย</h4>
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
                      ดูข้อมูลเพิ่มเติม
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
                    ย้อนกลับ
                  </Button>
                </Box>
              }
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MuiTextField
                    id="standard-read-only-input"
                    label="ชื่อ"
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
                    label="นามสกุล"
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
                    label="โรคประจำตัว"
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
                    label="วัน/เดือน/ปีเกิด"
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
                  <h4>ข้อมูลเบื้องต้น</h4>
                </Box>
              </React.Fragment>
            }
          >
            <TreatmentForm defaultdata={data} mode={"update"} />
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
                  <h4>รายละเอียดการวินิจฉัย</h4>
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
                      label="รายละเอียด"
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
                      label="คำแนะนำ"
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
                      label="วันนัดหมอ"
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
                      label="รายละเอียดการนัด"
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
      </Box>
    </React.Fragment>
  );
};

export default DetailTreatmentPage;
