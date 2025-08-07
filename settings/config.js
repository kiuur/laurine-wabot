const fs = require('fs')

const config = {
    owner: "-",
    botNumber: "-",
    setPair: "K1UU1212",
    thumbUrl: "https://github.com/kiuur.png",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "laurine-wb",
        packname: 'laurine-wabot',
        description: "this script was created by KyuuRzy",
        author: 'https://www.kyuurzy.tech',
        footer: "kyuurzy-wb`"
    },
    newsletter: {
        name: "kyuurzy-wb",
        id: "120363301416835342@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@kyuurzy",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/kyuucode",
        ChannelWA: "https://whatsapp.com/channel/0029VaarMc8DZ4Lc33QM3q3N"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
