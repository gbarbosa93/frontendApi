import { useEffect, useState, useRef } from 'react' // React's Hooks
import './style.css'
import api from '../../services/api'
import Home from '../home'

// As funções sempre precisam começar com a primeira letra maiscula
function Editar() { // Componente Edit

  const [usuarios, setUsuario] = useState([]) // nessa estrutura eu uso o useState para atualizar dinamicamente minha página | toda vez que eu quiser alterar o usuarios, eu uso a linha 13
  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()


  async function editarUsuarios(id) { // método para acessar minha rota PUT do meu servidor para editar um usuario
    //await api.put(`/usuarios/${id}`)

  }

  useEffect(() => { // Estrutura báscia do useEffect para chamar meu método getUsuarios assim que minha página carregar

  }, [])

  return ( // Toda nossa página é renderizada dentro desse return nele vai todo nosso HTML e é possivel brincarmos com JS ou TS e misturar os dois

    <div className='container'>
      <form action="">
        <h1>Editar Usuário</h1>
        <input placeholder='Nome' name='nome' type='text' ref={inputName} />
        <input placeholder='Idade' name='idade' type='number' ref={inputIdade} />
        <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
        <button type='button' id='cadastrar' onClick={() => editarUsuarios(id)}>Editar</button>
      </form>
    </div>


  )
}

export default Editar // sempre que criado uma função(componente) precisamos exportar de forma pardrão (básicamente seguir um padrão de exportação)
