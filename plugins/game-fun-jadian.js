let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`Ada Yang Baru Pacaran Ni :\n${toM(a)} ❤️ ${toM(b)}\nYang Jadian Selamat Ya🎂💝`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian']
handler.tags = ['game']
handler.command = ['jadian']
handler.register = true
handler.group = true

export default handler