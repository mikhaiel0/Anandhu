//═══════[© 2022 𝐉𝐈𝐌𝐁𝐑𝐔 𝐯3.]════════\\

// 𝕄𝕀𝕂ℍ𝔸𝕀𝔼𝕃 𝕆𝔽𝔽𝕀ℂ𝔸𝕃

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['917736881580'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['917736881580'] //another owner number
global.premium = ['917736881580'] //premium number
global.pengguna = 'ᴀɴᴀɴᴀᴅʜᴜ' //username
global.botnma = 'ᴀᴄʜᴜ' //bot name
global.ownernma = 'ᴀɴᴀɴᴀᴅʜᴜ' //owner name
global.packname = 'ᴀᴄʜᴜ' //sticker package name
global.author = 'ʙʏ ᴀɴᴀɴᴀᴅʜᴜ' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 1000 //free user limit
}
global.thumb = fs.readFileSync('./Media/Jimbru.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
