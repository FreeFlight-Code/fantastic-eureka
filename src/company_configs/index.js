const configs = [
require('./admin.json'),
require('./firstpro.json')
]

function getClients (){
	return getConfigFiles()
}
function getConfigFiles(){
	return configs;
}
export default getClients;