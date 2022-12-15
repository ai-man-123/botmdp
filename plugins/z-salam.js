//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/710eeb61e877c5d4cf68d.jpg")
await conn.sendButton(m.chat, `Waalaikumsalam Warahmatullahi Wabarakatuh kak ${name}\n\nInstagram.com/ft_xjal*`,wm + '\n\n' + botdate, giflogo2, [['Makasih Bot😼🖤','Tq']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: sig,
                        mediaType: 2,
                        description: 'anu',
                        title: global.titlebot,
                        body: wm2,          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: sig
                      }}
})
}
handler.customPrefix = /^(assalamualaikum|asalamualaikum|salam|slm|aslm|Assalamualaikum|Asalamualaikum|Salam|Slm|Aslm)$/i
handler.command = new RegExp

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
