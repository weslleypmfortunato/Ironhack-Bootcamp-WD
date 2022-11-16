import './StudentCard.css'

const StudentCard = (props) => {
  return (
    <div className="StudentCard">
      <p>
        Nome: {props.nome}
      </p>
      <p>
        Turma: {props.turma.cidade} - {props.turma.curso}
      </p>
      <p>
        Semana Atual: {props.semana}
      </p>
    </div>
  )
}

export default StudentCard