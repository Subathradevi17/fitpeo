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
import Table from "../../component/Table";
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
  const data = [
    {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      address: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
    },
    {
      name: {
        firstName: "Jane",
        lastName: "Doe",
      },
      address: "769 Dominic Grove",
      city: "Columbus",
      state: "Ohio",
    },
    {
      name: {
        firstName: "Joe",
        lastName: "Doe",
      },
      address: "566 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      name: {
        firstName: "Kevin",
        lastName: "Vandy",
      },
      address: "722 Emie Stream",
      city: "Lincoln",
      state: "Nebraska",
    },
    {
      name: {
        firstName: "Joshua",
        lastName: "Rolluffs",
      },
      address: "32188 Larkin Turnpike",
      city: "Charleston",
      state: "South Carolina",
    },
  ];
  const columns = [
    {
      accessorKey: "name.firstName", //access nested data with dot notation
      header: "First Name",
      size: 150,
    },
    {
      accessorKey: "name.lastName",
      header: "Last Name",
      size: 150,
    },
    {
      accessorKey: "address", //normal accessorKey
      header: "Address",
      size: 200,
    },
    {
      accessorKey: "city",
      header: "City",
      size: 150,
    },
    {
      accessorKey: "state",
      header: "State",
      size: 150,
    },
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
          <Grid item xs={12} sm={12}>
            <Table title={"Product Sell"} columns={columns} data={data} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
