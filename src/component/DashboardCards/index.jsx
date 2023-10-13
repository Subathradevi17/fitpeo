import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";

function DashboardCards(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <div
                style={{ backgroundColor: data.backgroundColor }}
                className={classes.dashboardcards}>
                <div className={classes.icon}>{data.icon}</div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <div className={classes.label}>{data.label}</div>
              <div className={classes.price}>{data.price}</div>
              <div className={classes.desc}>
                <div className={classes.descbold}>
                  {data.desc}
                  <span style={{ color: data.descNumColor }}>
                    {data.descNum}
                  </span>
                </div>
                {data.descText}
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCards;
