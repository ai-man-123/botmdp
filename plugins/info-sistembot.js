let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     👆Sistem Bot(^_^メ)
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *BERJALAN DENGAN BAIK ⟩ _* ', 'status@broadcast')
}
handler.help = ['botstats']
handler.tags = ['info']
handler.command = /^(botstats|statsbot|infobot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 