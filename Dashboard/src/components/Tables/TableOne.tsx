import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const chartOptions: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

const initialData = [
  {
    id: 1,
    deviceName: "Device A",
    time: "10:00 AM",
    date: "2024-06-09",
    image: "/images/device/device-01.svg",
    extractionResult: "Result A",
  },
  {
    id: 2,
    deviceName: "Device B",
    time: "11:00 AM",
    date: "2024-06-09",
    image: "/images/device/device-02.svg",
    extractionResult: "Result B",
  },
];

const brandData = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "JANUARI",
    visitors: 3.5,
    revenues: "5,768",
    sales: 234,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "FEBRUARI",
    visitors: 2.2,
    revenues: "4,635",
    sales: 234,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "MARET",
    visitors: 2.1,
    revenues: "4,290",
    sales: 234,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "APRIL",
    visitors: 1.5,
    revenues: "3,580",
    sales: 234,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "MEI",
    visitors: 3.5,
    revenues: "6,768",
    sales: 234,
    conversion: 4.2,
  },
];

const ChartAndTable: React.FC = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const [tableData, setTableData] = useState(initialData);

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleAdd = () => {
    const newItem = {
      id: tableData.length + 1,
      deviceName: `Device ${String.fromCharCode(65 + tableData.length)}`,
      time: "12:00 PM",
      date: "2024-06-09",
      image: "/images/device/device-03.svg",
      extractionResult: `Result ${String.fromCharCode(65 + tableData.length)}`,
    };
    setTableData([...tableData, newItem]);
  };

  return (
    <div>
      <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Device Table
        </h4>
        <div className="mb-4">
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">
            Add Device
          </button>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">ID</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Nama Device</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Jam</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Tanggal</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Gambar</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Hasil Ekstraksi</h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
            </div>
          </div>

          {tableData.map((item, index) => (
            <div
              className={`grid grid-cols-6 sm:grid-cols-7 ${
                index === tableData.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"
              }`}
              key={item.id}
            >
              <div className="p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.id}</p>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <p className="text-black dark:text-white">{item.deviceName}</p>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <p className="text-black dark:text-white">{item.time}</p>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <p className="text-black dark:text-white">{item.date}</p>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <Image src={item.image} alt="Device" width={40} height={40} />
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <p className="text-black dark:text-white">{item.extractionResult}</p>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="px-2 py-1 mr-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-primary">Total Revenue</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
            <div className="flex min-w-47.5">
              <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-secondary">Total Sales</p>
                <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                Day
              </button>
              <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Week
              </button>
              <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                Month
              </button>
            </div>
          </div>
        </div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={chartOptions}
            series={chartState.series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartAndTable;
