let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 Buenos Días / Tardes / Noches... 🤗🤗:* ${pesan}`
let teks = `*⺀🥰 𝐕𝐁 𝐍𝐈𝐊𝐊𝐈 𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐀 𝐏𝐑𝐄𝐂𝐈𝐎𝐒𝐎𝐒 🫶🥰, 𝐍𝐎 𝐒𝐄𝐀𝐍 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀𝐒⺀*\n\n🟩 ${oi}\n\n🟩 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `✼🌟 @${mem.id.split('@')[0]}\n`}
teks += `└𝐏𝐫𝐨𝐩𝐢𝐞𝐝𝐚𝐝 𝐝𝐞 𝐍𝐢𝐤𝐤𝐢 💞`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
