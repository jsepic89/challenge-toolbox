import axios from 'axios'

const token = 'aSuperSecretKey'

const getSingleFile = async (file) => {
  try {
    const response = await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    console.log(`Error retrieving data from file: ${file}`)
    throw error
  }
}

export default getSingleFile
