//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/dj1.opus'
conn.sendFile(m.chat, vn, 'dj1.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['dj1']
handler.tags = ['sound']
handler.command = /^(dj1)$/i
handler.fail = null
handler.exp = 100
export default handler