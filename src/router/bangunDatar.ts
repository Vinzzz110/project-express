import  express  from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
import { volumeTabung } from "../controller/bangunRuang"
const app = express()

/** Allow Read a Body */
app.use(express.json())

/** Fungsi Use() Digunakan 
 * Untuk Menerapkan Sebuah Fungsi
 * Pada Object Express Fungsi TSB Akan
 * Otomatis Dijalankan
 */

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/luas`, luasPersegi)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/persegiPanjang/luas`, luasPersegiPanjang)
app.post(`/persegiPanjang/keliling`, kelilingPersegiPanjang)
app.post(`/segitiga/luas`, luasSegitiga)
app.post(`/tabung/volume`,volumeTabung)


export default app