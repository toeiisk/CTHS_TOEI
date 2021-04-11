import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const FeverForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid container={"true"} item sx={12} spacing={2}>
        <Grid item={"true"} xs={6} direction="column">
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ไข้"
                control={
                  <Field
                    name="isFever"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isFever}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isFever}
                label="ไข้"
              />
            ) : (
              <FormControlLabel
                label="ไข้"
                control={
                  <Field name="isFever" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ไอ"
                control={
                  <Field
                    name="isCough"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isCough}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isCough}
                label="ไอ"
              />
            ) : (
              <FormControlLabel
                label="ไอ"
                control={
                  <Field name="isCough" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="เสมหะ"
                control={
                  <Field
                    name="isPhlegm"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isPhlegm}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isPhlegm}
                label="เสมหะ"
              />
            ) : (
              <FormControlLabel
                label="เสมหะ"
                control={
                  <Field name="isPhlegm" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="น้ำมูก"
                control={
                  <Field
                    name="isSnot"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isSnot}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isSnot}
                label="น้ำมูก"
              />
            ) : (
              <FormControlLabel
                label="น้ำมูก"
                control={
                  <Field name="isSnot" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ปวดศีรษะ"
                control={
                  <Field
                    name="isHeadache"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isHeadache}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isHeadache}
                label="ปวดศีรษะ"
              />
            ) : (
              <FormControlLabel
                label="ปวดศีรษะ"
                control={
                  <Field
                    name="isHeadache"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="คัดจมูก"
                control={
                  <Field
                    name="isStuffy"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isStuffy}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isStuffy}
                label="คัดจมูก"
              />
            ) : (
              <FormControlLabel
                label="คัดจมูก"
                control={
                  <Field name="isStuffy" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
        </Grid>
        <Grid item={"true"} xs={6}>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="เบื่ออาหาร"
                control={
                  <Field
                    name="isAnorexia"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isAnorexia}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isAnorexia}
                label="เบื่ออาหาร"
              />
            ) : (
              <FormControlLabel
                label="เบื่ออาหาร"
                control={
                  <Field
                    name="isAnorexia"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="เจ็บคอ"
                control={
                  <Field
                    name="isSoreThroat"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isSoreThroat}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isSoreThroat}
                label="เจ็บคอ"
              />
            ) : (
              <FormControlLabel
                label="เจ็บคอ"
                control={
                  <Field
                    name="isSoreThroat"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="คันตา"
                control={
                  <Field
                    name="isEyeItching"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isEyeItching}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isEyeItching}
                label="คันตา"
              />
            ) :  (
              <FormControlLabel
                label="คันตา"
                control={
                  <Field
                    name="isEyeItching"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="Injected pharynx"
                control={
                  <Field
                    name="isInjectedPharynx"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isInjectedPharynx}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isInjectedPharynx}
                label="Injected pharynx"
              />
            ) : (
              <FormControlLabel
                label="Injected pharynx"
                control={
                  <Field
                    name="isInjectedPharynx"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="Exudates"
                control={
                  <Field
                    name="isExudates"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isExudates}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isExudates}
                label="Exudates"
              />
            ) : (
              <FormControlLabel
                label="Exudates"
                control={
                  <Field
                    name="isExudates"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="Lungs "
                control={
                  <Field
                    name="isLungClear"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isLungClear}
                  />
                }
              />
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isLungClear}
                label="Lungs"
              />
            ) : (
              <FormControlLabel
                label="Lungs "
                control={
                  <Field
                    name="isLungClear"
                    component={Checkbox}
                    type="checkbox"
                  />
                }
              />
            )}
          </Grid>
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
      </Grid>
    </React.Fragment>
  );
};
export default FeverForm;
