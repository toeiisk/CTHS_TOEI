import React, { useCallback, useEffect, useState, useMemo } from "react";
import { InfoCard } from "@mystiny/ui";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useQuery } from "@apollo/client";
import { GET_MEDICINES } from "../DrugStore/graphql/Queries";
import { ADD_PRESCRPRION } from "./GraphQL/Mutation";
import { useMutation } from "@apollo/client";
import {GET_TREATMENTS} from "../../Treatment/GraphQL/Querie";
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
  const { treatmentId } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  const [line, setLine] = useState(1);
  const { loading, error, data } = useQuery(GET_MEDICINES, {
    fetchPolicy: "cache-and-network",
  });
  const [createPrescription] = useMutation(ADD_PRESCRPRION);
  const { user } = useSession();

  const onSubmit = useCallback(async (value) => {
    const variables = {
      record: {
        treatmentId: treatmentId,
        creatorId: user._id,
        detail: value.detail,
        status: "WAIT",
        dispenseItemId: value.PrescriptionDispenseItemId,
      },
    };
    try {
      await createPrescription({
        variables,
        refetchQueries: [{ query: GET_TREATMENTS }],
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
  }, [line]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <React.Fragment>
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
              </Grid>
              {TextElement}
              <Grid
                item
                xs={12}
                style={{ marginTop: 16, textAlign: "center", width: "100%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  บันทึกรายการยา
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </React.Fragment>
  );
};

export default CreatePrescription;
