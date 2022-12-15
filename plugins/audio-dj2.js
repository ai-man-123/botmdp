//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/dj2.opus'
conn.sendFile(m.chat, vn, 'dj2.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['dj2']
handler.tags = ['sound']
handler.command = /^(dj2)$/i
handler.fail = null
handler.exp = 100
export default handler