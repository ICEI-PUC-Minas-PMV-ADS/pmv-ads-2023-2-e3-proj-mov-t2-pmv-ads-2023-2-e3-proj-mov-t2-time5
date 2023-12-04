import Database from './DbServices';


const DB_EXEC = Database.getConnection();

export const getDoacoes = async () => {
  let results = await DB_EXEC(`select * from doacoes`);
  //console.log(results);
  return results.rows._array;
}

export const insertDoacao = async (param) => {
  let results = await DB_EXEC(`insert into doacoes(tipo, user, cidade, bairro, contato, historico, status)
  values(?,?,?,?,?,?,?)`, [param.tipo, param.user, param.cidade, param.bairro, param.contato, param.historico, param.status]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateDoacao = async (param) => {
  let results = await DB_EXEC(`update doacoes set tipo=?, user=?, cidade=?, bairro=?, contato=?, historico=?, status=?
  where id=?`, [param.tipo, param.user, param.cidade, param.bairro, param.contato, param.historico, param.status, param.id]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteDoacao = async (id) => {
  let results = await DB_EXEC(`delete from doacoes where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}