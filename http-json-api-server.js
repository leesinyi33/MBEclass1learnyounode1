var http = require('http')
var url = require('url')
function parse (t) {
	return { hour:t.getHours(), minute:t.getMinutes(), second:t.getSeconds()}
}
function unix (t) {
	return { unixtime:t.getTime()}
}
var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	var c = new Date(parsedUrl.query.iso)
	var current
	if (/^\/api\/parsetime/.test(req.url)) {
		current = parse(c)
	}
	else if (/^\/api\/unixtime/.test(req.url)) {
		current = unix(c)
	}
	if (current) {
		res.writeHead(200, {'Content-Type':'application/json'})
		res.end(JSON.stringify(current))
	} 
	else {
		res.writeHead(404)
		res.end()
	}
})
server.listen(Number(process.argv[2]))