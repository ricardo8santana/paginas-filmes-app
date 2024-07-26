show databases; #visualizando os bancos presentes no serer

use db_tarefas; # seleciona o banco que quero

show tables;# exibe as tabelas presentes no banco db_tarfas

create table pessoa (
nome varchar(15),
sobrenome varchar(20),
idade int,
funcionario bool
);

desc pessoa;# visualizar os campos e seus respsctivos tipos