import React, { useCallback, useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  NativeSelect,
  InputBase,
  InputLabel,
  Button,
  FormControlLabel,
  Checkbox as CheckboxDianosis,
  TextField as MuiTextField,
  MenuItem,
  Select as SelectDiagnosis,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import { useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import {
  ADD_GENERAL_FORM,
  ADD_SKIN_FORM,
  ADD_ACCIDENT_FORM,
  ADD_CONACCIDENT_FORM,
  ADD_EYES_FORM,
  ADD_FEVER_FORM,
  ADD_DIARRHEA_FORM,
  ADD_PAIN_FORM,
  UPDATE_GENERAL_FORM,
  UPDATE_SKIN_FORM,
  UPDATE_ACCIDENT_FORM,
  UPDATE_CONACCIDENT_FORM,
  UPDATE_EYES_FORM,
  UPDATE_FEVER_FORM,
  UPDATE_DIARRHEA_FORM,
  UPDATE_PAIN_FORM,
} from "./GraphQL/Mutation";
import { GET_TREATMENT_BY_ID, GET_TREATMENTS } from "./GraphQL/Querie";
import { GET_PATIENT } from "../Patients/GraphQL/Querie";
import {GET_TREATMENTS_DOAGNOSIS} from '../Dianosis/GraphQL/Querie'
import GeneralForm from "./GenaralForm";
import EyesForm from "./EyesForm";
import SkinForm from "./SkinForm";
import AccidentForm from "./AccidentForm";
import ConAccidentForm from "./ConAccidentForm";
import FeverForm from "./FeverForm";
import DiarrheaForm from "./Diarrhea";
import PainForm from "./PainForm";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const TreatmentForm = (props) => {
  const { mode, defaultdata } = props;
  const classes = useStyles();
  let navigate = useNavigate();
  const [addGeneralForm] = useMutation(ADD_GENERAL_FORM);
  const [addSkinForm] = useMutation(ADD_SKIN_FORM);
  const [addAccidentForm] = useMutation(ADD_ACCIDENT_FORM);
  const [addConAccidentForm] = useMutation(ADD_CONACCIDENT_FORM);
  const [addFeverForm] = useMutation(ADD_FEVER_FORM);
  const [addEyesForm] = useMutation(ADD_EYES_FORM);
  const [addDiarrheaForm] = useMutation(ADD_DIARRHEA_FORM);
  const [addPainForm] = useMutation(ADD_PAIN_FORM);

  const [updateGeneralForm] = useMutation(UPDATE_GENERAL_FORM);
  const [updateSkinForm] = useMutation(UPDATE_SKIN_FORM);
  const [updateAccidentForm] = useMutation(UPDATE_ACCIDENT_FORM);
  const [updateConAccidentForm] = useMutation(UPDATE_CONACCIDENT_FORM);
  const [updateFeverForm] = useMutation(UPDATE_FEVER_FORM);
  const [updateEyesForm] = useMutation(UPDATE_EYES_FORM);
  const [updateDiarrheaForm] = useMutation(UPDATE_DIARRHEA_FORM);
  const [updatePainForm] = useMutation(UPDATE_PAIN_FORM);

  let { id } = useParams();
  const [status, setStatus] = useState("DIAGNOSIS");
  const [form, setForm] = useState("General");
  const [conAccident, setConaccident] = useState("");

  useEffect(() => {
    if (mode === "update" || mode === "diagnosis") {
      setForm(defaultdata.treatmentById.__typename);
      setStatus(defaultdata.treatmentById.status);
      if (defaultdata.treatmentById.lesion) {
        setConaccident(defaultdata.treatmentById.lesion);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }, []);

  const normalizeheight = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizeweight = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizebloodpressure = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizepulserate = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizetempuraturet = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizerespiratoryrate = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizebmi = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };
  const normalizeoxygensaturation = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    let number = parseFloat(onlyNums);
    return number;
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeForm = (event) => {
    setForm(event.target.value);
  };

  const handleChangeAccident = (event) => {
    setConaccident(event.target.value);
  };

  const onSubmitCreate = useCallback(
    async (value) => {
      let medicerti = value.medicalCertificate ? true : false;
      if (form === "General") {
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            chiefComplaint: value.chiefComplaint,
            presentIllness: value.presentIllness,
          },
        };
        try {
          await addGeneralForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Skin") {
        let isItching = value.isItching ? true : false;
        let isPain = value.isPain ? true : false;
        let isStinging = value.isStinging ? true : false;
        let isFever = value.isFever ? true : false;
        let isSwelling = value.isSwelling ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            rashArea: value.rashArea,
            rashDate: value.rashDate,
            rashDetail: value.rashDetail,
            isItching: isItching,
            isPain: isPain,
            isStinging: isStinging,
            isFever: isFever,
            isSwelling: isSwelling,
            physicalExamination: value.physicalExamination,
          },
        };
        try {
          await addSkinForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Accident") {
        let isEmergency = value.isEmergency ? true : false;
        let isInsurance = value.isInsurance ? true : false;
        let isSafety = value.isSafety ? true : false;
        let isTreatBefore = value.isTreatBefore ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            isEmergency: isEmergency,
            isInsurance: isInsurance,
            isSafety: isSafety,
            woundArea: value.woundArea,
            woundDate: value.woundDate,
            woundLocation: value.woundLocation,
            isTreatBefore: isTreatBefore,
            treatBeforeDetail: value.treatBeforeDetail,
            treatBeforeDate: value.treatBeforeDate,
          },
        };
        try {
          await addAccidentForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "ContinueAccident") {
        let isInsurance = value.isInsurance ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            isInsurance: isInsurance,
            lesion: conAccident,
            advice: value.advice,
            moreDetail: value.moreDetail,
          },
        };
        try {
          await addConAccidentForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Eyes") {
        let leftEye = value.leftEye ? true : false;
        let rightEye = value.rightEye ? true : false;
        let isPain = value.isPain ? true : false;
        let isIrritation = value.isIrritation ? true : false;
        let isItching = value.isItching ? true : false;
        let isConjunctivitis = value.isConjunctivitis ? true : false;
        let isSore = value.isSore ? true : false;
        let isSwelling = value.isSwelling ? true : false;
        let isTear = value.isTear ? true : false;
        let isBlurred = value.isBlurred ? true : false;
        let isGum = value.isGum ? true : false;
        let isPurulent = value.isPurulent ? true : false;
        let isMatter = value.isMatter ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            leftEye: leftEye,
            rightEye: rightEye,
            isPain: isPain,
            isIrritation: isIrritation,
            isItching: isItching,
            isConjunctivitis: isConjunctivitis,
            isSore: isSore,
            isSwelling: isSwelling,
            isTear: isTear,
            isBlurred: isBlurred,
            isGum: isGum,
            isPurulent: isPurulent,
            isMatter: isMatter,
            physicalExamination: value.physicalExamination,
          },
        };
        try {
          await addEyesForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Fever") {
        let isFever = value.isFever ? true : false;
        let isCough = value.isCough ? true : false;
        let isPhlegm = value.isPhlegm ? true : false;
        let isSnot = value.isSnot ? true : false;
        let isHeadache = value.isHeadache ? true : false;
        let isStuffy = value.isStuffy ? true : false;
        let isAnorexia = value.isAnorexia ? true : false;
        let isSoreThroat = value.isSoreThroat ? true : false;
        let isEyeItching = value.isEyeItching ? true : false;
        let isInjectedPharynx = value.isInjectedPharynx ? true : false;
        let isExudates = value.isExudates ? true : false;
        let isLungClear = value.isLungClear ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            isFever: isFever,
            isCough: isCough,
            isPhlegm: isPhlegm,
            isSnot: isSnot,
            isHeadache: isHeadache,
            isStuffy: isStuffy,
            isAnorexia: isAnorexia,
            isSoreThroat: isSoreThroat,
            isEyeItching: isEyeItching,
            isInjectedPharynx: isInjectedPharynx,
            isExudates: isExudates,
            isLungClear: isLungClear,
          },
        };
        try {
          await addFeverForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Diarrhea") {
        let isFever = value.isFever ? true : false;
        let isFluxStool = value.isFluxStool ? true : false;
        let isVomit = value.isVomit ? true : false;
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            diarrheaAmount: value.diarrheaAmount,
            diarrheaDetail: value.diarrheaDetail,
            stomachache: value.stomachache,
            isVomit: isVomit,
            isFluxStool: isFluxStool,
            isFever: isFever,
            bowelSound: value.bowelSound,
          },
        };
        try {
          await addDiarrheaForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS }, {query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Pain") {
        const variables = {
          record: {
            patientId: id,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            acheArea: value.acheArea,
            acheDate: value.acheDate,
            painScore: value.painScore,
            acheDetail: value.acheDetail,
            trigger: value.trigger,
            crackDetail: value.crackDetail,
          },
        };
        try {
          await addPainForm({
            variables,
            refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}],
          });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(`/app/patients/detail/${id}`);
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      } else {
        return null;
      }
    },
    [
      addGeneralForm,
      addSkinForm,
      status,
      form,
      conAccident,
      addEyesForm,
      addFeverForm,
      addAccidentForm,
      addConAccidentForm,
      addDiarrheaForm,
      addPainForm,
    ]
  );
  const onSubmitUpdate = useCallback(
    async (value) => {
      let medicerti = value.medicalCertificate ? true : false;
      if (form === "General") {
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            chiefComplaint: value.chiefComplaint,
            presentIllness: value.presentIllness,
          },
        };
        try {
          await updateGeneralForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Skin") {
        let isItching = value.isItching ? true : false;
        let isPain = value.isPain ? true : false;
        let isStinging = value.isStinging ? true : false;
        let isFever = value.isFever ? true : false;
        let isSwelling = value.isSwelling ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            rashArea: value.rashArea,
            rashDate: value.rashDate,
            rashDetail: value.rashDetail,
            isItching: isItching,
            isPain: isPain,
            isStinging: isStinging,
            isFever: isFever,
            isSwelling: isSwelling,
            physicalExamination: value.physicalExamination,
          },
        };
        try {
          await updateSkinForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Accident") {
        let isEmergency = value.isEmergency ? true : false;
        let isInsurance = value.isInsurance ? true : false;
        let isSafety = value.isSafety ? true : false;
        let isTreatBefore = value.isTreatBefore ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            isEmergency: isEmergency,
            isInsurance: isInsurance,
            isSafety: isSafety,
            woundArea: value.woundArea,
            woundDate: value.woundDate,
            woundLocation: value.woundLocation,
            isTreatBefore: isTreatBefore,
            treatBeforeDetail: value.treatBeforeDetail,
            treatBeforeDate: value.treatBeforeDate,
          },
        };
        try {
          await updateAccidentForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "ContinueAccident") {
        let isInsurance = value.isInsurance ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            isInsurance: isInsurance,
            lesion: conAccident,
            advice: value.advice,
            moreDetail: value.moreDetail,
          },
        };
        try {
          await updateConAccidentForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Eyes") {
        let leftEye = value.leftEye ? true : false;
        let rightEye = value.rightEye ? true : false;
        let isPain = value.isPain ? true : false;
        let isIrritation = value.isIrritation ? true : false;
        let isItching = value.isItching ? true : false;
        let isConjunctivitis = value.isConjunctivitis ? true : false;
        let isSore = value.isSore ? true : false;
        let isSwelling = value.isSwelling ? true : false;
        let isTear = value.isTear ? true : false;
        let isBlurred = value.isBlurred ? true : false;
        let isGum = value.isGum ? true : false;
        let isPurulent = value.isPurulent ? true : false;
        let isMatter = value.isMatter ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            leftEye: leftEye,
            rightEye: rightEye,
            isPain: isPain,
            isIrritation: isIrritation,
            isItching: isItching,
            isConjunctivitis: isConjunctivitis,
            isSore: isSore,
            isSwelling: isSwelling,
            isTear: isTear,
            isBlurred: isBlurred,
            isGum: isGum,
            isPurulent: isPurulent,
            isMatter: isMatter,
            physicalExamination: value.physicalExamination,
          },
        };
        try {
          await updateEyesForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Fever") {
        let isFever = value.isFever ? true : false;
        let isCough = value.isCough ? true : false;
        let isPhlegm = value.isPhlegm ? true : false;
        let isSnot = value.isSnot ? true : false;
        let isHeadache = value.isHeadache ? true : false;
        let isStuffy = value.isStuffy ? true : false;
        let isAnorexia = value.isAnorexia ? true : false;
        let isSoreThroat = value.isSoreThroat ? true : false;
        let isEyeItching = value.isEyeItching ? true : false;
        let isInjectedPharynx = value.isInjectedPharynx ? true : false;
        let isExudates = value.isExudates ? true : false;
        let isLungClear = value.isLungClear ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            isFever: isFever,
            isCough: isCough,
            isPhlegm: isPhlegm,
            isSnot: isSnot,
            isHeadache: isHeadache,
            isStuffy: isStuffy,
            isAnorexia: isAnorexia,
            isSoreThroat: isSoreThroat,
            isEyeItching: isEyeItching,
            isInjectedPharynx: isInjectedPharynx,
            isExudates: isExudates,
            isLungClear: isLungClear,
          },
        };
        try {
          await updateFeverForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Diarrhea") {
        let isFever = value.isFever ? true : false;
        let isFluxStool = value.isFluxStool ? true : false;
        let isVomit = value.isVomit ? true : false;
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            diarrheaAmount: value.diarrheaAmount,
            diarrheaDetail: value.diarrheaDetail,
            stomachache: value.stomachache,
            isVomit: isVomit,
            isFluxStool: isFluxStool,
            isFever: isFever,
            bowelSound: value.bowelSound,
          },
        };
        try {
          await updateDiarrheaForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      }
      if (form === "Pain") {
        const variables = {
          id: defaultdata.treatmentById._id,
          record: {
            patientId: defaultdata.treatmentById.patientId,
            userId: "6062eaf88849824480e01a4f",
            weight: value.weight,
            height: value.height,
            bloodPressure: value.bloodPressure,
            pulseRate: value.pulseRate,
            tempurature: value.tempurature,
            respiratoryRate: value.respiratoryRate,
            bmi: value.bmi,
            oxygenSaturation: value.oxygenSaturation,
            medicalCertificate: medicerti,
            status: status,
            physicalExamination: value.physicalExamination,
            acheArea: value.acheArea,
            acheDate: value.acheDate,
            painScore: value.painScore,
            acheDetail: value.acheDetail,
            trigger: value.trigger,
            crackDetail: value.crackDetail,
          },
        };
        try {
          await updatePainForm({ variables, refetchQueries: [{ query: GET_TREATMENTS },{query: GET_TREATMENTS_DOAGNOSIS}] });
          alert("บันทึกข้อมูลสำเร็จ");
          navigate(
            `/app/patients/detail/${defaultdata.treatmentById.patientId}`
          );
        } catch (err) {
          console.log(err);
          alert("เกิดข้อผิดพลาด" + err.message);
        }
      } else {
        return null;
      }
    },
    [
      addGeneralForm,
      addSkinForm,
      status,
      form,
      conAccident,
      addEyesForm,
      addFeverForm,
      addAccidentForm,
      addConAccidentForm,
      addDiarrheaForm,
      addPainForm,
    ]
  );
  const onSubmit = mode === "update" ? onSubmitUpdate : onSubmitCreate;
  return (
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form
            className={classes.root}
            noValidate
            autoComplete="true"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="weight"
                    component={TextField}
                    type="text"
                    label="น้ำหนัก"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeweight}
                    initialValue={defaultdata.treatmentById.weight}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="น้ำหนัก"
                    defaultValue={defaultdata.treatmentById.weight}
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
                    name="weight"
                    component={TextField}
                    type="text"
                    label="น้ำหนัก"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeweight}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="height"
                    component={TextField}
                    type="text"
                    label="ส่วนสูง"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeheight}
                    initialValue={defaultdata.treatmentById.height}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="ส่วนสูง"
                    defaultValue={defaultdata.treatmentById.height}
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
                    name="height"
                    component={TextField}
                    type="text"
                    label="ส่วนสูง"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeheight}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="bloodPressure"
                    component={TextField}
                    type="text"
                    label="ความดันโลหิต"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizebloodpressure}
                    initialValue={defaultdata.treatmentById.bloodPressure}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="ความดันโลหิต"
                    defaultValue={defaultdata.treatmentById.bloodPressure}
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
                    name="bloodPressure"
                    component={TextField}
                    type="text"
                    label="ความดันโลหิต"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizebloodpressure}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="pulseRate"
                    component={TextField}
                    type="text"
                    label="อัตราชีพจร"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizepulserate}
                    initialValue={defaultdata.treatmentById.pulseRate}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="อัตราชีพจร"
                    defaultValue={defaultdata.treatmentById.pulseRate}
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
                    name="pulseRate"
                    component={TextField}
                    type="text"
                    label="อัตราชีพจร"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizepulserate}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="tempurature"
                    component={TextField}
                    type="text"
                    label="อุณหภูมิร่างกาย"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizetempuraturet}
                    initialValue={defaultdata.treatmentById.tempurature}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="อุณหภูมิร่างกาย"
                    defaultValue={defaultdata.treatmentById.tempurature}
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
                    name="tempurature"
                    component={TextField}
                    type="text"
                    label="อุณหภูมิร่างกาย"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizetempuraturet}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="respiratoryRate"
                    component={TextField}
                    type="text"
                    label="อัตราการหายใจ"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizerespiratoryrate}
                    initialValue={defaultdata.treatmentById.respiratoryRate}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="อัตราการหายใจ"
                    defaultValue={defaultdata.treatmentById.respiratoryRate}
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
                    name="respiratoryRate"
                    component={TextField}
                    type="text"
                    label="อัตราการหายใจ"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizerespiratoryrate}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="bmi"
                    component={TextField}
                    type="text"
                    label="ดัชนีมวลกาย"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizebmi}
                    initialValue={defaultdata.treatmentById.bmi}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="ดัชนีมวลกาย"
                    defaultValue={defaultdata.treatmentById.bmi}
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
                    name="bmi"
                    component={TextField}
                    type="text"
                    label="ดัชนีมวลกาย"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizebmi}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "update" ? (
                  <Field
                    fullWidth
                    required
                    name="oxygenSaturation"
                    component={TextField}
                    type="text"
                    label="ออกซิเจนในเลือด"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeoxygensaturation}
                    initialValue={defaultdata.treatmentById.oxygenSaturation}
                  />
                ) : mode === "diagnosis" ? (
                  <MuiTextField
                    id="standard-read-only-input"
                    label="ออกซิเจนในเลือด"
                    defaultValue={defaultdata.treatmentById.oxygenSaturation}
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
                    name="oxygenSaturation"
                    component={TextField}
                    type="text"
                    label="ออกซิเจนในเลือด"
                    variant="outlined"
                    style={{ width: "100%" }}
                    parse={normalizeoxygensaturation}
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "diagnosis" ? (
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <SelectDiagnosis
                      labelId="demo-simple-select-readonly-label"
                      id="demo-simple-select-outlined"
                      value={status}
                      inputProps={{ readOnly: true }}
                    >
                      <MenuItem value={"DIAGNOSIS"}>วินิจฉัย</MenuItem>
                      <MenuItem value={"MEDICINE"}>จ่ายยา</MenuItem>
                      <MenuItem value={"COMPLETE"}>สำเร็จ</MenuItem>
                    </SelectDiagnosis>
                  </FormControl>
                ) : (
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <SelectDiagnosis
                      labelId="demo-simple-select-readonly-label"
                      id="demo-simple-select-outlined"
                      value={status}
                      onChange={handleChangeStatus}
                    >
                      <MenuItem value={"DIAGNOSIS"}>วินิจฉัย</MenuItem>
                      <MenuItem value={"MEDICINE"}>จ่ายยา</MenuItem>
                      <MenuItem value={"COMPLETE"}>สำเร็จ</MenuItem>
                    </SelectDiagnosis>
                  </FormControl>
                )}
              </Grid>
              <Grid item xs={6}>
                {mode === "diagnosis" ? (
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <SelectDiagnosis
                      labelId="demo-simple-select-readonly-label"
                      id="demo-simple-select-outlined"
                      value={form}
                      onChange={handleChangeForm}
                      inputProps={{ readOnly: true }}
                    >
                      <MenuItem value={"General"}>ทั่วไป</MenuItem>
                      <MenuItem value={"Skin"}>ผิวหนัง</MenuItem>
                      <MenuItem value={"Accident"}>อุบัติเหตุ</MenuItem>
                      <MenuItem value={"ContinueAccident"}>
                        อุบัติเหตุต่อเนื่อง
                      </MenuItem>
                      <MenuItem value={"Eyes"}>อาการทางสายตา</MenuItem>
                      <MenuItem value={"Fever"}>ไข้</MenuItem>
                      <MenuItem value={"Diarrhea"}>ท้องร่วง</MenuItem>
                      <MenuItem value={"Pain"}>เจ็บ-ปวด</MenuItem>
                    </SelectDiagnosis>
                  </FormControl>
                ) : (
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <SelectDiagnosis
                      labelId="demo-simple-select-readonly-label"
                      id="demo-simple-select-outlined"
                      value={form}
                      onChange={handleChangeForm}
                    >
                      <MenuItem value={"General"}>ทั่วไป</MenuItem>
                      <MenuItem value={"Skin"}>ผิวหนัง</MenuItem>
                      <MenuItem value={"Accident"}>อุบัติเหตุ</MenuItem>
                      <MenuItem value={"ContinueAccident"}>
                        อุบัติเหตุต่อเนื่อง
                      </MenuItem>
                      <MenuItem value={"Eyes"}>อาการทางสายตา</MenuItem>
                      <MenuItem value={"Fever"}>ไข้</MenuItem>
                      <MenuItem value={"Diarrhea"}>ท้องร่วง</MenuItem>
                      <MenuItem value={"Pain"}>เจ็บ-ปวด</MenuItem>
                    </SelectDiagnosis>
                  </FormControl>
                )}
              </Grid>
              <Grid container={"true"} item sx={12} spacing={2}>
                {form === "General" ? (
                  <GeneralForm mode={mode} defaultdata={defaultdata} />
                ) : form === "Eyes" ? (
                  <EyesForm mode={mode} defaultdata={defaultdata} />
                ) : form === "Skin" ? (
                  <SkinForm mode={mode} defaultdata={defaultdata} />
                ) : form === "Accident" ? (
                  <AccidentForm mode={mode} defaultdata={defaultdata} />
                ) : form === "ContinueAccident" ? (
                  <ConAccidentForm
                    handleChangeAccident={handleChangeAccident}
                    mode={mode}
                    defaultdata={defaultdata}
                    conAccident={conAccident}
                  />
                ) : form === "Fever" ? (
                  <FeverForm mode={mode} defaultdata={defaultdata} />
                ) : form === "Diarrhea" ? (
                  <DiarrheaForm mode={mode} defaultdata={defaultdata} />
                ) : form === "Pain" ? (
                  <PainForm mode={mode} defaultdata={defaultdata} />
                ) : null}
              </Grid>
              <Grid item xs={12}>
                {mode === "update" ? (
                  <FormControlLabel
                    label="ต้องการใบรับรองแพทย์"
                    control={
                      <Field
                        name="medicalCertificate"
                        component={Checkbox}
                        type="checkbox"
                        initialValue={
                          defaultdata.treatmentById.medicalCertificate
                        }
                      />
                    }
                  />
                ) : mode === "diagnosis" ? (
                  <FormControlLabel
                    disabled
                    control={<CheckboxDianosis name="medicalCertificate" />}
                    checked={defaultdata.treatmentById.medicalCertificate}
                    label="ต้องการใบรับรองแพทย์"
                  />
                ) : (
                  <FormControlLabel
                    label="ต้องการใบรับรองแพทย์"
                    control={
                      <Field
                        name="medicalCertificate"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                )}
              </Grid>
              <Grid
                item
                xs={12}
                style={{ marginTop: 16, textAlign: "center", width: "100%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  บันทึกข้อมูล
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </React.Fragment>
  );
};
export default TreatmentForm;
