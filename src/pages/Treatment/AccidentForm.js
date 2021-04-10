import React from "react";
import { Grid, FormControlLabel, Button } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import moment from "moment";

const AccidentForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid item={"true"} xs={12}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="woundArea"
            component={TextField}
            type="text"
            label="บาดเเผลบริเวณ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
            initialValue={defaultdata.treatmentById.woundArea}
          />
        ) : (
          <Field
            fullWidth
            required
            name="woundArea"
            component={TextField}
            type="text"
            label="บาดเเผลบริเวณ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={12}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="woundLocation"
            component={TextField}
            type="text"
            label="สถานที่เกิดเหตุ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
            initialValue={defaultdata.treatmentById.woundLocation}
          />
        ) : (
          <Field
            fullWidth
            required
            name="woundLocation"
            component={TextField}
            type="text"
            label="สถานที่เกิดเหตุ"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            rows={5}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={12}>
        {mode === "update" ? (
          <Field
            id="date"
            type="date"
            variant="outlined"
            label="วันที่เกิดเหตุ"
            style={{ width: "100%" }}
            required={true}
            component={TextField}
            name="woundDate"
            initialValue={`${moment(defaultdata.treatmentById.woundDate).format(
              "YYYY-MM-DD"
            )}`}
          />
        ) : (
          <Field
            id="date"
            type="date"
            variant="outlined"
            label="วันที่เกิดเหตุ"
            style={{ width: "100%" }}
            required={true}
            component={TextField}
            name="woundDate"
            defaultValue={`${moment(new Date()).format("YYYY-MM-DD")}`}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={4}>
        {mode === "update" ? (
          <FormControlLabel
            label="เคยเข้ารับการรักษามาเเล้ว"
            control={
              <Field
                name="isTreatBefore"
                component={Checkbox}
                type="checkbox"
                initialValue={defaultdata.treatmentById.isTreatBefore}
              />
            }
          />
        ) : (
          <FormControlLabel
            label="เคยเข้ารับการรักษามาเเล้ว"
            control={
              <Field
                name="isTreatBefore"
                component={Checkbox}
                type="checkbox"
              />
            }
          />
        )}
      </Grid>
      <Grid item={"true"} xs={4}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="treatBeforeDetail"
            component={TextField}
            type="text"
            label="ที่"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
            initialValue={defaultdata.treatmentById.treatBeforeDetail}
          />
        ) : (
          <Field
            fullWidth
            required
            name="treatBeforeDetail"
            component={TextField}
            type="text"
            label="ที่"
            variant="outlined"
            style={{ width: "100%" }}
            multiline
          />
        )}
      </Grid>
      <Grid item={"true"} xs={4}>
        {mode === "update" ? (
          <Field
            id="date"
            type="date"
            variant="outlined"
            label="เมื่อวันที่"
            style={{ width: "100%" }}
            required={true}
            component={TextField}
            name="treatBeforeDate"
            defaultValue={`${moment(
              defaultdata.treatmentById.treatBeforeDate
            ).format("YYYY-MM-DD")}`}
          />
        ) : (
          <Field
            id="date"
            type="date"
            variant="outlined"
            label="เมื่อวันที่"
            style={{ width: "100%" }}
            required={true}
            component={TextField}
            name="treatBeforeDate"
            defaultValue={`${moment(new Date()).format("YYYY-MM-DD")}`}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={12} align="center">
        {mode === "update" ? (
          <React.Fragment>
            <FormControlLabel
              label="ผู้ป่วยฉุกเฉิน"
              control={
                <Field
                  name="isEmergency"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isEmergency}
                />
              }
            />
            <FormControlLabel
              label="เบิกประกันอุบัติเหตุ"
              control={
                <Field
                  name="isInsurance"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isInsurance}
                />
              }
            />
            <FormControlLabel
              label="สวมหมวกันน็อค/คาดเข็มขัด"
              control={
                <Field 
                name="isSafety" 
                component={Checkbox} 
                type="checkbox"
                initialValue={defaultdata.treatmentById.isSafety} 
                />
              }
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormControlLabel
              label="ผู้ป่วยฉุกเฉิน"
              control={
                <Field
                  name="isEmergency"
                  component={Checkbox}
                  type="checkbox"
                />
              }
            />
            <FormControlLabel
              label="เบิกประกันอุบัติเหตุ"
              control={
                <Field
                  name="isInsurance"
                  component={Checkbox}
                  type="checkbox"
                />
              }
            />
            <FormControlLabel
              label="สวมหมวกันน็อค/คาดเข็มขัด"
              control={
                <Field name="isSafety" component={Checkbox} type="checkbox" />
              }
            />
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default AccidentForm;
