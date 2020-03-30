/*
  Esse Arquivo será de configuração da conexão
    Estamos importando o knex, passando o caminho do arquivo de configuração
  dos ambientes de produção do knexfile e setando o ambiente que queremos que
  é o development. Por fim exportamos. Esse arquivo terá que ser importado dentro
  dos arquivos que irão precisar se comunicar com o banco de dados.
*/

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;
