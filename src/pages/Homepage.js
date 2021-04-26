import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import pg from '../img/pg.jpg'
import pt from '../img/pt.jpg'
import tm from '../img/tm.jpg'
import da from '../img/da.jpg'
import mc from '../img/mc.jpg'
import pc from '../img/pc.jpg'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { useSession } from "../context/auth";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  boxAdmin: {},
}));

const Homepage = () => {
  const classes = useStyles();
  const {user} = useSession()
  return (
    <React.Fragment className={classes.root}>
      <Box className={classes.boxAdmin}>
        <Typography variant="h5" paragraph style={{ fontWeight: "bolder" }}>
          Clinic Treatment History System
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <Link to={'/app/patients/createpatients'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pt}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    เพิ่มข้อมูลผู้ป่วย
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    เพิ่มผู้ป่วยใหม่เข้าสู่ระบบ
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
          <Link to={'/app/treatment'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tm}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ประวัติการรักษา
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ดูประวัติการรักษาทั้งหมด
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
          <Link to={'/app/medicine'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pc}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ใบสั่งยา
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    รายการใบสั่งยา
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to={'/app/medicine/drugstore'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={mc}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    คลังยา
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ดูคลังยาทั้งหมด
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
          <Link to={'/app/diagnosis'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={da}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ผู้ป่วยวินิฉัย
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    รายชื่อผู้ป่วยที่รอการวินิจฉัย
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
          <Link to={'/app/admin'}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    สร้างผู้ใช้งานใหม่
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    สำหรับส่วนของ Admin เพื่อสร้างผู้ใช้งาน
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Homepage;
