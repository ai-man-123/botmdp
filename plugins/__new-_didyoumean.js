//Jangan Di Hapus!

//Buatan I'm Cuky
//https://Instagram.com/ft_xjal



import didyoumean from 'didyoumean'

export async function before(m, { match }) {
	let usedPrefix;
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
	 if (mean) await this.sendButton(m.chat, `\n   mungkin maksud anda *${usedPrefix + mean}*?\n`, wm, [['BENAR✅️', usedPrefix + mean + ` ${text}`], ['SALAH❌', usedPrefix + '?']], m)
	}
}
