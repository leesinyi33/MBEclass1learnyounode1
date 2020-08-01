const net = require('net')
const server = net.createServer(function (socket) {
	socket.end(current() + '\n')
})
server.listen(Number(process.argv[2]))
function twoInt (i) {
	return (i>9 ? '' : '0')+i
}
function current () {
	var c = new Date()
	return c.getFullYear()+'-'+twoInt(c.getMonth()+1)+'-'+twoInt(c.getDate())+' '+twoInt(c.getHours())+':'+twoInt(c.getMinutes())
}