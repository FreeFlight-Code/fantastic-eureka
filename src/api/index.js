import getClients from "../company_configs";

export function login(email, password) {
return matchPasswordToId (password)
} 

function matchPasswordToId (password){
const clients = getClients()
if(!clients)return;
return clients.find(({id})=> id === password)
}

const apis = {
  login
}

export default apis;