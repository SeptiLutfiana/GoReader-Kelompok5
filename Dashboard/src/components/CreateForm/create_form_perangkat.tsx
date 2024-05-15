import React from 'react';
const FormTambah = () => {
    return(
        <div>
            <form action="">
            <div className="mb-5">
                    <label htmlFor="id" className="block text-sm font-medium text-gray-900">ID Pelanggan
                    </label>
                    <input type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Masukkan ID..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="seri" className="block text-sm font-medium text-gray-900">Nama Lengkap
                    </label>
                    <input type="text" name="seri" id="seri" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Masukkan Nomor Seri..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama Lengkap
                    </label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="pilih nama pelanggan..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="lokasi" className="block text-sm font-medium text-gray-900">No Telepon
                    </label>
                    <input type="text" name="lokasi" id="lokasi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Masukkan Lokasi Pemasangan..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-900">Alamat
                    </label>
                    <input type="text" name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="masukkan status perangkat..." />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan</button>
            </form>
        </div>

    )
}

export default FormTambah;