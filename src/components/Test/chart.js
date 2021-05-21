import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://localhost:8082/api/test/getall")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.score));
          empAge.push(parseInt(dataObj.pin));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "SCORE",
              data: empSal,
              backgroundColor: ["rgb(61, 105, 175)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <>
      <div>
        <div className="bg-gray-100">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              title: { text: "TEST STATISTICS", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dankmemes;
