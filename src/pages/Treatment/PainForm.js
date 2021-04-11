import React from "react";
import { Grid, TextField as MuiTextField } from "@material-ui/core";
import { Field } from "react-final-form";
import { TextField } from "final-form-material-ui";

const PainForm = (props) => {
  const { mode, defaultdata } = props;
  const normalizeFloat = (value) => {
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
            name="acheArea"
            component={TextField}
            type="text"
            label="ปวดบริเวณ"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.acheArea}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ปวดบริเวณ"
            defaultValue={defaultdata.treatmentById.acheArea}
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
            name="acheArea"
            component={TextField}
            type="text"
            label="ปวดบริเวณ"
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
            name="acheDate"
            component={TextField}
            type="text"
            label="เป็นมานาน (วัน)"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeFloat}
            initialValue={defaultdata.treatmentById.acheDate}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="เป็นมานาน (วัน)"
            defaultValue={defaultdata.treatmentById.acheDate}
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
            name="acheDate"
            component={TextField}
            type="text"
            label="เป็นมานาน (วัน)"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeFloat}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="painScore"
            component={TextField}
            type="text"
            label="Pain score"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeFloat}
            initialValue={defaultdata.treatmentById.painScore}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="Pain score"
            defaultValue={defaultdata.treatmentById.painScore}
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
            name="painScore"
            component={TextField}
            type="text"
            label="Pain score"
            variant="outlined"
            style={{ width: "100%" }}
            parse={normalizeFloat}
          />
        )}
      </Grid>
      <Grid item={"true"} xs={6}>
        {mode === "update" ? (
          <Field
            fullWidth
            required
            name="acheDetail"
            component={TextField}
            type="text"
            label="ลักษณะการปวด"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.acheDetail}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ลักษณะการปวด"
            defaultValue={defaultdata.treatmentById.acheDetail}
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
            name="acheDetail"
            component={TextField}
            type="text"
            label="ลักษณะการปวด"
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
            name="trigger"
            component={TextField}
            type="text"
            label="สิ่งที่กระตุ้น/สิ่งที่บรรเทา"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.trigger}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="สิ่งที่กระตุ้น/สิ่งที่บรรเทา"
            defaultValue={defaultdata.treatmentById.trigger}
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
            name="trigger"
            component={TextField}
            type="text"
            label="สิ่งที่กระตุ้น/สิ่งที่บรรเทา"
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
            name="crackDetail"
            component={TextField}
            type="text"
            label="ร้าวไป"
            variant="outlined"
            style={{ width: "100%" }}
            initialValue={defaultdata.treatmentById.crackDetail}
          />
        ) : mode === "diagnosis" ? (
          <MuiTextField
            id="standard-read-only-input"
            label="ร้าวไป"
            defaultValue={defaultdata.treatmentById.crackDetail}
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
            name="crackDetail"
            component={TextField}
            type="text"
            label="ร้าวไป"
            variant="outlined"
            style={{ width: "100%" }}
          />
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
export default PainForm;
