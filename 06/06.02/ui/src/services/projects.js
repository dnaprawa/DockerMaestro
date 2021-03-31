import config from '../config'


async function getAll() {
    const response = await fetch( `${config.serviceHost}/services/projects` )
    const json = await response.json()
    return json.payload
    
}

export default {
  getAll
}