import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
} from "@material-ui/core";
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.leftEye}
                label="ตาซ้าย"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.rightEye}
                label="ตาขวา"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isPain}
                label="มีอาการปวด"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isItching}
                label="มีอาการคัน"
              />
            ) :  (
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isConjunctivitis}
                label="เป็นโรคตาแดง"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isSore}
                label="มีอาการเจ็บ"
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
            {mode === 'update' ? (
              <FormControlLabel
              label="มีอาการระคายเคือง"
              control={
                <Field
                  name="isIrritation"
                  component={Checkbox}
                  type="checkbox"
                  initialValue={defaultdata.treatmentById.isIrritation}
                />
              }
            />
            ): mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isIrritation}
                label="มีอาการระคายเคือง"
              />
            ) :(
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
            )}
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isSwelling}
                label="มีอาการบวม"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isTear}
                label="น้ำตาไหล"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isBlurred}
                label="ตาพร่ามัว"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isGum}
                label="ขี้ตาเยอะ"
              />
            ) :(
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isPurulent}
                label="เป็นหนอง"
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
            ) : mode === "diagnosis" ? (
              <FormControlLabel
                disabled
                control={<CheckboxDianosis name="medicalCertificate" />}
                checked={defaultdata.treatmentById.isMatter}
                label="สิ่งเเปลกปลอมเข้าดวงตา"
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
export default EyeForm;
