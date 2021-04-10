import React from "react";
import { Grid, FormControlLabel, Button } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

const EyeForm = (props) => {
  const { mode, defaultdata } = props;
  return (
    <React.Fragment>
      <Grid container={"true"} item sx={12} spacing={2}>
        <Grid item={"true"} xs={6} direction="column">
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ตาซ้าย"
                control={
                  <Field
                    name="leftEye"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.leftEye}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="ตาซ้าย"
                control={
                  <Field name="leftEye" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ตาขวา"
                control={
                  <Field
                    name="rightEye"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.rightEye}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="ตาขวา"
                control={
                  <Field name="rightEye" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
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
            ) : (
              <FormControlLabel
                label="มีอาการปวด"
                control={
                  <Field name="isPain" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
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
            ) : (
              <FormControlLabel
                label="มีอาการคัน"
                control={
                  <Field
                    name="isItching"
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
                label="เป็นโรคตาแดง"
                control={
                  <Field
                    name="isConjunctivitis"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isConjunctivitis}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="เป็นโรคตาแดง"
                control={
                  <Field
                    name="isConjunctivitis"
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
                label="มีอาการเจ็บ"
                control={
                  <Field
                    name="isSore"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isSore}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="มีอาการเจ็บ"
                control={
                  <Field name="isSore" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            <FormControlLabel
              label="มีอาการระคายเคือง"
              control={
                <Field
                  name="isIrritation"
                  component={Checkbox}
                  type="checkbox"
                />
              }
            />
          </Grid>
        </Grid>
        <Grid item={"true"} xs={6}>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
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
            ) : (
              <FormControlLabel
                label="มีอาการบวม"
                control={
                  <Field
                    name="isSwelling"
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
                label="น้ำตาไหล"
                control={
                  <Field
                    name="isTear"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isTear}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="น้ำตาไหล"
                control={
                  <Field name="isTear" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="ตาพร่ามัว"
                control={
                  <Field
                    name="isBlurred"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isBlurred}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="ตาพร่ามัว"
                control={
                  <Field
                    name="isBlurred"
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
                label="ขี้ตาเยอะ"
                control={
                  <Field
                    name="isGum"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isGum}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="ขี้ตาเยอะ"
                control={
                  <Field name="isGum" component={Checkbox} type="checkbox" />
                }
              />
            )}
          </Grid>
          <Grid style={{ marginLeft: "42%" }}>
            {mode === "update" ? (
              <FormControlLabel
                label="เป็นหนอง"
                control={
                  <Field
                    name="isPurulent"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isPurulent}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="เป็นหนอง"
                control={
                  <Field
                    name="isPurulent"
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
                label="สิ่งเเปลกปลอมเข้าดวงตา"
                control={
                  <Field
                    name="isMatter"
                    component={Checkbox}
                    type="checkbox"
                    initialValue={defaultdata.treatmentById.isMatter}
                  />
                }
              />
            ) : (
              <FormControlLabel
                label="สิ่งเเปลกปลอมเข้าดวงตา"
                control={
                  <Field name="isMatter" component={Checkbox} type="checkbox" />
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
export default EyeForm;
