import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazeDevID/results/master/random/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.male)).buffer()
  await conn.sendFile(m.chat, cowi, '', 'Versi Lelaki 🤍\nInstagram.com/ft_xjal', m)
  let ciwi = await(await fetch(cita.female)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'Versi Perempuan ❤\nInstagram.com/ft_xjal️', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['anime']
handler.command = /^(pp(cp|couple))$/i
handler.register = true 
handler.limit = true

export default handler 
