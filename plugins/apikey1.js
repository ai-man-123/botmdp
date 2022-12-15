import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let vn = `./mp3/gcbot.opus`
  const ultah = new Date(ultahown)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    
let ulthohhh = `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`
let pp = await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group`))
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group  :
https://chat.whatsapp.com/HZWwotLjI0B4kaiKVxkmco

🍀 Instagram :
https://Instagram.com/ft_xjal
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⭐Owner⭐','.owner']],m)
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: ulthohhh, body: `Don't Forget TO Follow`, sourceUrl: sig, thumbnail: await (await fetch(thumb)).buffer(),}} 
     }) 
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
