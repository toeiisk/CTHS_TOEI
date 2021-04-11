import React from "react";
import {
  Grid,
  FormControlLabel,
  TextField as MuiTextField,
  Checkbox as CheckboxDianosis,
} from "@material-ui/core";
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
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="อาการสำคัญ"
            defaultValue={defaultdata.treatmentById.woundArea}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
            multiline
            rows={5}
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
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="สถานที่เกิดเหตุ"
            defaultValue={defaultdata.treatmentById.woundLocation}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
            multiline
            rows={5}
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
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="วันที่เกิดเหตุ"
            defaultValue={`${moment(new Date()).format("YYYY-MM-DD")}`}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
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
        ) : mode === "diagnosis" ? (
          <FormControlLabel
            disabled
            control={<CheckboxDianosis name="medicalCertificate" />}
            checked={defaultdata.treatmentById.isTreatBefore}
            label="เคยเข้ารับการรักษามาเเล้ว"
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
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ที่"
            defaultValue={defaultdata.treatmentById.treatBeforeDetail}
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
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="เมื่อวันที่"
            defaultValue={`${moment(
              defaultdata.treatmentById.treatBeforeDate
            ).format("YYYY-MM-DD")}`}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            style={{ width: "100%" }}
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
        ) : mode === "diagnosis" ? (
          <React.Fragment>
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isEmergency}
              label="ผู้ป่วยฉุกเฉิน"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isInsurance}
              label="เบิกประกันอุบัติเหตุ"
            />
            <FormControlLabel
              disabled
              control={<CheckboxDianosis name="medicalCertificate" />}
              checked={defaultdata.treatmentById.isSafety}
              label="สวมหมวกันน็อค/คาดเข็มขัด"
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
