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
    
let ulthohhh = `๐ Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
  conn.sendButton(m.chat, `
๐ INFO SEWA XUKY BOT ๐
โ Bot Bisa Jaga Group
โ Bot Bisa Kick Yang Kirim Link
โ Bisa Bikin Sticker
โ Bisa Download Tiktok,Ig Dan Lainยฒ
โ Fast Responโก(Jika Tanpa Kendali)
๐ฒLIST HARGA BOT JOIN GC๐ฒ
โ RM 5 = 1 MINGGU
โ RM 10 = 2 MINGGU
โ RM 15 = 1 BULAN
โ๏ธ RM 30 = PERMANENT !!!
๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น
โญ INFO JADI PRIMIUM โญ
โ BISA AKSES FITUR PRIMIUM
โ BISA INV BOT TANPA LIMIT !!!
โ PRIMIUM ADALAH RAJA ๐
๐ฒLIST HARGA JADI PRIMIUM๐ฒ
โ RM 10 = 1 MINGGU
โ RM 20 = 2 MINGGU
โ๏ธ RM 30 = PERMANENT !!!
๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น
๐MENERIMA BAYARAN MELALUI TNG DAN TOPUP!SILAHKAN CHAT #OWNER
๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น๐น
๐ฃORANG LAIN๏ธ: MAHAL BANG !
๐ฟGW BILEK:COBA LIAT BOT LAIN ADA YANG MURAH SEPERTI INI?
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

// ๐ฎ Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
