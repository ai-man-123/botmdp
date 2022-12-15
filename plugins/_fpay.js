//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
let handler  = async (m, { conn }) => {
 await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: wm,
  currencyCodeIso4217: 'USD',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: thumb
}}}}, {})
}

handler.command = /^fpay$/i
export default handler