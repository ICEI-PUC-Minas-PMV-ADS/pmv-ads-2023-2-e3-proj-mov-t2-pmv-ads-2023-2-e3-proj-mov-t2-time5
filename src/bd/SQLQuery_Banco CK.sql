
CREATE SCHEMA mydbCK;

USE mydbCK;

CREATE TABLE tbDoador (login VARCHAR(10) NOT NULL,
                                               nome VARCHAR(20) NOT NULL,
                                               estado CHAR(2) NOT NULL,
                                               cidade VARCHAR(10) NOT NULL,
                                               contato VARCHAR(11) NOT NULL,
                                               bairro VARCHAR(20) NOT NULL);

CREATE TABLE tbReceptor (login VARCHAR(10) NOT NULL,
                                               nome VARCHAR(20) NOT NULL,
                                               estado CHAR(2) NOT NULL,
                                               cidade VARCHAR(10) NOT NULL,
                                               contato VARCHAR(11) NOT NULL,
                                               bairro VARCHAR(20) NOT NULL);

CREATE TABLE tbItens (ID INT NOT NULL,
											   doador VARCHAR(10) NOT NULL,
                                               tipo VARCHAR(10) NOT NULL,
                                               nome VARCHAR(15) NOT NULL,
                                               status VARCHAR(10) NOT NULL,
                                               descriçao VARCHAR(100) NOT NULL);

CREATE TABLE tbDoaçao (controle INT NOT NULL,
												receptor VARCHAR(10) NOT NULL,
												data_Doaçao DATE NOT NULL,
												status_Doaçao VARCHAR(20) NOT NULL);

CREATE TABLE tbNecessidades (ID INT NOT NULL,
											   receptor VARCHAR(10) NOT NULL,
                                               tipo VARCHAR(20) NOT NULL,
                                               descriçao VARCHAR(30) NOT NULL)

ALTER TABLE tbDoador ADD CONSTRAINT doador_pk PRIMARY KEY(login);
ALTER TABLE tbReceptor ADD CONSTRAINT receptor_pk PRIMARY KEY(login);
ALTER TABLE tbDoaçao ADD CONSTRAINT doaçao_pk PRIMARY KEY(controle);
ALTER TABLE tbNecessidades ADD CONSTRAINT necessidades_pk PRIMARY KEY(ID);
ALTER TABLE tbItens ADD CONSTRAINT Itens_pk PRIMARY KEY(ID, doador);
ALTER TABLE tbDoaçao ADD CONSTRAINT doaçao_receptor_fk FOREIGN KEY(receptor) REFERENCES tbReceptor;
ALTER TABLE tbNecessidades ADD CONSTRAINT necessidades_receptor_fk FOREIGN KEY(receptor) REFERENCES tbReceptor;
ALTER TABLE tbItens ADD CONSTRAINT itens_doador_fk FOREIGN KEY(doador) REFERENCES tbDoador;