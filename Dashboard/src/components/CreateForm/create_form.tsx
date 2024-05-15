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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nama Lengkap
                    </label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Full Name..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="noHp" className="block text-sm font-medium text-gray-900">No Telepon
                    </label>
                    <input type="text" name="noHp" id="noHp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Masukkan No Hp..." />
                </div>
                <div className="mb-5">
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-900">Alamat
                    </label>
                    <input type="text" name="alamat" id="alamat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Full Alamat..." />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan</button>
            </form>
        </div>

    )
}

export default FormTambah;