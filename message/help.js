exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
ΛΛΛΛπ°*${botName}* ΦΈ β π₯»
β¬β­β¬β­β¬β­β¬β­β¬β­β¬β­β¬Β 
ΛΛΛΛπ§Ί *Creator : ${ownerName}*
ΛΛΛΛπ§Ί *Lib : Baileys V.3.5.8*
ΛΛΛΛπ§Ί *Total Fitur : 400+*
ΛΛΛΛπ§Ί *Total Pengguna : ${pendaftar.length}*
ΛΛΛΛπ§Ί *Tanggal : ${tanggal}*
ΛΛΛΛπ§Ί *Pukul : ${jam}*
ΛΛΛΛπ§Ί *Runtime Bot*
ΛΛΛΛπ§Ί *${runtime}*
ΛΛΛΛπ§Ί *Prefix : γ ${prefix} γ*
β¬β­β¬β­β¬β­β¬β­β¬β­β¬β­β¬Β 
ΛΛΛΛπ°*USER INFO* ΦΈ β π₯»
β *Name* : *${pushname}*
β *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
β *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
β *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
β *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
 π¦ π§Ί γ *MENU* γ π§Ί π¦ 
β«β«β«β«β«β«β«β«β«β«β«
π­ π¦ Ϋ«  *${prefix}stickermenu*
π° π¦ Ϋ«  *${prefix}creatormenu*
π­ π¦ Ϋ«  *${prefix}groupmenu*
π° π¦ Ϋ«  *${prefix}sistemmenu*
π­ π¦ Ϋ«  *${prefix}gabutmenu*
π° π¦ Ϋ«  *${prefix}gamemenu*
π­ π¦ Ϋ«  *${prefix}downloadmenu*
π° π¦ Ϋ«  *${prefix}searchmenu*
π­ π¦ Ϋ«  *${prefix}stalkmenu*
π° π¦ Ϋ«  *${prefix}animemenu*
π° π¦ Ϋ«  *${prefix}nsfwmenu*
π° π¦ Ϋ«  *${prefix}toolsmenu*
π° π¦ Ϋ«  *${prefix}makermenu*
π° π¦ Ϋ«  *${prefix}storagemenu*
π° π¦ Ϋ«  *${prefix}othermenu*
π° π¦ Ϋ«  *${prefix}newupdate*

β«β«β«β«β«β«β«β«β«β«β«
ββββ γ *THANKS TO* γ βββ
β«β«β«β«β«β«β«β«β«β«β«
π° π¦ Ϋ«  *Xinz-Team & Skimura Team*
π° π¦ Ϋ«  *Aqulzz*
π° π¦ Ϋ«  *Nafizz*
π° π¦ Ϋ«  *Y-DhyZx*
π° π¦ Ϋ«  *Ramlan ID*
π° π¦ Ϋ«  *Ronove*
π° π¦ Ϋ«  *Nanda*
π° π¦ Ϋ«  *Aulia Rahman*
π° π¦ Ϋ«  *Adiwajshing/Baileys*
π° π¦π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .π° π¦`
}



exports.stickerMenu = (prefix, botName) => {
          return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ STICKER MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}sticker*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}stickergif*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}swm*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}take*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}toimg*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}tovideo*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}attp*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}



exports.ownerMenu = (prefix, botName) => {
    return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ CREATOR MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}addprem*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}delprem*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}ban*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}unban*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}join*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}addbaword*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}delbaword*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}addchangelog*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}public*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}self*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}exif*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}bc*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}setprefix*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}setthumb*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}clearall*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}buggc*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}shotdown*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *>*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *$*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}


exports.groupMenu = (prefix, botName) => {
    return `π ΦΉ (ο½‘>β <ο½‘) κκ ΰΈΊβ­*γ GROUP MENU γ* ΛΛΛ
π² ΰΉΰ£­  π¨  *${prefix}afk*
π² ΰΉΰ£­  π¨  *${prefix}infogrup*
π² ΰΉΰ£­  π¨  *${prefix}add*
π² ΰΉΰ£­  π¨  *${prefix}kick*
π² ΰΉΰ£­  π¨  *${prefix}promote*
π² ΰΉΰ£­  π¨  *${prefix}demote*
π² ΰΉΰ£­  π¨  *${prefix}linkgc*
π² ΰΉΰ£­  π¨  *${prefix}leave*
π² ΰΉΰ£­  π¨  *${prefix}revoke*
π² ΰΉΰ£­  π¨  *${prefix}setdesc*
π² ΰΉΰ£­  π¨  *${prefix}setgrupname*
π² ΰΉΰ£­  π¨  *${prefix}setgrupname*
π² ΰΉΰ£­  π¨  *${prefix}setppgrup*
π² ΰΉΰ£­  π¨  *${prefix}opengrup*
π² ΰΉΰ£­  π¨  *${prefix}closegrup*
π² ΰΉΰ£­  π¨  *${prefix}tagall*
π² ΰΉΰ£­  π¨  *${prefix}tagme*
π² ΰΉΰ£­  π¨  *${prefix}kontak*
π² ΰΉΰ£­  π¨  *${prefix}hidetag*
π² ΰΉΰ£­  π¨  *${prefix}getpp*
π² ΰΉΰ£­  π¨  *${prefix}mute*
π² ΰΉΰ£­  π¨  *${prefix}unmute*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}


