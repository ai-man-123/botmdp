let handler = async (m, { conn, usedprefix, command }) => {
await m.reply(global.wait)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, cptnya, wm, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['🔄 Again', `.${command}`]], m)
}

handler.help = ['its-so-stupid']
handler.tags = ['maker']

handler.command = /^(its-so-stupid)$/i
handler.register = true
handler.limit = true

export default handler