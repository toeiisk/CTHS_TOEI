import React from "react";
import { Grid, FormControlLabel, Button } from "@material-ui/core";
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
            ) : (
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
