import './App.css';
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import StudentCard from './components/StudentCard';
import ListaAlunos from './components/ListaAlunos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting nome='Maria'/>
      <Greeting nome='Jorge'/>
      <Greeting nome='Manu'/>

      <ListaAlunos>
        <StudentCard 
          nome='Maria' 
          turma={{cidade: 'São Paulo', curso: 'WD'}} 
          semana={1}/>
        <StudentCard 
          nome='Jorge' 
          turma={{cidade: 'Barcelona', curso: 'UX'}} 
          semana={2}/>
      </ListaAlunos>
    </div>
  );
}

export default App;
