const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const AuliaLog = (text, color) => {
	return !color ? chalk.yellow('[HaskimuraBot]') + chalk.green(text) : chalk.yellow('[HaskimuraBot]') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	AuliaLog
}
