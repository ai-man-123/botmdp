import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "πPilih Umur Anda Disini !",
	rows: [
	    {title: "π΄Umur Spontan", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "π΄ββ οΈD E W A S A",
	rows: [
	    {title: "πΈ30β’ Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "π29β’ Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "πΈ28β’ Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "π27β’ Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "πΈ26β’ Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "π25β’ Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "πΈ24β’ Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "π23β’ Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "πΈ22β’ Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "π21β’ Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "π΄ββ οΈP E L A J A R",
	rows: [
	    {title: "πΈ20β’ Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "π19β’ Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "πΈ18β’ Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "π17β’ Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "πΈ16β’ Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "π15β’ Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "πΈ14β’ Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "π13β’ Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "πΈ12β’ Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "π11β’ Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "πΈ10β’ Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "π9β’ Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `ββΊTerimah Kasih Sudah Bagitau Informasi Jantina Anda!\nSekarang Silahkan Pilih Umur Anda!...`,
  footer: wm,
  title: "β’ββββγ Step Ke 2 γβββββ’",
  buttonText: "πPilih Umur Andaπ",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `π?Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Batas 30 tahun untuk berteman dengan bot!!'
  if (age < 5) throw 'Batas 5 tahun untuk berteman dengan bot!!'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ββββ γ *SUKSES MENDAFTAR* γβββ
  π΄ββ οΈ SEKARANG ANDA BISA MENGGUNAKAN BOT !
  β­ BERIKUT MAKLUMAT ANDA :
β­ββγ *α΄sα΄Κs* γ
ββΈ *sα΄α΄α΄α΄s:* βοΈ sα΄α΄α΄α΄ss?α΄Κ
ββΈ *Ι΄α΄α΄α΄:* ${name}
ββΈ *α΄Ι’α΄:* ${age} Κα΄α΄Κs
ββΈ *sΙ΄:* ${sn}
β°ββββββββββΰΉ
βοΈSILAHKAN KETIK BUTTON DIBAWAH UNTUK MEMBACA PERATURAN BOT !
`
  let buttonMessage= {
'document':{'url':sig},
'mimetype':global.ddocx,
'fileName':'β’βγ Berhasil Terdaftar γββ’',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch(imagebot)).buffer(),
'sourceUrl':sig}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.rules','buttonText':{'displayText':'π΄ R U L E S ββ οΈ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
