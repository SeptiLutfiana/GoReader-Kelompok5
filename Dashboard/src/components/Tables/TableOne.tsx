import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
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

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Leaderboard
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {/* <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-2 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-4 p-2.5 xl:p-6">
              {/* <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div> */}
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            {/* <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div> */}

            <div className="hidden items-center p-4.5 sm:flex xl:p-7">
              <p className="text-black dark:text-white">{brand.sales} kWh</p>
            </div>

            {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
