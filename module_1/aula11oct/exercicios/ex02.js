/* 
Imagine que você é um professor de matemática e tem que classificar nossos alunos com base em seu desempenho em dois projetos (40% da nota final) e seu exame final (60% da nota final). Temos as informações de cada aluno em um objeto que se parece com este:

Portanto, toda a classe é representada como uma matriz de objetos (cada objeto contém os dados sobre esse aluno), e precisamos obter uma nova matriz de objetos, mas desta vez os objetos conterão apenas o nome do aluno e sua nota final. Vamos fazer isso.
Aqui estão os dados:
*/

const students = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

const NotaFinal = students.map(student => {
  const notaExames = (student.firstProject + student.secondProject) / 2
  const finalGrade = student.finalExam * 0.6 + notaExames * 0.4
  return {
    name: student.name,
    finalGrade: Math.round(finalGrade)
  }
})

console.log(NotaFinal)