exports.sistemMenu = (prefix, botName) => {
     return` κ·ΛΛΛπ§Ί *γ SISTEM MENU γ* πΉ ΰ£ͺΛ
Χβ­Χ β¬Χ β­Χ β¬Χ β­Χ β¬Χ β­Χ β¬Χ β­Χ β¬Χ 
π αΉ ΰ£ͺΛβ©  *${prefix}antilink*
π αΉ ΰ£ͺΛβ©  *${prefix}antiwame*
π αΉ ΰ£ͺΛβ©  *${prefix}antilinkig*
π αΉ ΰ£ͺΛβ©  *${prefix}antilinkyt*
π αΉ ΰ£ͺΛβ©  *${prefix}antibadword*
π αΉ ΰ£ͺΛβ©  *${prefix}welcome*
π αΉ ΰ£ͺΛβ©  *${prefix}left*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}



exports.gabutMenu = (prefix, botName) => {
    return ` ΛΛΛπ§Ί *γ GABUT MENU γ* πΉ ΰ£ͺΛ
β«β«β«β«β«β«β«β«β«β«β«
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}apakah*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}kapankah*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}bisakah*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}hobby*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}rate*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}cekbapak*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}seberapagay*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}truth*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ     *${prefix}dare*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}


exports.gameMenu = (prefix, botName) => {
    return ` ΛΛΛπ§Ί *γ GAME MENU γ* πΉ ΰ£ͺΛ
β«β«β«β«β«β«β«β«β«β«β«
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ    *${prefix}tictactoe*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ    *${prefix}tebakgambar*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ    *${prefix}delttt*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ    *${prefix}family100*
α₯«α­‘Λ ΰ£ͺ Φ΄ΦΆΦΈΒ    *${prefix}suit*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}




exports.downloadMenu = (prefix, botName) => {
    return ` α₯«α­‘ *γ DOWNLOAD MENU γ* κ
β«β«β«β«β«β«β«β«β«β«β«
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}ytmp3*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}ytmp4*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}play*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}playmp4*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}tiktok*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}tiktokmp3*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}instagram*
βπ§Ίπ₯ Φ΄ ΰΌ  Ψ  *${prefix}facebook*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}



exports.searchMenu = (prefix, botName) => {
    return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ SEARCH MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}yts*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}pinterest*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}


exports.stalkMenu = (prefix, botName) => {
    return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ STALK MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}igstalk*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}ghstalk*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}




exports.animeMenu = (prefix, botName) => {
    return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ ANIME MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}waifu*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}loli*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}husbu*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}shota*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}nekonime*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}megumin*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}sagiri*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}shinobu*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}


exports.toolsMenu = (prefix, botName) => {
    return `κ° α’βΈβΈβ’ΰΌβ’βΈβΈα’ κ± ΦΊ *γ TOOLS MENU γ* ΛΛΛ
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}nulis*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}nuliskiri*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}nuliskanan*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}foliokiri*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}foliokanan*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}tinyurl*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}translate*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}ebase64*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}debase64*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}ehex*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}dehex*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}ebinary*
ΛΛΛπ§Ί α΅ ΰ£ͺ  *${prefix}debinary*
π­α₯«α­‘ *γ ${botName} γ* αͺ ΰ£ͺΦΈ Ϋ° .`
}



exports.makerMenu = (prefix, botName) => {
    return `ββββ γ *MAKER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}hartatahta*
ββ½ *${prefix}neon*
ββ½ *${prefix}matrix*
ββ½ *${prefix}blackpink*
ββ½ *${prefix}halloween*
ββ½ *${prefix}thundername*
ββ½ *${prefix}devilwings*
ββ½ *${prefix}cloudtext*
ββ½ *${prefix}bloodtext*
ββ½ *${prefix}bloodtext2*
ββ½ *${prefix}steeltext*
ββ½ *${prefix}lavatext*
ββ½ *${prefix}toxiclogo*
ββ½ *${prefix}dropwater*
ββ½ *${prefix}metaldark*
ββ½ *${prefix}sandwrite*
ββ½ *${prefix}3dwater*
ββ½ *${prefix}graffiti*
ββ½ *${prefix}graffiti2*
ββ½ *${prefix}phlogo*
ββ½ *${prefix}glitch*
ββ½ *${prefix}graffiti3*
ββ½ *${prefix}layeredtext*
ββ½ *${prefix}vintage*
ββ½ *${prefix}3dspace*
ββ½ *${prefix}stonetext*
ββ½ *${prefix}avengers*
ββ½ *${prefix}marvellogo*
ββ½ *${prefix}3dmetal*
ββ½ *${prefix}lionlogo*
ββ½ *${prefix}wolflogo*
ββ½ *${prefix}ninjalogo*
ββ½ *${prefix}pubglogo*
ββ½ *${prefix}shadowtext*
ββ½ *${prefix}smoketext*
ββ½ *${prefix}romancetext*
ββ½ *${prefix}carvedwood*
ββ½ *${prefix}harrypotter*
ββ½ *${prefix}flamingtext*
ββ½ *${prefix}falleaves*
ββ½ *${prefix}underwater*
ββ½ *${prefix}wolfmetal*
ββ½ *${prefix}woodboard*
ββ½ *${prefix}undergrass*
ββ½ *${prefix}coffetext*
ββ½ *${prefix}lovetext*
ββ½ *${prefix}burnpaper*
ββ½ *${prefix}lovemessage*
ββββββββββββββββββββββ
ββββ γ *${botName}* γ βββ`
}

