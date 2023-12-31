# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória. O diagrama de classes foi construído a partir do diagrama de caso de Uso descrito no item 02 - Especificação do Projeto.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/104168502/c35010a6-cd26-45f1-a0bb-fef86ab2fa07)

Foi utilizado o aplicativo Astah com a licença de estudante.
As referências abaixo foram utilizadas na geração do artefato “Diagrama de Classes”.

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

As referências abaixo nos auxiliaram na geração odelo Entidade Relacionamento.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

Utilizamos o Diagrama de Classes para geração das entidades, seus atributos e relacionamentos entre si.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/104168502/b4b89dac-9557-4832-9c0c-1080c4029840)



## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo nos auxiliaram na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/104168502/6c345092-bcf6-409f-bd76-59febd1e646a)



## Modelo Físico

O arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados está incluído dentro da pasta src\bd, conforme figura abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/104168502/02258c64-443c-4718-a6e2-5319488d062d)


## Tecnologias Utilizadas

Aqui estão descritas as tecnologias usadas para resolver o problema e implementar a solução. Todas as tecnologias envolvidas, linguagens utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

> - Microsoft Visual Studio
> - Microsoft Visual Studio Code
> - JavaScript
> - Database Microsoft SqlServer
> - Microsoft SQL Server Management Studio
> - Figma
> - https://app.diagrams.net/
> - Astah

## Hospedagem

Na hospedagem será feita por meio de um arquivo Json com utilização de LocalStorage.

> **Links Úteis**:
>
> - https://receitasdecodigo.com.br/front-end/local-storage-html5-com-json 

## Qualidade de Software

A qualidade de software é um conjunto de características que as aplicações devem possuir para que o projeto cumpra todos os seus requisitos e atendam, de uma melhor maneira possível, a necessidades dos usuários. Essas normas foram adotadas inicialmente pela ISO/IEC 9126, de 1991, e que foram atualizadas para a ISO/IEC 25010, de 2011. Essa última define a qualidade para produtos de software em características e subcaracterísticas, que são: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-pmv-ads-2023-2-e3-proj-mov-t2-time5/assets/108501459/a8a364be-e06a-4d52-b679-efe8380cf017)

Nesse contexto, no nosso projeto Campanha do Quilo, vamos focar nas seguintes características para nossa aplicação:

1- **Funcionalidade**  
 - *Adequação* : Avalia se o software propõe-se a fazer o que é apropriado. Essa métrica será avaliada através da entrega dos requisitos funcionais propostos.
 - *Segurança de acesso* : Avalia se é possível o acesso não autorizado a dados. Essa métrica será avaliada através da implementação da autenticação.

2- **Confiabilidade**  
 - *Tolerância a falhas*: Avalia qual a reação decorrente de falhas. Essa métrica será avaliada através dos testes de usabilidade.   

3- **Usabilidade**  
 - *Apreensibilidade*: Avalia se é fácil aprender a usar. Essa métrica será avaliada através de testes de usabilidade.  
 - *Operacionalidade*: Avalia se é fácil de operar e controlar a operação. Essa métrica será avaliada através de testes de usabilidade. 

4- **Eficiência**  
- *Comportamento em relação ao tempo*: Avalia o tempo de resposta e de processamento. Essa métrica será avaliada através de testes de usabilidade.  
    
5- **Manutenibilidade**  
- *Modificabilidade*: Avalia se fácil modificar e remover defeitos. Essa métrica será avaliada através da implementação de novas funcionalidades no decorrer do projeto.
- *Testabilidade*: Avalia se fácil testar quando se faz alterações. Essa métrica será avaliada durante o desenvolvimento através de testes das novas implementações.

6- **Portabilidade**  
- *Capacidade de ser instaldo*: Avalia a facilidade de ser instalado em outros ambientes.

