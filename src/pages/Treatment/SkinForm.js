import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const Rashdatenormalization = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  let number = parseFloat(onlyNums);
  return number;
};

const SkinForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="rashArea"
            component={TextField}
            type="text"
            label="บริเวณผื่น"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
            initialValue={defaultdata.treatmentById.rashArea}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="บริเวณผื่น"
            defaultValue={defaultdata.treatmentById.rashArea}
            InputProps={{
              readOnly: true,
            }}
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="rashArea"
            component={TextField}
            type="text"
            label="บริเวณผื่น"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="rashDate"
            component={TextField}
            type="text"
            label="เป็นมานาน (วัน)"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
            parse={Rashdatenormalization}
            initialValue={defaultdata.treatmentById.rashDate}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="เป็นมานาน (วัน)"
            defaultValue={defaultdata.treatmentById.rashDate}
            InputProps={{
              readOnly: true,
            }}
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="rashDate"
            component={TextField}
            type="text"
            label="เป็นมานาน (วัน)"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
            parse={Rashdatenormalization}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="rashDetail"
            component={TextField}
            type="text"
            label="สัมผัสโดน"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
            initialValue={defaultdata.treatmentById.rashDetail}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="สัมผัสโดน"
            defaultValue={defaultdata.treatmentById.rashDetail}
            InputProps={{
              readOnly: true,
            }}
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="rashDetail"
            component={TextField}
            type="text"
            label="สัมผัสโดน"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="physicalExamination"
            component={TextField}
            type="text"
            label="การตรวจสอบทางกายภาพ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
            initialValue={defaultdata.treatmentById.physicalExamination}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="การตรวจสอบทางกายภาพ"
            defaultValue={defaultdata.treatmentById.physicalExamination}
            InputProps={{
              readOnly: true,
            }}
            multiline
            rows={2}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="physicalExamination"
            component={TextField}
            type="text"
            label="การตรวจสอบทางกายภาพ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={2}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={12} align="center">
        {mode === "update" ? (
          <React.Fragment>
            <FormControlLabel
              label="มีอาการคัน"
              control={
                <Field
                  name="isItching"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isItching}
                />
              }
            />
            <FormControlLabel
              label="มีอาการปวด"
              control={
                <Field
                  name="isPain"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isPain}
                />
              }
            />
            <FormControlLabel
              label="มีอารการแสบ"
              control={
                <Field
                  name="isStinging"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isStinging}
                />
              }
            />
            <FormControlLabel
              label="มีอาการบวม"
              control={
                <Field
                  name="isSwelling"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isSwelling}
                />
              }
            />
            <FormControlLabel
              label="มีไข้"
              control={
                <Field
                  name="isFever"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isFever}
                />
              }
            />
          </React.Fragment>
        ) 
        //sssssssssssssssssssssssssss
        
        : mode === "diagnosis" ? (
          <React.Fragment>
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isItching}
              label="มีอาการคัน"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isPain}
              label="มีอาการปวด"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isStinging}
              label="มีอารการแสบ"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isSwelling}
              label="มีอารการบวม"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isFever}
              label="มีอารการไข้"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormControlLabel
              label="มีอาการคัน"
              control={
                <Field name="isItching" component={Checkbox} type="checkbox" />
              }
            />
            <FormControlLabel
              label="มีอาการปวด"
              control={
                <Field name="isPain" component={Checkbox} type="checkbox" />
              }
            />
            <FormControlLabel
              label="มีอารการแสบ"
              control={
                <Field name="isStinging" component={Checkbox} type="checkbox" />
              }
            />
            <FormControlLabel
              label="มีอาการบวม"
              control={
                <Field name="isSwelling" component={Checkbox} type="checkbox" />
              }
            />
            <FormControlLabel
              label="มีไข้"
              control={
                <Field name="isFever" component={Checkbox} type="checkbox" />
              }
            />
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default SkinForm;
