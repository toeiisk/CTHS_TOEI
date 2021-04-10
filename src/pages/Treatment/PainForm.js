import React from "react";
import { Grid, FormControlLabel, Button } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";

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
          {mode === 'update' ? (
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
          ):(
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
