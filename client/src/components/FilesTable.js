import Table from 'react-bootstrap/Table'
import '../App.css';

const FilesTable = ({ data }) => {

  const headers = ['File Name', 'Text', 'Number', 'Hex'];

  return (
    <Table bordered hover striped size='sm' className='text-start'>
      <thead className='custom-table-head'>
        <tr>
        {
          headers.map(header => {
            return <th key={header}>{header}</th>
          })
        }
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
        item.lines.map((line, index) => ( 
          <tr key={`${item.file}-${index}`}>
            <td>{item.file}</td> 
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        ))
        ))}    
      </tbody>
    </Table>
  )
}

export default FilesTable
