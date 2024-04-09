import './App.css';
import { useState, useEffect } from 'react'
import FilesTable from './components/FilesTable.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

function App() {

  const [ data, setData ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:4000/files/data')
        console.log(result.data)
        setData(result.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  

  return (
    <div className="App">
      <Navbar className='custom-bg-color'>
        <h5 className='text-white m-1'>
          React Test App
        </h5>
      </Navbar>
      <Container className="p-3">
        { data && <FilesTable data={data}/> }
      </Container>
    </div>
  );
}

export default App;
