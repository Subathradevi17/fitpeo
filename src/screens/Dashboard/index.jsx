import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Grid } from "@mui/material";
import DashboardCards from "../../component/DashboardCards";
import { v4 as uuidv4 } from "uuid";
import {
  AiOutlineDollar,
  BiBookContent,
  BsHandbag,
  PiFiles,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "../../utils/iconImports";
import MonthlyBarChart from "../../component/Barchart";
import Piechart from "../../component/Piechart";
import Tables from "../../component/Table";
function Dashboard(props) {
  const classes = useStyles();
  const sampleData = [
    {
      icon: <AiOutlineDollar color='#00a745' />,
      price: "$198k",
      label: "Earning",
      desc: <AiOutlineArrowUp color='#60cb91' />,
      descNum: "37.8%",
      descNumColor: "#60cb91",
      descText: " this month",
      backgroundColor: "#dbffeb",
    },
    {
      icon: <PiFiles color='#a101ff' />,
      price: "$2.4k",
      label: "Orders",
      desc: <AiOutlineArrowDown color='#d10c51' />,
      descNum: "2%",
      descNumColor: "#d10c51",
      descText: " this month",
      backgroundColor: "#e7dbff",
    },
    {
      icon: <BiBookContent color='#0756bf' />,
      price: "$2.4k",
      label: "Balance",
      desc: <AiOutlineArrowDown color='#d10c51' />,
      descNum: "2%",
      descNumColor: "#d10c51",
      descText: " this month",
      backgroundColor: "#ccf2ff",
    },
    {
      icon: <BsHandbag color='#d8000e' />,
      price: "$89k",
      label: "Total Sales",
      desc: <AiOutlineArrowUp color='#60cb91' />,
      descNum: "11%",
      descNumColor: "#60cb91",
      descText: " this week",
      backgroundColor: "#ffc1e5",
    },
  ];
  const columns = ["Name", "Company", "City", "State"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className={classes.dashboardCardsContainer}>
        <Grid container spacing={2}>
          {sampleData.map((data) => (
            <Grid key={uuidv4()} item xs={12} sm={3}>
              <DashboardCards data={data} />
            </Grid>
          ))}
        </Grid>

        <Grid container marginTop={1} spacing={2}>
          <Grid item xs={12} sm={8}>
            <Box boxShadow={3} p={3} bgcolor='white'>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h4 style={{ margin: 4 }}>Overview</h4>
                  <h6 style={{ margin: 4, fontWeight: "lighter" }}>
                    Monthly Earning
                  </h6>
                </div>
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  style={{ border: "none", backgroundColor: "#f5f6f8" }}>
                  <option value='option1'>Quarterly</option>
                  <option value='option2'>Halfyearly</option>
                  <option value='option3'>Annual</option>
                </select>
              </div>

              <MonthlyBarChart />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box boxShadow={3} p={2.5} bgcolor='white'>
              <h4 style={{ margin: 4 }}>Customers</h4>
              <h6 style={{ margin: 4, fontWeight: "lighter" }}>
                Customers that buy products
              </h6>

              <Piechart />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ overflow: "auto", maxWidth: "400px" }}>
            <Box boxShadow={3} p={2.5} bgcolor='white'>
              <h3>Product Sell</h3>
              <Tables />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
