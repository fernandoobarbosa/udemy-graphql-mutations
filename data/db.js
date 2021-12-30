const { v4: uuidv4 } = require('uuid')

const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' }
]

const usuarios = [
  {
    id: uuidv4(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
  },
  {
    id: uuidv4(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
  },
  {
    id: uuidv4(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
  }
]

module.exports = { usuarios, perfis }
