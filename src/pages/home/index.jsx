import { useEffect, useState, useRef } from 'react' // React's Hooks
import './style.css'
import Trash from '../../assets/trash.svg' // diferente do HTML tradicional precisamom importar as imagens nesse formato
import api from '../../services/api'

// As funções sempre precisam começar com a primeira letra maiscula
function Home() { // Componente HOME

  const [usuarios, setUsuario] = useState([]) // nessa estrutura eu uso o useState para atualizar dinamicamente minha página | toda vez que eu quiser alterar o usuarios, eu uso a linha 13
  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  async function deleteUsuarios(email) { // método para acessar minha rota DELETE do meu servidor para deletar um usuario
    await api.delete(`/usuarios/${email}`)
    getUsuarios()

  }
  async function getUsuarios() { // método para acessar minha rota GET do meu servidor para listar os usuarios
    const usuariosFrom = await api.get('/usuarios')
    setUsuario(usuariosFrom.data)

  }

  async function criarUsuarios() { // método para acessar minha rota POST do meu servidor para criar um novo usuario
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputIdade.current.value,
      email: inputEmail.current.value
    })
    getUsuarios()

  }

  useEffect(() => { // Estrutura báscia do useEffect para chamar meu método getUsuarios assim que minha página carregar
    getUsuarios()
  }, [])

  return ( // Toda nossa página é renderizada dentro desse return nele vai todo nosso HTML e é possivel brincarmos com JS ou TS e misturar os dois

    <div className='container'>
      <form action="">
        <h1>Cadastro de usuários</h1>
        <input placeholder='Nome' name='nome' type='text' ref={inputName} />
        <input placeholder='Idade' name='idade' type='number' ref={inputIdade} />
        <input placeholder='E-mail' name='e-mail' type='email' ref={inputEmail} />
        <button type='button' onClick={criarUsuarios}>Cadastrar</button>
      </form>
      { // No React se eu abrir e fechar chaves e usar JS/TS 
        usuarios.map(usuario => (
          <div key={usuario.id} className='cards'>
            <div>
              <p>Nome: <span>{usuario.name}</span></p>
              <p>Idade: <span>{usuario.age}</span></p>
              <p>E-mail: <span>{usuario.email}</span></p>
            </div>
            <button type="button" onClick={() => deleteUsuarios(usuario.email)}>
              <img src={Trash} /> {/*Em vez de colocarmos o caminho da imagem, apenas colocamos o nosso import entre chaves*/}
            </button>
          </div>

        ))
      }
    </div>


  )
}

export default Home // sempre que criado uma função(componente) precisamos exportar de forma pardrão (básicamente seguir um padrão de exportação)
