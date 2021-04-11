import React from "react";
import {
  Grid,
  FormControlLabel,
  InputBase,
  FormControl,
  InputLabel,
  NativeSelect,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
  MenuItem,
  Select as SelectDiagnosis,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const ConAccidentForm = (props) => {
  const { mode, defaultdata, conAccident } = props;
  return (
    <React.Fragment>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="moreDetail"
            component={TextField}
            type="text"
            label="ลักษณะบาดเเผล"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={3}
            initialValue={defaultdata.treatmentById.moreDetail}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ลักษณะบาดเเผล"
            defaultValue={defaultdata.treatmentById.moreDetail}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="moreDetail"
            component={TextField}
            type="text"
            label="ลักษณะบาดเเผล"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={3}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="advice"
            component={TextField}
            type="text"
            label="คำแนะนำ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={3}
            initialValue={defaultdata.treatmentById.advice}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="คำแนะนำ"
            defaultValue={defaultdata.treatmentById.advice}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="advice"
            component={TextField}
            type="text"
            label="คำแนะนำ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={3}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        {mode === "diagnosis" ? (
          <FormControl style={{ width: "100%" }} variant="outlined">
            <SelectDiagnosis
              labelId="demo-simple-select-readonly-label"
              id="demo-simple-select-outlined"
              value={conAccident}
              inputProps={{ readOnly: true }}
              name="Symthom"
            >
              <MenuItem value={"WORSE"}>แย่ลง</MenuItem>
              <MenuItem value={"SAME"}>เท่าเดิม</MenuItem>
              <MenuItem value={"BETTER"}>ดีขึ้น</MenuItem>
            </SelectDiagnosis>
          </FormControl>
        ) : (
          <FormControl style={{ width: "100%" }} variant="outlined">
            <SelectDiagnosis
              labelId="demo-simple-select-readonly-label"
              id="demo-simple-select-outlined"
              value={conAccident}
              onChange={props.handleChangeAccident}
              name="Symthom"
            >
              <MenuItem value={"WORSE"}>แย่ลง</MenuItem>
              <MenuItem value={"SAME"}>เท่าเดิม</MenuItem>
              <MenuItem value={"BETTER"}>ดีขึ้น</MenuItem>
            </SelectDiagnosis>
          </FormControl>
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <FormControlLabel
            label="ผู้ป่วยเบิกประกัน"
            control={
              <Field
                name="isInsurance"
                component={Checkbox}
                type="checkbox"
                initialValue={defaultdata.treatmentById.isInsurance}
              />
            }
          />
        ) : mode === "diagnosis" ? (
          <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isInsurance}
              label="ผู้ป่วยเบิกประกัน"
            />
        ): (
          <FormControlLabel
            label="ผู้ป่วยเบิกประกัน"
            control={
              <Field name="isInsurance" component={Checkbox} type="checkbox" />
            }
          />
        )}
      </Grid>
    </React.Fragment>
  );
};
export default ConAccidentForm;
