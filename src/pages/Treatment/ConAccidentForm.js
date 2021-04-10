import React from "react";
import {
  Grid,
  FormControlLabel,
  Button,
  InputBase,
  FormControl,
  InputLabel,
  NativeSelect,
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
        <FormControl style={{ width: "100%" }}>
          <InputLabel id="demo-mutiple-name-label">อาการ</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            input={<BootstrapInput />}
            value={conAccident}
            onChange={props.handleChangeAccident}
            required={true}
            name="Symthom"
          >
            <option aria-label="None" value=" " />
            <option value={"WORSE"}>แย่ลง</option>
            <option value={"SAME"}>เท่าเดิม</option>
            <option value={"BETTER"}>ดีขึ้น</option>
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <FormControlLabel
            label="ผู้ป่วยเบิกประกัน"
            control={
              <Field name="isInsurance" component={Checkbox} type="checkbox" initialValue={defaultdata.treatmentById.isInsurance}/>
            }
          />
        ) : (
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
