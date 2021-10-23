exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╭┈─  ꕀ  ──  ꕀ  ──  ꕀ   ─┈  ꕀ   ╮
              「 LINK GROUP BOT 」
https://chat.whatsapp.com/IlcIDu7sDLbL9PGGQJ5TlX
╰┈─  ꕀ  ──  ꕀ  ──  ꕀ   ─┈  ꕀ   ╯
─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇─̇─̇࿉۟࣪࣪─̇╮
˗ˏˋ˖🐰*${botName}* ָ ⋆ 𖥻
▬▭▬▭▬▭▬▭▬▭▬▭▬ 
˗ˏˋ˖🧺 *Creator : ${ownerName}*
˗ˏˋ˖🧺 *Lib : Baileys V.3.5.8*
˗ˏˋ˖🧺 *Total Fitur : 400+*
˗ˏˋ˖🧺 *Total Pengguna : ${pendaftar.length}*
˗ˏˋ˖🧺 *Tanggal : ${tanggal}*
˗ˏˋ˖🧺 *Pukul : ${jam}*
˗ˏˋ˖🧺 *Runtime Bot*
˗ˏˋ˖🧺 *${runtime}*
˗ˏˋ˖🧺 *Prefix : 「 ${prefix} 」*
▬▭▬▭▬▭▬▭▬▭▬▭▬ 
˗ˏˋ˖🐰*USER INFO* ָ ⋆ 𖥻
⌗ *Name* : *${pushname}*
⌗ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
⌗ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
⌗ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
⌗ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
 𖦆 🧺 《 *MENU* 》 🧺 𖦆 
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
🐭 𖦆 ۫  *${prefix}stickermenu*
🐰 𖦆 ۫  *${prefix}creatormenu*
🐭 𖦆 ۫  *${prefix}groupmenu*
🐰 𖦆 ۫  *${prefix}sistemmenu*
🐭 𖦆 ۫  *${prefix}gabutmenu*
🐰 𖦆 ۫  *${prefix}gamemenu*
🐭 𖦆 ۫  *${prefix}downloadmenu*
🐰 𖦆 ۫  *${prefix}searchmenu*
🐭 𖦆 ۫  *${prefix}stalkmenu*
🐰 𖦆 ۫  *${prefix}animemenu*
🐰 𖦆 ۫  *${prefix}nsfwmenu*
🐰 𖦆 ۫  *${prefix}toolsmenu*
🐰 𖦆 ۫  *${prefix}makermenu*
🐰 𖦆 ۫  *${prefix}storagemenu*
🐰 𖦆 ۫  *${prefix}othermenu*
🐰 𖦆 ۫  *${prefix}newupdate*

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
╞═══ 《 *THANKS TO* 》 ═══
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
🐰 𖦆 ۫  *Xinz-Team*
🐰 𖦆 ۫  *Aqulzz*
🐰 𖦆 ۫  *Nafizz*
🐰 𖦆 ۫  *Y-DhyZx*
🐰 𖦆 ۫  *Ramlan ID*
🐰 𖦆 ۫  *X-MrG3P5*
🐰 𖦆 ۫  *Nanda*
🐰 𖦆 ۫  *Aulia Rahman*
🐰 𖦆 ۫  *Adiwajshing/Baileys*
🐰 𖦆𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .🐰 𖦆`
}



exports.stickerMenu = (prefix, botName) => {
          return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 STICKER MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}sticker*
˗ˏˋ🧺 ៵ ࣪  *${prefix}stickergif*
˗ˏˋ🧺 ៵ ࣪  *${prefix}swm*
˗ˏˋ🧺 ៵ ࣪  *${prefix}take*
˗ˏˋ🧺 ៵ ࣪  *${prefix}toimg*
˗ˏˋ🧺 ៵ ࣪  *${prefix}tovideo*
˗ˏˋ🧺 ៵ ࣪  *${prefix}attp*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}



exports.ownerMenu = (prefix, botName) => {
    return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 CREATOR MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}addprem*
˗ˏˋ🧺 ៵ ࣪  *${prefix}delprem*
˗ˏˋ🧺 ៵ ࣪  *${prefix}ban*
˗ˏˋ🧺 ៵ ࣪  *${prefix}unban*
˗ˏˋ🧺 ៵ ࣪  *${prefix}join*
˗ˏˋ🧺 ៵ ࣪  *${prefix}addbaword*
˗ˏˋ🧺 ៵ ࣪  *${prefix}delbaword*
˗ˏˋ🧺 ៵ ࣪  *${prefix}addchangelog*
˗ˏˋ🧺 ៵ ࣪  *${prefix}public*
˗ˏˋ🧺 ៵ ࣪  *${prefix}self*
˗ˏˋ🧺 ៵ ࣪  *${prefix}exif*
˗ˏˋ🧺 ៵ ࣪  *${prefix}bc*
˗ˏˋ🧺 ៵ ࣪  *${prefix}setprefix*
˗ˏˋ🧺 ៵ ࣪  *${prefix}setthumb*
˗ˏˋ🧺 ៵ ࣪  *${prefix}clearall*
˗ˏˋ🧺 ៵ ࣪  *>*
˗ˏˋ🧺 ៵ ࣪  *$*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}


exports.groupMenu = (prefix, botName) => {
    return `𓈒 ֹ (｡>◠<｡) ꜝꜝ ฺ⭒*「 GROUP MENU 」* ˎˊ˗
