import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
let vn = `./mp3/donasi.opus`
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    
let ulthohhh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
  conn.sendButton(m.chat, `
╭───━━─╼❑〔 *Donasi* 〕❑╾─━━──
│ ☂︎ Tidak Perlu Donasi
│ ☂︎ Tapi Hanya Lerlu 
│ ☂︎ Follow Ig Owner
│ ☂︎ Instagram.com/ft_xjal
╰──━━━─❍
╭───━━─╼❑〔 *NOTE* 〕❑╾─━━──
│ _Bantu Follow Ig Owner_
│ _Biar Semangat Bikin Bot_
│ _Makasih Orang Baik_
╰──━━━─❍
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: ulthohhh, body: `Don't Forget TO Follow`, sourceUrl: sig, thumbnail: await (await fetch(thumb)).buffer(),}} 
     }) 
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
