import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const DiarrheaForm = (props) => {
  const { mode, defaultdata } = props;
  const normalizeAmountdiarrhea = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  return (
    <React.Fragment>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="diarrheaAmount"
            component={TextField}
            type="text"
            label="จำนวนครั้งในการถ่าย"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeAmountdiarrhea}
            initialValue={defaultdata.treatmentById.diarrheaAmount}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="จำนวนครั้งในการถ่าย"
            defaultValue={defaultdata.treatmentById.diarrheaAmount}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="diarrheaAmount"
            component={TextField}
            type="text"
            label="จำนวนครั้งในการถ่าย"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeAmountdiarrhea}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="diarrheaDetail"
            component={TextField}
            type="text"
            label="ลักษณะอุจจาระ"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.diarrheaDetail}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ลักษณะอุจจาระ"
            defaultValue={defaultdata.treatmentById.diarrheaDetail}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="diarrheaDetail"
            component={TextField}
            type="text"
            label="ลักษณะอุจจาระ"
            variant="outlined"
            style={{ width: "100%" }}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="stomachache"
            component={TextField}
            type="text"
            label="ลักษณะการปวดท้อง"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.stomachache}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ลักษณะการปวดท้อง"
            defaultValue={defaultdata.treatmentById.stomachache}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="stomachache"
            component={TextField}
            type="text"
            label="ลักษณะการปวดท้อง"
            variant="outlined"
            style={{ width: "100%" }}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="bowelSound"
            component={TextField}
            type="text"
            label="bowel sound"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.bowelSound}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="bowelSound"
            defaultValue={defaultdata.treatmentById.bowelSound}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
          />
        ) : (
          <Field
            fullWidth
            required
            name="bowelSound"
            component={TextField}
            type="text"
            label="bowel sound"
            variant="outlined"
            style={{ width: "100%" }}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={12} align="center">
        {mode === "update" ? (
          <React.Fragment>
            <FormControlLabel
              label="คลื่นไส้/อาเจียน"
              control={
                <Field
                  name="isVomit"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isVomit}
                />
              }
            />
            <FormControlLabel
              label="อุจาระมีมูลเลือด"
              control={
                <Field
                  name="isFluxStool"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isFluxStool}
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
        ) : mode === "diagnosis" ? (
          <React.Fragment>
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isVomit}
              label="คลื่นไส้/อาเจียน"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isFluxStool}
              label="อุจาระมีมูลเลือด"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isFever}
              label="มีไข้"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormControlLabel
              label="คลื่นไส้/อาเจียน"
              control={
                <Field name="isVomit" component={Checkbox} type="checkbox" />
              }
            />
            <FormControlLabel
              label="อุจาระมีมูลเลือด"
              control={
                <Field
                  name="isFluxStool"
                  component={Checkbox}
                  type="checkbox"
                />
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
      <Grid item={"true"} xs={12}>
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
          />
        )}
      </Grid>
    </React.Fragment>
  );
};
export default DiarrheaForm;
