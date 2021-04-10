import React from "react";
import { Grid, FormControlLabel, Button } from "@material-ui/core";
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
