import  express  from "express"
import { luaspermukaanBalok, luaspermukaanBola, luaspermukaanKubus, luaspermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang"
const app = express()

/** Allow Read a Body */
app.use(express.json())

/** Fungsi Use() Digunakan 
 * Untuk Menerapkan Sebuah Fungsi
 * Pada Object Express Fungsi TSB Akan
 * Otomatis Dijalankan
 */

app.post(/tabung/volume, volumeTabung)
app.post(/tabung/luaspermukaan, luaspermukaanTabung)
app.post(/kubus/volume, volumeKubus)
app.post(/kubus/luaspermukaan, luaspermukaanKubus)
app.post(/balok/volume, volumeBalok)
app.post(/balok/luaspermukaan, luaspermukaanBalok)
app.post(/bola/volume, volumeBola)
app.post(/bola/luaspermukaan,luaspermukaanBola)

export default app