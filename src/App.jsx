import { useState, useEffect, lazy } from "react";
//import Chart from "react-apexcharts";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

function App() {
const Chart = lazy(() => import('react-apexcharts'), 
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./src/sample-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const series = [
    {
      data: data.map((item) => {
       // return { x: item.Date, y: item.Revenue.toFixed(2) };
   return {x: "05/09/2022", y: "$600.56" }   
}),
    },
  ];

  var option1 = {
    annotations: {
      yaxis: [
        {
          y: 200,
          borderColor: "blue",
          fillColor: "#FEB019",
          label: {
            text: "This is a test",
          },
        },
        {
          y: 700,
          y2: 800,
          borderColor: "violet",
          fillColor: "#FEB019",
          label: {
            text: "This is a test 2",
          },
        },
        {
          y: 500,
          borderColor: "blue",
          fillColor: "#FEB019",
          label: {
            text: "This is a test 3",
          },
        },
      ],
    },
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },

    colors: ["#546E7A"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
  };

  var option2 = {
    chart: {
      id: "chart1",
      height: 130,
      type: "area",
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
      },
    },
    colors: ["#008FFB"],
    fill: {
      // type: "gradient",
      // gradient: {
      //   opacityFrom: 0.91,
      //   opacityTo: 0.1,
      // },
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="chart1">
        <Chart
          options={option1}
          series={series}
          width="90%"
          height="300"
        />
      </div>
      <div className="chart2">
        <Chart
          options={option2}
          series={series}
          width="90%"
          height="100"
        />
      </div>
      <div className="text">Created by Leonel M. Caroc</div>
    </div>
  );
}

export default App;
