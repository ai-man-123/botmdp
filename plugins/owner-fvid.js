//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;
const anu = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "17608914335-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"Haii Kak",
                 "h": `Hmm`,
                 'seconds': '182', 
                 'caption': botdate,
                 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                        }
                       }
	                  }
conn.sendMessage(m.chat, { text: wm }, { quoted: anu })
}



handler.help = ['vid']

handler.tags = ['owner']

handler.command = /^vid$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true

export default handler
