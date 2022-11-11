const ListaAlunos = (props) => {
  return (
  <div className="ListaAlunos">
    <h1>Lista Alunos</h1>
    {props.children}
  </div>
  )
} 

export default ListaAlunos