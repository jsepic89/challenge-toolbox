import axios from 'axios'
import getSingleFile from '../utils/getSingleFile.js'
import fileFormatter from '../utils/fileFormatter.js'

const token = 'aSuperSecretKey'

const getFiles = async (req, res) => {
  try {
    const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const files = response.data.files

    const filesArray = []
    for (const file of files) {
      try {
        const fileResponse = await getSingleFile(file)
        const fileData = fileResponse.data
        const formattedData = fileFormatter(file, fileData)
        filesArray.push(formattedData)
      } catch (error) {
        console.log(error.response.data)
      }
    }
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(filesArray)
  } catch (error) {
    console.log(error.data)
    res.status(500).json(error)
  }
}

const getAllFiles = async (req, res) => {
  try {
    const response = await axios.get('https://echo-serv.tbxnet.com/v1/secret/files', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const files = response.data.files
    res.status(200).json(files)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export { getFiles, getAllFiles }
