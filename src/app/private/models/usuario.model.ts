export interface Usuario {
    usuario?: string,
    id_equipe?: string,
    id_cargo?: string,
    nome?: string,
    senha?: string,
    caminhoavatar?: string,
    bloqueado: boolean,
    email?: string,
    sexo?: string,
    logradouro?: string,
    numero?: string,
    bairro?: string,
    id_municipio?: string,
    cep?: string,
    maps?: string,
    referencia?: string,
    complemento?: string,
    datanascimento?: string,
    id_perfil?: string
    msg?: string //para casos de retorno do banco
}