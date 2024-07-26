use biblioteca;

select * from autores a ;

insert into autores (nome) values
('D.Carnegie'),
('N.Hill');

insert into livros (id_autor, ano_publicacao) values
(6, 1936),
(7, 1937);

desc autores ;

delete from autores where id_autor = 4;
delete from autores where id_autor = 5;
delete from autores where id_autor = 8;
delete from autores where id_autor =9;

insert into livros (id_autor, ano_publicacao,nome) values
(6, 1936, 'Como Fazer Amigos e Influenciar Pessoas'),
(7, 1937,'Quem Pensa Enriquece');

insert  into emprestimos (id_livro, data_emprestimo, data_devolucao ) values

(1,'2024-06-14','2024-06-19'),
(2,'2024-06-15', '2024-06-17'),
(6,'2024-06-17','2024-06-22'),
(7,'2024-06-19','2024-06-20');

select * from emprestimos e; 

select * from livros l;

select nome, ano_publicacao from livros l;

update autores 
set nome ='Napoleon Hill'
where id_autor  =6;

update livros  
set nome ='Quem Pensa Enriquece' 
where id_livro  =7;

update emprestimos 
set data_devolucao  ='2024-06-20'
where id_emprestimo =3;

select * from emprestimos e where id_livro =6 ; 

delete from emprestimos e where id_emprestimo in (4, 5);

delete from  livros where id_livro =6;

delete from livros  
where id_livro=2;

alter  table livros 
add column genero varchar(255);

desc livros;

alter  table livros modify column ano_publicacao year;

alter table emprestimos  change column  data_emprestimo data_inico_emprestimo date;

desc emprestimos;

create table usuarios(
id_usuarios int auto_increment not null primary key,
 nome varchar(100),
 endereco varchar (255),
 telefone varchar(20)
);

drop table usuarios;
desc usuarios;

alter table emprestimos add column id_usuario int;

desc emprestimos ;

alter table emprestimos add foreeign key(id_usuario) references usuarios(id_usuario);

insert  into usuarios ( nome, endereco, telefone) values

( 'Jediael', 'rua da concordia', '1195632-4789'),
( 'Jediael', 'rua da concordia', '1195632-4789'),
( 'Ezbom', 'rua da amizade','1165234-9871');

select * from usuarios u ;

alter table nome_tabela add contraint coluna_criada 
foreign key(coluna_criada) references tabela_estrangeira(id_tabelaestrangeira)







