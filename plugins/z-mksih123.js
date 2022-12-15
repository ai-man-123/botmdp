//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, '\nIyah... sama" kak, Semoga Harimu Menyenangkan :)', botdate, [
    ['⟩ _StatusBot', `.infobot`]
], m)

handler.customPrefix = /^(trimakasih|terimakasih|makasih|mksh|thanks|tq|arigatou|thankyou)$/i
handler.command = new RegExp

export default handler