exports.otherMenu = (prefix, botName) => {
    return `ββββ γ *OTHER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *cekprefix*
ββ½ *${prefix}sewabot*
ββ½ *${prefix}sewaprem*
ββ½ *${prefix}stats*
ββ½ *${prefix}limit*
ββ½ *${prefix}balance*
ββ½ *${prefix}runtime*
ββ½ *${prefix}speed*
ββ½ *${prefix}owner*
ββ½ *${prefix}ownerdoi*
ββ½ *${prefix}donasi*
ββ½ *${prefix}sourcecode*
ββ½ *${prefix}cekprem*
ββ½ *${prefix}listprem*
ββ½ *${prefix}listban*
ββ½ *${prefix}listbadword*
ββ½ *${prefix}buylimit*
ββ½ *${prefix}buyglimit*
ββ½ *${prefix}topglobal*
ββ½ *${prefix}toplocal*
ββ½ *${prefix}readmore*
ββ½ *${prefix}cekapikey*
ββ½ *${prefix}lolkey*

ββββββββββββββββββββββ
ββββ γ *${botName}* γ βββ`
}

exports.hentaiMenu = (prefix, botName) => {
    return `ββββ γ *18+ MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}randomhentong*
ββ½ *${prefix}kemonomimi*
ββ½ *${prefix}ero*
ββ½ *${prefix}echi*
ββ½ *${prefix}ahegao*
ββ½ *${prefix}trap*
ββ½ *${prefix}neko*
ββ½ *${prefix}blowjob*
ββ½ *${prefix}kitsune*
ββ½ *${prefix}yuri*
ββ½ *${prefix}boobs*
ββ½ *${prefix}kuni*
ββββββββββββββββββββββ
ββββ γ *${botName}* γ βββ`
}

exports.storageMenu = (prefix, botName) => {
    return `ββββ γ *STORAGE MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}sound1*
ββ½ *${prefix}sound2*
ββ½ *${prefix}sound3*
ββ½ *${prefix}sound4*
ββ½ *${prefix}sound5*
ββ½ *${prefix}sound6*
ββ½ *${prefix}sound7*
ββ½ *${prefix}sound8*
ββββββββββββββββββββββ
ββββ γ *${botName}* γ βββ`
}



exports.rahmanMenu = (prefix, botName) => {
      return `ββββ γ *NEW UPDATE MENU* γ βββ
ββββββββββββββββββββββββ
π *${prefix}quotes*
ββββββββββββββββββββββββ
ββββ γ *${botName}* γ βββ`
}


exports.beliPremium = (nomorPenjual) => {
       return `*γ SEWA USER PREMIUM γ*

π° 1 BULAN : 5K
π° 4 BULAN : 12K
π° 10 BULAN : 24K
π° PERMANEN : 30K

π€ KEUNTUNGAN USER PREMIUM π€

π° Bisa Menggunakan user premium
π° Bisa download lagu/audio
π° DLL

order? cht wa me!
${nomorPenjual}`
}


exports.sewabotMenu = (botName, nomorPenjual) =>  {
      return `*γ SEWA GRUP ${botName} γ*

β *ADA SISTEM BUAT MENJAGA GRUP ANDA*

β­β ANTILINK
β­β ANTIWAME
β­β ANTIBADWORD
β­β ANTILINKIG
β­β ANTILINKYT

β *KEUNTUNGAN SEWA GRUP BOT SKIMURA*

β­β ANTILINK ADALAH YANG MENGGIRIM LINK GC LAIN DAN OTOMATIS DIKICK OLEH BOT
β­β ANTIWAME ADALAH YANG MENGGIRIM LINK WA.ME DAN OTOMATIS DIKICK
β­β ANTIBADWORD ADALAH YANG MENGGIRIM KATA KATA KASAR DAN OTOMATIS PERINGATAN 3X ATAU TIDAK ANDA DIKICK
β­β ANTILINKIG ADALAH YANG MENGGIRIM LINK TAUTAN IG DAN OTOMATIS DIKICK
β­β ANTILINKYT ADALAH YANG MENGGIRIM LINK YOUTUBE AKAN OTOMATIS DIKICK

β *ORDER? SILAHKAN CHAT DIBAWAH INI*

β ${nomorPenjual}

GITHUB : https://github.com/Rhmn8`
}
