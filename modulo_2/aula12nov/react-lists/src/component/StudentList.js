
const StudentList = () => {
  const students = ['Maria', 'José', 'João', 'Ana']

  return (
    <div className="StudentsList">
      <h2>List</h2>

      {students.map((name, index) => {
        return <p key={index}>{name.toUpperCase()}</p>
      })}
      
    </div>
  )
}

export default StudentList