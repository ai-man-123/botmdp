/*UDAH DIEMIN AJA, BIAR NGARAH KE WEB NYA. 
DARI PADA EROR 🗿*/
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

  let pp = 'https://tinyurl.com/24u64tky'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '🗿',
  address: 'Ketik Emoji Diatas',
  url: 'https://telegra.ph/Rules-Xuky-Bot-12-10',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(thumb)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^rules$/
handler.owner = false
export default handler
