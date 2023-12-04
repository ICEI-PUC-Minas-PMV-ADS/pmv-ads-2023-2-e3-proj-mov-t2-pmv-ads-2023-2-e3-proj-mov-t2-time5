import * as SQLite from 'expo-sqlite';

const Database = {
  getConnection: () => {
    
    const db = SQLite.openDatabase('kilo.db');

    db.transaction((tx) => {
      tx.executeSql(
        'create table if not exists doacoes (id integer primary key not null, tipo int not null, user text not null, cidade text not null, bairro text not null, contato text not null, historico text not null, status int not null);'
      );
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
        });
      });

    return ExecuteQuery;
  },
};

export default Database;
