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
	      participant: `999999999@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "601160936508-1610340626@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
conn.sendMessage(m.chat,{ text: wm}, {quoted: anu})
}


handler.help = ['tod']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^tod|fvn$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler
