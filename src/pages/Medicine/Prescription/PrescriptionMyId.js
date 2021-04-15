import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    boxAdmin: {},
    display: "flex",
    "& div.MuiDataGrid-cell": {
      color: "white",
    },
    "& div.MuiDataGrid-colCellTitle": {
      color: "black",
    },
    "& div.MuiToolbar-root": {
      color: "white",
    },
    "& div.MuiTablePagination-actions": {
      color: "white",
    },
    "& div.MuiIconButton-label": {
      color: "white",
    },
    "& div.MuiDataGrid-colCellWrapper": {
      backgroundColor: "white",
    },
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 250, resizable: true },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    resizable: true,
  },
  {
    field: "creatorId",
    headerName: "creator",
    width: 200,
    resizable: true,
  },
  {
    field: "detail",
    headerName: "Detail",
    width: 200,
  },
  {
    field: "dispensary",
    headerName: "DispensaryId",
    width: 200,
    resizable: true,
  },
];

const PrescriptionByID = (props) => {
  const classes = useStyles();
  let navigate = useNavigate();
  const {data} = props
  console.log(data)
  return (
    <React.Fragment className={classes.root}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ marginTop: 20 }}
      >
        <Grid item xs={12}>
          <div style={{ height: 500, width: "100%", backgroundColor: "white" }}>
            <DataGrid
              rows={data.prescription.map((item) => ({
                id: item._id,
                status: item.status,
                creatorId: item.creatorId,
                detail: item.detail,
                dispensary: item.dispensary,
                dispensaryId: item.dispensaryId
              }))}
              columns={columns}
              pagination
              pageSize={10}
              onRowClick={(row) =>
                navigate(`/app/medicine/detail/${row.row.id}`)
              }
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PrescriptionByID;
