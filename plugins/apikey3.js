let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner Selalu menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• No Telp
🏴‍☠️ Instagram.com/ft_xjal`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *TENTANG OWNER* ${htka}
${htjava} *💌 Nama* : ${nameown}
${htjava} *⭐ Umur*  : Kamu Nanya?
${htjava} *📌 Full Intro*   : https://telegra.ph/-11-11-1288

${htki} *TENTANG BOT* ${htka}
${htjava} *✉️ Nama Bot* : Xuky Bot
${htjava} *🎂 Tarikh Diciptakan* : 2/11/2022
${htjava} *🌟 Diciptakan Menggunakan *: Termux

${htki} *SOCIAL OWNER* ${htka}
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐣 Fav : Kamu Fav Ku😼🖤
•·––––––––––––––––––––––––––·•
`
  let teks = 'Klik Di Sini!'
const sections = [
   {
	title: `${htjava} TENTANG OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Siapa Owner ?", rowId: ".owner nomor"},
	{title: "🎨 • Tentang Owner", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi Ke Owner", rowId: ".donasi"},
	{title: "🔖 • Sewa Bot", rowId: ".sewa"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *INFO OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['🌹 Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`🌹 Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
