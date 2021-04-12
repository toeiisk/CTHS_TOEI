import React from "react";
import {
  Grid,
  FormControlLabel,
  Button,
  TextField as MuiTextField,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import moment from 'moment'

const DiagnosisForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid item={"true"} xs={6}>
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
          rows={5}
        />
      </Grid>
      <Grid item={"true"} xs={6}>
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
          rows={5}
        />
      </Grid>
      <Grid item={"true"} xs={6}>
        <Field
          id="date"
          type="date"
          label="วันนัดหมอ"
          variant="outlined"
          style={{ width: "100%" }}
          required={true}
          component={TextField}
          name="followUpDate"
          defaultValue={`${moment(new Date()).format(
            "YYYY-MM-DD"
          )}`}
        />
      </Grid>
      <Grid item={"true"} xs={6}>
        <Field
          fullWidth
          required
          name="followUpDetail"
          component={TextField}
          type="text"
          label="รายละเอียดการนัด"
          variant="outlined"
          style={{ width: "100%" }}
          multiline
          rows={5}
        />
      </Grid>
    </React.Fragment>
  );
};
export default DiagnosisForm;
