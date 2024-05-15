import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import ContactTabel from "./tabel";
import Search from "@/components/search/search";
import { CreateButton } from "@/components/Button/button";
export const metadata: Metadata = {
  title: "Halaman Manajemen Pelanggan",
};

const Pelanggan = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Manajemen Pelanggan" />
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
            <Search/>
            <CreateButton/>
          </div>
          <ContactTabel />
        </div>
      </div>
      </div>
    </DefaultLayout>
  );
};

export default Pelanggan;
