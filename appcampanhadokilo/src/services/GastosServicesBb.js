import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getDoacoes = async () => {
  let results = await DB_EXEC(`select * from doacao`);
  //console.log(results);
  return results.rows._array;
}

export const insertDoacao = async (param) => {
  let results = await DB_EXEC(`insert into doacao(tipo, user, cidade, bairro, status)
  values(?,?,?,?,?)`, [param.tipo, param.user, param.cidade, param.bairro, param.status]);
  //console.log(results);
  return results.rowsAffected;
}

export const updateDoacao = async (param) => {
  let results = await DB_EXEC(`update doacao set tipo=?, user=?, cidade=?, bairro=?, status=?
  where id=?`, [param.tipo, param.user, param.cidade, param.bairro, param.status, param.id]);
  //console.log(results);
  return results.rowsAffected;
}

export const deleteDoacao = async (id) => {
  let results = await DB_EXEC(`delete from doacao where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
}