𓏲 ๋࣭  🐨  *${prefix}afk*
𓏲 ๋࣭  🐨  *${prefix}infogrup*
𓏲 ๋࣭  🐨  *${prefix}add*
𓏲 ๋࣭  🐨  *${prefix}kick*
𓏲 ๋࣭  🐨  *${prefix}promote*
𓏲 ๋࣭  🐨  *${prefix}demote*
𓏲 ๋࣭  🐨  *${prefix}linkgc*
𓏲 ๋࣭  🐨  *${prefix}leave*
𓏲 ๋࣭  🐨  *${prefix}revoke*
𓏲 ๋࣭  🐨  *${prefix}setdesc*
𓏲 ๋࣭  🐨  *${prefix}setgrupname*
𓏲 ๋࣭  🐨  *${prefix}setgrupname*
𓏲 ๋࣭  🐨  *${prefix}setppgrup*
𓏲 ๋࣭  🐨  *${prefix}opengrup*
𓏲 ๋࣭  🐨  *${prefix}closegrup*
𓏲 ๋࣭  🐨  *${prefix}tagall*
𓏲 ๋࣭  🐨  *${prefix}tagme*
𓏲 ๋࣭  🐨  *${prefix}kontak*
𓏲 ๋࣭  🐨  *${prefix}hidetag*
𓏲 ๋࣭  🐨  *${prefix}getpp*
𓏲 ๋࣭  🐨  *${prefix}mute*
𓏲 ๋࣭  🐨  *${prefix}unmute*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}


exports.sistemMenu = (prefix, botName) => {
     return` ꒷˗ˏˋ🧺 *「 SISTEM MENU 」* 𓄹 ࣪˖
ׄ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ ▭ׅ ▬ׄ 
🎀 ៹ ࣪˖⁩  *${prefix}antilink*
🎀 ៹ ࣪˖⁩  *${prefix}antiwame*
🎀 ៹ ࣪˖⁩  *${prefix}antilinkig*
🎀 ៹ ࣪˖⁩  *${prefix}antilinkyt*
🎀 ៹ ࣪˖⁩  *${prefix}antibadword*
🎀 ៹ ࣪˖⁩  *${prefix}welcome*
🎀 ៹ ࣪˖⁩  *${prefix}left*
🎀 ៹  ࣪˖. *${prefix}samih*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}



exports.gabutMenu = (prefix, botName) => {
    return ` ˗ˏˋ🧺 *「 GABUT MENU 」* 𓄹 ࣪˖
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}apakah*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}kapankah*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}bisakah*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}hobby*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}rate*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}cekbapak*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}seberapagay*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}truth*
ᥫ᭡˖ ࣪ ִֶָ     *${prefix}dare*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}


exports.gameMenu = (prefix, botName) => {
    return ` ˗ˏˋ🧺 *「 GAME MENU 」* 𓄹 ࣪˖
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}tictactoe*
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}tebakgambar*
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}delttt*
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}family100*
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}suit*
ᥫ᭡˖ ࣪ ִֶָ    *${prefix}simi* [ blum work ]
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}




exports.downloadMenu = (prefix, botName) => {
    return ` ᥫ᭡ *「 DOWNLOAD MENU 」* ꗃ
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
❀🧺𖥔 ִ ་  ،  *${prefix}ytmp3*
❀🧺𖥔 ִ ་  ،  *${prefix}ytmp4*
❀🧺𖥔 ִ ་  ،  *${prefix}play*
❀🧺𖥔 ִ ་  ،  *${prefix}playmp4*
❀🧺𖥔 ִ ་  ،  *${prefix}tiktok*
❀🧺𖥔 ִ ་  ،  *${prefix}tiktokmp3*
❀🧺𖥔 ִ ་  ،  *${prefix}instagram*
❀🧺𖥔 ִ ་  ،  *${prefix}facebook*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}



exports.searchMenu = (prefix, botName) => {
    return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 SEARCH MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}yts*
˗ˏˋ🧺 ៵ ࣪  *${prefix}pinterest*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}


exports.stalkMenu = (prefix, botName) => {
    return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 STALK MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}igstalk*
˗ˏˋ🧺 ៵ ࣪  *${prefix}ghstalk*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}




exports.animeMenu = (prefix, botName) => {
    return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 ANIME MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}waifu*
