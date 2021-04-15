import React, { useCallback, useEffect, useState, useMemo } from "react";
import { InfoCard } from "@mystiny/ui";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useQuery } from "@apollo/client";
import { GET_MEDICINES, GET_MEDICINE } from "../DrugStore/graphql/Queries";
import { ADD_PRESCRPRION } from "./GraphQL/Mutation";
import { useMutation } from "@apollo/client";
import { GET_TREATMENTS } from "../../Treatment/GraphQL/Querie";
import { UPDATE_PRESCRIPTION_BY_ID } from "./GraphQL/Mutation";
import { GET_TREATMENTS_MEDICINE } from "../Prescription/GraphQL/Querie";
import {
  Grid,
  Typography,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Chip,
  NativeSelect,
  InputBase,
  InputLabel,
  TextField as MuiTextField,
  Select as SelectDiagnosis,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Radio, Select } from "final-form-material-ui";
import { useSession } from "../../../context/auth";

const useStyles = makeStyles((theme) => ({
  create: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}));

const CreatePrescription = (props) => {
  const { treatmentId, mode, dataPrescription } = props;
  console.log(dataPrescription, mode);
  const classes = useStyles();
  const [line, setLine] = useState(1);
  const { loading, error, data } = useQuery(GET_MEDICINES);
  const [createPrescription] = useMutation(ADD_PRESCRPRION);
  const [updatePrescription] = useMutation(UPDATE_PRESCRIPTION_BY_ID);
  const { user } = useSession();

  const onCreate = useCallback(async (value) => {
    const variables = {
      record: {
        treatmentId: treatmentId.treatmentById._id,
        creatorId: user._id,
        detail: value.detail,
        status: "WAIT",
        dispenseItemId: value.PrescriptionDispenseItemId,
      },
    };
    try {
      await createPrescription({
        variables,
        refetchQueries: [
          { query: GET_TREATMENTS },
          { query: GET_TREATMENTS_MEDICINE },
        ],
      });
      alert("บันทึกข้อมูลสำเร็จ");
    } catch (err) {
      console.log(err);
      alert("เกิดข้อผิดพลาด" + err.message);
    }
  }, []);

  const onUpdate = useCallback(async (value) => {
    const variables = {
      id: dataPrescription.prescriptionById._id,
      record: {
        treatmentId: dataPrescription.prescriptionById.treatmentId,
        creatorId: dataPrescription.prescriptionById.creatorId,
        detail: value.detail,
        status: "COMPLETE",
        dispensaryId: user._id,
      },
    };
    try {
      await updatePrescription({
        variables,
        refetchQueries: [{ query: GET_TREATMENTS_MEDICINE }],
      });
      alert("บันทึกข้อมูลสำเร็จ");
    } catch (err) {
      console.log(err);
      alert("เกิดข้อผิดพลาด" + err.message);
    }
  }, []);

  const onAddMedicine = () => {
    setLine(line + 1);
  };

  const onDeleteMedicine = () => {
    setLine(line - 1);
  };
  const normalizeNumber = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const TextElement = useMemo(() => {
    let TextElement = [];
    const normalizeNumber = (value) => {
      if (!value) return value;
      const onlyNums = value.replace(/[^\d]/g, "");
      let number = parseFloat(onlyNums);
      return number;
    };
    for (let i = 1; i < line + 1; i++) {
      TextElement.push(
        <React.Fragment>
          <Grid item xs={6}>
            <Field
              fullWidth
              name={`PrescriptionDispenseItemId[${i - 1}].dispenseId`}
              component={Select}
              label="เลือกรายการยา"
              formControlProps={{ fullWidth: true }}
              variant="outlined"
            >
              {data?.allMedicines?.map((data) => (
                <MenuItem value={data._id}>{data.name}</MenuItem>
              ))}
            </Field>
          </Grid>
          <Grid item xs={6}>
            <Field
              fullWidth
              required
              name={`PrescriptionDispenseItemId[${i - 1}].amount`}
              component={TextField}
              type="text"
              label="จำนวนยา"
              variant="outlined"
              style={{ width: "100%" }}
              parse={normalizeNumber}
            />
          </Grid>
        </React.Fragment>
      );
    }
    return TextElement;
  }, [line, data]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const onSubmit = mode === "confirm" ? onUpdate : onCreate;
  return (
    <React.Fragment>
      {mode === "confirm" ? null : (
        <Grid item xs={12} align="right" style={{ marginBottom: "2%" }}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="small"
            onClick={onAddMedicine}
            style={{ marginRight: "2%" }}
          >
            เพิ่มรายการยา
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={onDeleteMedicine}
          >
            ลบรายการยา
          </Button>
        </Grid>
      )}
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form
            className={classes.root}
            noValidate
            autoComplete="true"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {mode === "confirm" ? (
                  <Field
                    fullWidth
                    required
                    name="detail"
                    component={TextField}
                    type="text"
                    label="รายละเอียด"
                    variant="outlined"
                    style={{ width: "100%" }}
                    multiline
                    rows={3}
                    initialValue={dataPrescription.prescriptionById.detail}
                    readOnly={true}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                ) : (
                  <Field
                    fullWidth
                    required
                    name="detail"
                    component={TextField}
                    type="text"
                    label="รายละเอียด"
                    variant="outlined"
                    style={{ width: "100%" }}
                    multiline
                    rows={3}
                  />
                )}
              </Grid>
              {mode === "confirm"
                ? dataPrescription.prescriptionById.dispenseItemId.map(
                    (dataPre, index) => (
                      <React.Fragment>
                        <Grid item xs={6}>
                          <FormControl
                            style={{ width: "100%" }}
                            variant="outlined"
                          >
                            <SelectDiagnosis
                              labelId="demo-simple-select-readonly-label"
                              id="demo-simple-select-outlined"
                              value={dataPre.dispenseId}
                              inputProps={{ readOnly: true }}
                            >
                              {data?.allMedicines?.map((data) => (
                                <MenuItem value={data._id}>
                                  {data.name}
                                </MenuItem>
                              ))}
                            </SelectDiagnosis>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <Field
                            fullWidth
                            required
                            name={`PrescriptionDispenseItemId[${index}].amount`}
                            component={TextField}
                            type="text"
                            label="จำนวนยา"
                            variant="outlined"
                            style={{ width: "100%" }}
                            initialValue={dataPre.amount}
                            parse={normalizeNumber}
                            readOnly={true}
                            InputProps={{
                              readOnly: true,
                            }}
                          />
                        </Grid>
                      </React.Fragment>
                    )
                  )
                : TextElement}
              <Grid
                item
                xs={12}
                style={{ marginTop: 16, textAlign: "center", width: "100%" }}
              >
                {mode === "confirm" &&
                  dataPrescription.prescriptionById.status !== "COMPLETE" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    ยืนยันการจ่ายยา
                  </Button>
                ) : mode === "confirm" &&
                  dataPrescription.prescriptionById.status === "COMPLETE" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={true}
                  >
                    ยืนยันการจ่ายยา
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    บันทึกรายการยา
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        )}
      />
    </React.Fragment>
  );
};

export default CreatePrescription;
