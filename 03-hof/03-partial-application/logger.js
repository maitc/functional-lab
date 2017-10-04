const { logger } = require('./tu-module');

const info = logger('INFO:')
//info('this is an info message')
// => 'INFO: this is an info message'

const warn = logger('WARN:')
//warn('this is a warning message', 'with more info')
// => 'WARN: this is a warning message with more info'

function callAPI(response, error){
	if(!error){
		warn('algo', 'na')
	}

	info('res')
	console.log(response)
}

callAPI('ALSKJDLKJASD', null)