//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal
import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `๐Hai, ${ucapan()}

${user.banned ? '๐ฎMaaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `๐ฌ Ada yg bisa ${this.user.name} bantu?\nInstagram.com/ft_xjal`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '๐ฎNote: Jangan spam bot nya', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ๐"
    if (time >= 4) {
        res = "Selamat pagi ๐"
    }
    if (time > 10) {
        res = "Selamat siang โ๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore ๐"
    }
    if (time >= 18) {
        res = "Jangan Lupa Turu ๐"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)