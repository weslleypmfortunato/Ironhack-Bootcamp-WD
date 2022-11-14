import './App.css';
import './AppStyles/MeuEstilo.css'
import logo from './logo.svg'

const meuH1 = <h1>Teste</h1>
const pessoa = {
  nome: 'maria',
  cidade: 'buenos aires'
}

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

const minhaClasse = 'teste1'

function App() {
  return (
    <div className="App">
      {meuH1}
      <div className={minhaClasse}>
        <p>{capitalize(pessoa.nome)}</p>
        <p>{pessoa.cidade.toUpperCase()}</p>
      </div>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;
