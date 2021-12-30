const { usuarios } = require('../data/db')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  novoUsuario (_, args) {
    const emailExistente = usuarios.some(
      (usuario) => usuario.email === args.email
    )
    if (emailExistente) throw new Error('E-mail já existente')

    const id = uuidv4()
    const novo = {
      id,
      ...args,
      perfil_id: 1,
      status: 'ATIVO'
    }
    usuarios.push(novo)
    return novo
  },
  excluirUsuario (_, { id }) {
    const usuario = usuarios.find((usuario) => usuario.id === id)
    if (!usuario) throw new Error('Usuário não encontrado')

    const indice = usuarios.indexOf(usuario)
    usuarios.splice(indice, 1)

    return usuario
  }
}
