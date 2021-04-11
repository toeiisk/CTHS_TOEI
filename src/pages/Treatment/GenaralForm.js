import React from "react";
import { Grid, FormControlLabel, Button, TextField as MuiTextField  } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const GeneralForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="chiefComplaint"
            component={TextField}
            type="text"
            label="อาการสำคัญ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
            initialValue={defaultdata.treatmentById.chiefComplaint}
          />
        ) : mode === "diagnosis" ?
        ( 
          <MuiTextField
            id="standard-read-only-input"
            label="อาการสำคัญ"
            defaultValue={defaultdata.treatmentById.chiefComplaint}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        ):
        (
          <Field
            fullWidth
            required
            name="chiefComplaint"
            component={TextField}
            type="text"
            label="อาการสำคัญ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="presentIllness"
            component={TextField}
            type="text"
            label="ประวัติปัจจุบัน"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
            initialValue={defaultdata.treatmentById.presentIllness}
          />
        ) : mode === "diagnosis" ? 
        (
          <MuiTextField
            id="standard-read-only-input"
            label="ประวัติปัจจุบัน"
            defaultValue={defaultdata.treatmentById.presentIllness}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        ):
        (
          <Field
            fullWidth
            required
            name="presentIllness"
            component={TextField}
            type="text"
            label="ประวัติปัจจุบัน"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};
export default GeneralForm;
