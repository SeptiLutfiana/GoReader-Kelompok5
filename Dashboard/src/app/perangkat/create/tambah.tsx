"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import FormTambah from "@/components/CreateForm/create_form_perangkat";
export const metadata: Metadata = {
  title: "Halaman Tambah Pelanggan",
};
const CreatePelanggan = () => {
    return(
        <DefaultLayout>
            <div className="mx-auto max-w-242.5"></div>
            <div className="max-w-md mx-auto mt-5">
                <h1 className="text-2xl text-center mb-2">Tambah Perangkat</h1>
                <FormTambah/>
        </div>
        </DefaultLayout>
    )
}
export default CreatePelanggan;