˗ˏˋ🧺 ៵ ࣪  *${prefix}loli*
˗ˏˋ🧺 ៵ ࣪  *${prefix}husbu*
˗ˏˋ🧺 ៵ ࣪  *${prefix}shota*
˗ˏˋ🧺 ៵ ࣪  *${prefix}nekonime*
˗ˏˋ🧺 ៵ ࣪  *${prefix}megumin*
˗ˏˋ🧺 ៵ ࣪  *${prefix}sagiri*
˗ˏˋ🧺 ៵ ࣪  *${prefix}shinobu*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}


exports.toolsMenu = (prefix, botName) => {
    return `꒰ ᐢ⸝⸝•༝•⸝⸝ᐢ ꒱ ֺ *「 TOOLS MENU 」* ˎˊ˗
˗ˏˋ🧺 ៵ ࣪  *${prefix}nulis*
˗ˏˋ🧺 ៵ ࣪  *${prefix}nuliskiri*
˗ˏˋ🧺 ៵ ࣪  *${prefix}nuliskanan*
˗ˏˋ🧺 ៵ ࣪  *${prefix}foliokiri*
˗ˏˋ🧺 ៵ ࣪  *${prefix}foliokanan*
˗ˏˋ🧺 ៵ ࣪  *${prefix}tinyurl*
˗ˏˋ🧺 ៵ ࣪  *${prefix}translate*
˗ˏˋ🧺 ៵ ࣪  *${prefix}ebase64*
˗ˏˋ🧺 ៵ ࣪  *${prefix}debase64*
˗ˏˋ🧺 ៵ ࣪  *${prefix}ehex*
˗ˏˋ🧺 ៵ ࣪  *${prefix}dehex*
˗ˏˋ🧺 ៵ ࣪  *${prefix}ebinary*
˗ˏˋ🧺 ៵ ࣪  *${prefix}debinary*
𒀭ᥫ᭡ *「 ${botName} 」* Ꮺ ָ࣪ ۰ .`
}



exports.makerMenu = (prefix, botName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}neon*
├≽ *${prefix}matrix*
├≽ *${prefix}blackpink*
├≽ *${prefix}halloween*
├≽ *${prefix}thundername*
├≽ *${prefix}devilwings*
├≽ *${prefix}cloudtext*
├≽ *${prefix}bloodtext*
├≽ *${prefix}bloodtext2*
├≽ *${prefix}steeltext*
├≽ *${prefix}lavatext*
├≽ *${prefix}toxiclogo*
├≽ *${prefix}dropwater*
├≽ *${prefix}metaldark*
├≽ *${prefix}sandwrite*
├≽ *${prefix}3dwater*
├≽ *${prefix}graffiti*
├≽ *${prefix}graffiti2*
├≽ *${prefix}phlogo*
├≽ *${prefix}glitch*
├≽ *${prefix}graffiti3*
├≽ *${prefix}layeredtext*
├≽ *${prefix}vintage*
├≽ *${prefix}3dspace*
├≽ *${prefix}stonetext*
├≽ *${prefix}avengers*
├≽ *${prefix}marvellogo*
├≽ *${prefix}3dmetal*
├≽ *${prefix}lionlogo*
├≽ *${prefix}wolflogo*
├≽ *${prefix}ninjalogo*
├≽ *${prefix}pubglogo*
├≽ *${prefix}shadowtext*
├≽ *${prefix}smoketext*
├≽ *${prefix}romancetext*
├≽ *${prefix}carvedwood*
├≽ *${prefix}harrypotter*
├≽ *${prefix}flamingtext*
├≽ *${prefix}falleaves*
├≽ *${prefix}underwater*
├≽ *${prefix}wolfmetal*
├≽ *${prefix}woodboard*
├≽ *${prefix}undergrass*
├≽ *${prefix}coffetext*
├≽ *${prefix}lovetext*
├≽ *${prefix}burnpaper*
├≽ *${prefix}lovemessage*
├─────────────────────
╘═══ 《 *${botName}* 》 ═══`
}

exports.otherMenu = (prefix, botName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}sewabot*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}ownerdoi*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore*
├≽ *${prefix}cekapikey*
├─────────────────────
╘═══ 《 *${botName}* 》 ═══`
}

exports.hentaiMenu = (prefix, botName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}boobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *${botName}* 》 ═══`
}

exports.storageMenu = (prefix, botName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound1*
├≽ *${prefix}sound2*
├≽ *${prefix}sound3*
├≽ *${prefix}sound4*
├≽ *${prefix}sound5*
├≽ *${prefix}sound6*
├≽ *${prefix}sound7*
├≽ *${prefix}sound8*
├─────────────────────
╘═══ 《 *${botName}* 》 ═══`
}



exports.rahmanMenu = (prefix, botName) => {
      return `╒═══ 《 *NEW UPDATE MENU* 》 ═══
════════════════════════
📍 *${prefix}quotes*
════════════════════════
╘═══ 《 *${botName}* 》 ═══`
}