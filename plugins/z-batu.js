//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let vn = `./mp3/batu.opus`
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    
let ulthohhh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
  conn.sendButton(m.chat, `
Kamu Itu Seperti Bola,Dua-Dua Ingin Ku Sepak🗿(╥﹏╥)
`.trim(), wm, [['Tebakkata',`/tebakkata`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: ulthohhh, body: `Don't Forget TO Follow`, sourceUrl: sig, thumbnail: await (await fetch(thumb)).buffer(),}} 
     }) 
}
handler.customPrefix = /^(🗿|🗿🗿)$/i
handler.command = new RegExp

export default handler
