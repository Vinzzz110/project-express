/**Ini Adalah File Utama
 * Dimana Ada Proses Menjalankan Server Backend
 */

/**Memanggil Library Express */
import express, { Request, Response, request } from "express"
import { ValidateCube } from "./middleware/ValidateCube"
import routerBangunDatar from "./router/bangunDatar"
/**Buat Wadah Untuk Inisiasi Express */
const app = express()

/**Mendefinisikan Port Berjalannya Server */
const PORT = 2000

/** Allow To Read JSON as Request */
app.use(express.json())

/**Proses Pertama Untuk Handle Request */
app.get(`/serena`, (request: Request, response: Response) => {
    /**
     * Ini Adalah Proses Handle Request dengan
     * Url/Address: http://localhost:8000/serena
     * Method: GET
     */
    /**Memberi Response */
    return response.status(200).json({
        message: `Hello Serena Anaknya Bu Siana`
    })
})



/** Read a Query Request */
app.get(`/moklet`,(request: Request, response: Response) => {
    /** Asumsikan Data Yang Dikirim 
     * Adalah Nama Dan Umur
    */
   let nama: any = request.query.nama?.toString()
   let umur: any = request.query.umur?.toString()

   let message: string = `My name is ${nama} And i'm ${umur} Years Old`
   return response.status(200).json(message)
})

/** Read Data Request From Parameter */
app.get(`/telkom/:nama/:gender`,(request: Request, response:Response) => {
    let nama:string = request.params.nama
    let gender:string = request.params.gender
    let message: string = `My Name Is ${nama} and im a ${gender}`
    return response.status(200).json(message)
})

/** Read a Request From Body */
app.post(`/moklet`,(request: Request, response: Response) => { 
    /** Asumsikan Data Yang Dikirim Adalah
     * Panjang Dan Besar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luasPersegiPanjang: number = panjang * lebar
    let message = `Luas Persegi Panjang Adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})

/** buatlah sebuah request untuk mengonversi
 *  suhu celcius ke fahrenheit, kelvin, dan reamur
 *  menggunakan request parameter
 *  exp: http://localhost:8000/celcius/80
 *  (80 adalah nilai celciusnya)
 *  response data ->
 * {
 * reamur: ?, fahrenheti ?, kelvin:
 * }
 */

/** Create Request For Count Volume Of Block */
app.post(`/balok`, ValidateCube ,(request: Request, response: Response) => {
    /** Read Panjang, Lebar, Tinggi */
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})


/** Register Route OF Bangun Datar*/
app.use(routerBangunDatar)

/** Run Server */
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
    
})