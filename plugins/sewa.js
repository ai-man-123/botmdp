//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let vn = `./mp3/sewa.opus`
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    
let ulthohhh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
  conn.sendButton(m.chat, `
🌟 INFO SEWA XUKY BOT 🌟
➖ Bot Bisa Jaga Group
➖ Bot Bisa Kick Yang Kirim Link
➖ Bisa Bikin Sticker
➖ Bisa Download Tiktok,Ig Dan Lain²
➖ Fast Respon⚡(Jika Tanpa Kendali)
💲LIST HARGA BOT JOIN GC💲
➖ RM 5 = 1 MINGGU
➖ RM 10 = 2 MINGGU
➖ RM 15 = 1 BULAN
❇️ RM 30 = PERMANENT !!!
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
⭐ INFO JADI PRIMIUM ⭐
➖ BISA AKSES FITUR PRIMIUM
➖ BISA INV BOT TANPA LIMIT !!!
➖ PRIMIUM ADALAH RAJA 👑
💲LIST HARGA JADI PRIMIUM💲
➖ RM 10 = 1 MINGGU
➖ RM 20 = 2 MINGGU
❇️ RM 30 = PERMANENT !!!
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🍎MENERIMA BAYARAN MELALUI TNG DAN TOPUP!SILAHKAN CHAT #OWNER
🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
🗣ORANG LAIN️: MAHAL BANG !
🗿GW BILEK:COBA LIAT BOT LAIN ADA YANG MURAH SEPERTI INI?
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: ulthohhh, body: `Don't Forget TO Follow`, sourceUrl: sig, thumbnail: await (await fetch(thumb)).buffer(),}} 
     }) 
}
handler.command = /^(sewa|sewabot)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
