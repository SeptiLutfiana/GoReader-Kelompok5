import { table } from "console";
import { EditButton, DeleteButton } from "@/components/Button/button_perangkat";
const ContactTabel = () => {
    return(
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50" >
                <tr>
                    <th className="py-3 px-6">No</th>
                    <th className="py-3 px-6">Nama Perangkat</th>
                    <th className="py-3 px-6">Nama Pelanggan</th>
                    <th className="py-3 px-6">Nomor Seri</th>
                    <th className="py-3 px-6">Lokasi</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-3 px-6">1</td>
                    <td className="py-3 px-6">LW-Septi01</td>
                    <td className="py-3 px-6">Septi Lutfi</td>
                    <td className="py-3 px-6">085TY7</td>
                    <td className="py-3 px-6">Lowokwaru</td>
                    <td className="py-3 px-6">Aktif</td>
                    <td className="flex justify-center gap-1 py-3">
                        <EditButton/>
                        <DeleteButton/>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="py-3 px-6">2</td>
                    <td className="py-3 px-6">LW-Sara02</td>
                    <td className="py-3 px-6">Siti Maisaroh</td>
                    <td className="py-3 px-6">095DT7</td>
                    <td className="py-3 px-6">Lowokwaru</td>
                    <td className="py-3 px-6">Aktif</td>
                    <td className="flex justify-center gap-1 py-3">
                    <EditButton/>
                     <DeleteButton/>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="py-3 px-6">3</td>
                    <td className="py-3 px-6">LW-Arya03</td>
                    <td className="py-3 px-6">Arya Wicaksana</td>
                    <td className="py-3 px-6">125TY7</td>
                    <td className="py-3 px-6">Lowokwaru</td>
                    <td className="py-3 px-6">Aktif</td>
                    <td className="flex justify-center gap-1 py-3">
                        <EditButton/>
                        <DeleteButton/>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="py-3 px-6">4</td>
                    <td className="py-3 px-6">LW-Tito04</td>
                    <td className="py-3 px-6">Ahmad Tito</td>
                    <td className="py-3 px-6">098VY7</td>
                    <td className="py-3 px-6">Lowokwaru</td>
                    <td className="py-3 px-6">Aktif</td>
                    <td className="flex justify-center gap-1 py-3">
                        <EditButton/>
                        <DeleteButton/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default ContactTabel;