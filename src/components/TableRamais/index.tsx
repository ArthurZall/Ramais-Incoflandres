import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

interface DataType {
  key: string;
  nome: string;
  ramal: number;
  setor: string;
  filial: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    nome: 'Jaqueline Cruz',
    ramal: 9572,
    setor: 'Administração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '2',
    nome: 'Kely Oliveira',
    ramal: 9571,
    setor: 'Administração / Faturamento',
    filial: 'Volta Redonda',
  },
  {
    key: '3',
    nome: 'Helena Nascimento',
    ramal: 9552,
    setor: 'Administração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '4',
    nome: 'Carina Santos',
    ramal: 9645,
    setor: 'Administração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '5',
    nome: 'Yasmin Lemos',
    ramal: 9573,
    setor: 'Administração / Financeiro',
    filial: 'Volta Redonda',
  },
  {
    key: '6',
    nome: 'Tatiane Menezes',
    ramal: 9556,
    setor: 'Administração / Financeiro',
    filial: 'Volta Redonda',
  },
  {
    key: '7',
    nome: 'Tatiana Taveira',
    ramal: 9606,
    setor: 'Administração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '8',
    nome: 'Ana Paula Rocha',
    ramal: 9586,
    setor: 'Admisnitração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '9',
    nome: 'Niara Bastos',
    ramal: 9570,
    setor: 'Administração / Fiscal',
    filial: 'Volta Redonda',
  },
  {
    key: '10',
    nome: 'Claudia Galantini',
    ramal: 9512,
    setor: 'Administração / Custos',
    filial: 'Volta Redonda',
  },
  {
    key: '11',
    nome: 'Jaqueline Faria',
    ramal: 9535,
    setor: 'Administração / Custos',
    filial: 'Volta Redonda',
  },
  {
    key: '12',
    nome: 'Jairo Muniz',
    ramal: 9553,
    setor: 'Almoxarifado',
    filial: 'Volta Redonda',
  },
  {
    key: '13',
    nome: 'Almoxarifes',
    ramal: 9519,
    setor: 'Almoxarifado',
    filial: 'Volta Redonda',
  },
  {
    key: '14',
    nome: 'Almoxarifados Insumos',
    ramal: 9584,
    setor: 'Almoxarifado',
    filial: 'Volta Redonda',
  },
  {
    key: '15',
    nome: 'Rulio Pereira',
    ramal: 9574,
    setor: 'Compras',
    filial: 'Volta Redonda',
  },
  {
    key: '16',
    nome: 'Fernanda Maria',
    ramal: 9507,
    setor: 'Compras',
    filial: 'Volta Redonda',
  },
  {
    key: '17',
    nome: 'Fabio Nogueira',
    ramal: 9560,
    setor: 'Compras',
    filial: 'Volta Redonda',
  },
  {
    key: '18',
    nome: 'Vitor Guerra',
    ramal: 9557,
    setor: 'Compras / Supervisão',
    filial: 'Volta Redonda',
  },
  {
    key: '19',
    nome: 'Thatiele Freitas',
    ramal: 9547,
    setor: 'Ambulatório',
    filial: 'Volta Redonda',
  },
  {
    key: '20',
    nome: 'Mayra Costa',
    ramal: 9547,
    setor: 'Ambulatório',
    filial: 'Volta Redonda',
  },
  {
    key: '21',
    nome: 'Raphael Souza',
    ramal: 9565,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '22',
    nome: 'Jonatan Rocha',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '23',
    nome: 'Marcelo Ribas',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '24',
    nome: 'Diego',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '25',
    nome: 'Maycon Dias',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '26',
    nome: 'Embarque',
    ramal: 9529,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '27',
    nome: 'Cantoneira',
    ramal: 9564,
    setor: 'Cantoneira',
    filial: 'Volta Redonda',
  },
  {
    key: '28',
    nome: 'G1',
    ramal: 9598,
    setor: 'G1',
    filial: 'Volta Redonda',
  },
  {
    key: '29',
    nome: 'Carpintaria',
    ramal: 9540,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '30',
    nome: 'Rafael Rodrigo',
    ramal: 9605,
    setor: 'CMC',
    filial: 'Volta Redonda',
  },
  {
    key: '31',
    nome: 'Shirlei Pires',
    ramal: 9568,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '32',
    nome: 'Daffeny Quadros',
    ramal: 9558,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '33',
    nome: 'Igor Souza',
    ramal: 9577,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '34',
    nome: 'Marli Silva',
    ramal: 9531,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '35',
    nome: 'Roberta Fonseca',
    ramal: 9562,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '36',
    nome: 'Hiago Paiva',
    ramal: 9644,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '37',
    nome: 'Walcy Filho',
    ramal: 9522,
    setor: 'Eletromecânica / Manutenção',
    filial: 'Volta Redonda',
  },
  {
    key: '38',
    nome: 'Marcos Ventura',
    ramal: 9566,
    setor: 'Eletromecânica / Manutenção',
    filial: 'Volta Redonda',
  },
  {
    key: '39',
    nome: 'Oficina de Empilhadeira',
    ramal: 9545,
    setor: 'Oficina',
    filial: 'Volta Redonda',
  },
  {
    key: '40',
    nome: 'Vinicius Mattos',
    ramal: 9555,
    setor: 'Linha de Corte',
    filial: 'Volta Redonda',
  },
  {
    key: '41',
    nome: 'Roberto Nunes',
    ramal: 9533,
    setor: 'Qualidade',
    filial: 'Volta Redonda',
  },
  {
    key: '42',
    nome: 'Paulo Roberto',
    ramal: 9604,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '43',
    nome: 'Alexandre Accioly',
    ramal: 9553,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '44',
    nome: 'Jhuan Carlos',
    ramal: 9583,
    setor: 'Laboratório',
    filial: 'Volta Redonda',
  },
  {
    key: '45',
    nome: 'Brenno Andrade',
    ramal: 9583,
    setor: 'Laboratório',
    filial: 'Volta Redonda',
  },
  {
    key: '46',
    nome: 'Rodrigo Kawaguti',
    ramal: 9583,
    setor: 'Laboratório',
    filial: 'Volta Redonda',
  },
  {
    key: '47',
    nome: 'Carolina Soares',
    ramal: 9583,
    setor: 'Laboratório',
    filial: 'Volta Redonda',
  },
  {
    key: '48',
    nome: 'Gabriel Amorim',
    ramal: 9518,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '49',
    nome: 'Guilherme (RQL)',
    ramal: 9504,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '50',
    nome: 'Litografia II',
    ramal: 9559,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '51',
    nome: 'Litografia IV',
    ramal: 9587,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '52',
    nome: 'Litografia V',
    ramal: 9593,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '53',
    nome: 'Litografia III',
    ramal: 9537,
    setor: 'Litografia',
    filial: 'Volta Redonda',
  },
  {
    key: '54',
    nome: 'Envernizadeira III',
    ramal: 9538,
    setor: 'Envernizadeira',
    filial: 'Volta Redonda',
  },
  {
    key: '55',
    nome: 'Oficina de Cilindo',
    ramal: 9592,
    setor: 'Oficina de Cilindro',
    filial: 'Volta Redonda',
  },
  {
    key: '56',
    nome: 'Rodrigo Nogueira',
    ramal: 9576,
    setor: 'Colorista',
    filial: 'Volta Redonda',
  },
  {
    key: '57',
    nome: 'Ronaldo Oliveira',
    ramal: 9544,
    setor: 'Pré-impressão',
    filial: 'Volta Redonda',
  },
  {
    key: '58',
    nome: 'Marcia Carvalho',
    ramal: 9591,
    setor: 'Marketing',
    filial: 'Volta Redonda',
  },
  {
    key: '59',
    nome: 'Diones Amorim',
    ramal: 9691,
    setor: 'Obra Civil',
    filial: 'Volta Redonda',
  },
  {
    key: '60',
    nome: 'Serralheria',
    ramal: 9541,
    setor: 'Serralheria',
    filial: 'Volta Redonda',
  },
  {
    key: '61',
    nome: 'Mario Gabriel',
    ramal: 9502,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '62',
    nome: 'Mario Roberto',
    ramal: 9504,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '63',
    nome: 'Mesa Reunião Diretoria',
    ramal: 9503,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '64',
    nome: 'Diretoria',
    ramal: 9501,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '65',
    nome: 'Sala Reunião Diretoria',
    ramal: 9506,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '66',
    nome: 'Ludimilla Lopes',
    ramal: 9516,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '67',
    nome: 'Vitoria Duarte',
    ramal: 9505,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '68',
    nome: 'Isabella Pires',
    ramal: 9505,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '69',
    nome: 'Jordana Bredo',
    ramal: 9601,
    setor: 'Diretoria',
    filial: 'Volta Redonda',
  },
  {
    key: '70',
    nome: 'Eduardo Louver',
    ramal: 9610,
    setor: 'Superintendência',
    filial: 'Volta Redonda',
  },
  {
    key: '71',
    nome: 'Hadolfo Teixeira',
    ramal: 9687,
    setor: 'Gerência',
    filial: 'Volta Redonda',
  },
  {
    key: '72',
    nome: 'Paulo Vieira',
    ramal: 9508,
    setor: 'Gerência',
    filial: 'Volta Redonda',
  },
  {
    key: '73',
    nome: 'Ricardo Pereira',
    ramal: 9511,
    setor: 'Gerência',
    filial: 'Volta Redonda',
  },
  {
    key: '74',
    nome: 'Jader Santos',
    ramal: 9612,
    setor: 'Comercial',
    filial: 'Volta Redonda',
  },
  {
    key: '75',
    nome: 'Felipe Camilo',
    ramal: 9611,
    setor: 'Superintendência',
    filial: 'Volta Redonda',
  },
  {
    key: '76',
    nome: 'Tatiane Menezes',
    ramal: 9556,
    setor: 'Gerência',
    filial: 'Volta Redonda',
  },
  {
    key: '77',
    nome: 'Joelson Abreu',
    ramal: 9582,
    setor: 'Qualidade',
    filial: 'Volta Redonda',
  },
  {
    key: '78',
    nome: 'Rafael Martins',
    ramal: 9605,
    setor: 'Qualidade',
    filial: 'Volta Redonda',
  },
  {
    key: '79',
    nome: 'Suzamara Nascimento',
    ramal: 9525,
    setor: 'Recursos Humanos',
    filial: 'Volta Redonda',
  },
  {
    key: '80',
    nome: 'RH',
    ramal: 9514,
    setor: 'Recursos Humanos',
    filial: 'Volta Redonda',
  },
  {
    key: '81',
    nome: 'Inez Lobato',
    ramal: 9532,
    setor: 'Refeitório',
    filial: 'Volta Redonda',
  },
  {
    key: '82',
    nome: 'Omar Carvalho',
    ramal: 9608,
    setor: 'SESMT',
    filial: 'Volta Redonda',
  },
  {
    key: '83',
    nome: 'Allan Garcia',
    ramal: 9581,
    setor: 'SESMT',
    filial: 'Volta Redonda',
  },
  {
    key: '84',
    nome: 'Lais Carvalho',
    ramal: 9581,
    setor: 'SESMT',
    filial: 'Volta Redonda',
  },
  {
    key: '85',
    nome: 'Marcelo Moura',
    ramal: 9510,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '86',
    nome: 'Daniel Leal',
    ramal: 9550,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '87',
    nome: 'TI',
    ramal: 9615,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '88',
    nome: 'Dauro Cesar',
    ramal: 9561,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '89',
    nome: 'Glaucio Anjos',
    ramal: 9551,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '90',
    nome: 'Raphael Pedro',
    ramal: 9551,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '91',
    nome: 'Allax Souza',
    ramal: 9563,
    setor: 'Tecnologia da Informação',
    filial: 'Volta Redonda',
  },
  {
    key: '92',
    nome: 'Luiz Nunes',
    ramal: 9517,
    setor: 'Transporte',
    filial: 'Volta Redonda',
  },
  {
    key: '93',
    nome: 'Notista',
    ramal: 9524,
    setor: 'Transporte',
    filial: 'Volta Redonda',
  },
  {
    key: '94',
    nome: 'Programador de Carga',
    ramal: 9523,
    setor: 'Transporte',
    filial: 'Volta Redonda',
  },
  {
    key: '95',
    nome: 'Filipe Pereira',
    ramal: 9542,
    setor: 'Transporte',
    filial: 'Volta Redonda',
  },
  {
    key: '96',
    nome: 'Adhemar Athayde',
    ramal: 9567,
    setor: 'Transporte',
    filial: 'Volta Redonda',
  },
  {
    key: '97',
    nome: 'Carlos Rogerio',
    ramal: 9536,
    setor: 'Precificação',
    filial: 'Volta Redonda',
  },
  {
    key: '98',
    nome: 'Portaria I',
    ramal: 9521,
    setor: 'Portaria',
    filial: 'Volta Redonda',
  },
  {
    key: '99',
    nome: 'Portaria II',
    ramal: 9575,
    setor: 'Portaria',
    filial: 'Volta Redonda',
  },
  {
    key: '100',
    nome: 'Portaria III',
    ramal: 9594,
    setor: 'Portaria',
    filial: 'Volta Redonda',
  },
  {
    key: '101',
    nome: 'Portaria IV',
    ramal: 9585,
    setor: 'Portaria',
    filial: 'Volta Redonda',
  },
  {
    key: '102',
    nome: 'Jaquelina Silva ',
    ramal: 9500,
    setor: 'Telefonista',
    filial: 'Volta Redonda',
  },
  {
    key: '103',
    nome: 'Leonel Freitas',
    ramal: 9546,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '104',
    nome: 'Mariane Furtado',
    ramal: 9603,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '105',
    nome: 'Greice Amaral',
    ramal: 9602,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '106',
    nome: 'Gabriel Amorim',
    ramal: 9518,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '107',
    nome: 'Cassius Brandao',
    ramal: 9518,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '108',
    nome: 'Larissa Fernandes',
    ramal: 9518,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  {
    key: '109',
    nome: 'Giovenazi Gomides',
    ramal: 9580,
    setor: 'PCP',
    filial: 'Volta Redonda',
  },
  //Pinheiral
  {
    key: '110',
    nome: 'Wenderson de Assis',
    ramal: 4001,
    setor: 'PCP',
    filial: 'Pinheiral',
  },
  {
    key: '111',
    nome: 'Marcelo Paiva',
    ramal: 4002,
    setor: 'Coordenador',
    filial: 'Pinheiral',
  },
  {
    key: '112',
    nome: 'Marcelly Tavares',
    ramal: 4003,
    setor: 'tração',
    filial: 'Pinheiral',
  },
  {
    key: '113',
    nome: 'Programador',
    ramal: 4006,
    setor: 'PCP',
    filial: 'Pinheiral',
  },
  {
    key: '114',
    nome: 'PCP',
    ramal: 4005,
    setor: 'PCP',
    filial: 'Pinheiral',
  },
  {
    key: '115',
    nome: 'Marcelo Ferreira',
    ramal: 4011,
    setor: 'Área',
    filial: 'Pinheiral',
  },
  {
    key: '116',
    nome: 'Gabriella Almeida',
    ramal: 4008,
    setor: 'Produção',
    filial: 'Pinheiral',
  },
  {
    key: '117',
    nome: 'Marcus Vinicius',
    ramal: 4012,
    setor: 'Tecnologia da Informação',
    filial: 'Pinheiral',
  },
  {
    key: '118',
    nome: 'Vinicius Mattos',
    ramal: 4007,
    setor: 'Qualidade',
    filial: 'Pinheiral',
  },
  {
    key: '119',
    nome: 'Renata Marques',
    ramal: 4009,
    setor: 'Qualidade',
    filial: 'Pinheiral',
  },
  {
    key: '120',
    nome: 'Estevao Alves',
    ramal: 4010,
    setor: 'SESMT',
    filial: 'Pinheiral',
  },
  {
    key: '121',
    nome: 'Joao Vicotr',
    ramal: 4010,
    setor: 'CMC',
    filial: 'Pinheiral',
  },
  {
    key: '122',
    nome: 'Portaria',
    ramal: 4015,
    setor: 'Portaria',
    filial: 'Pinheiral',
  },
  {
    key: '123',
    nome: 'Almoxarifado',
    ramal: 4013,
    setor: 'Almoxarifado',
    filial: 'Pinheiral',
  },
  //MASAFER
  {
    key: '124',
    nome: 'Valmir Vieira',
    ramal: 9596,
    setor: 'Gerência',
    filial: 'Masafer',
  },
  {
    key: '125',
    nome: 'Marcelly Sant anna',
    ramal: 9597,
    setor: 'Administração',
    filial: 'Masafer',
  },
  {
    key: '126',
    nome: 'Fernanda Barreto',
    ramal: 9596,
    setor: 'Administração',
    filial: 'Masafer',
  },
  {
    key: '127',
    nome: 'Enio Silva',
    ramal: 9597,
    setor: 'Qualidade',
    filial: 'Masafer',
  },
 // guarulhos
 {
  key: '128',
  nome: 'Raquel Rebelatto',
  ramal: 7664,
  setor: 'Administração',
  filial: 'Guarulhos',
},
{
  key: '129',
  nome: 'Matheus Cabral',
  ramal: 7643,
  setor: 'Almoxarifado',
  filial: 'Guarulhos',
},
{
  key: '130',
  nome: 'Almoxarifado',
  ramal: 7667,
  setor: 'Almoxarifado',
  filial: 'Guarulhos',
},
{
  key: '131',
  nome: 'Marcos',
  ramal: 7647,
  setor: 'Balança Aço Carbono',
  filial: 'Guarulhos',
},
{
  key: '132',
  nome: 'Anderson Apolinario',
  ramal: 7661,
  setor: 'Balança Flandres',
  filial: 'Guarulhos',
},
{
  key: '133',
  nome: 'Yago',
  ramal: 7637,
  setor: 'Bomba Combustível',
  filial: 'Guarulhos',
},
{
  key: '134',
  nome: 'Diego Brasil',
  ramal: 7606,
  setor: 'Compra',
  filial: 'Guarulhos',
},
{
  key: '135',
  nome: 'Helio Ferreira',
  ramal: 7625,
  setor: 'Compras',
  filial: 'Guarulhos',
},
{
  key: '136',
  nome: 'Alex Gonçalves',
  ramal: 7659,
  setor: 'Contábil',
  filial: 'Guarulhos',
},
{
  key: '137',
  nome: 'Arlindo Araujo',
  ramal: 7636,
  setor: 'Contábil',
  filial: 'Guarulhos',
},
{
  key: '138',
  nome: 'Dayara Silvestre',
  ramal: 7626,
  setor: 'Contábil',
  filial: 'Guarulhos',
},
{
  key: '139',
  nome: 'Sabrina Silva',
  ramal: 7614,
  setor: 'Financeiro',
  filial: 'Guarulhos',
},
{
  key: '140',
  nome: 'Maria Helena',
  ramal: 7611,
  setor: 'Financeiro',
  filial: 'Guarulhos',
},
{
  key: '141',
  nome: 'Cristian Lapola',
  ramal: 7632,
  setor: 'Controladoria',
  filial: 'Guarulhos',
},
{
  key: '142',
  nome: 'Edna Rodrigues',
  ramal: 7610,
  setor: 'Administração',
  filial: 'Guarulhos',
},
{
  key: '143',
  nome: 'Cozinha',
  ramal: 7617,
  setor: 'Cozinha',
  filial: 'Guarulhos',
},
{
  key: '144',
  nome: 'Kassia Silva',
  ramal: 7632,
  setor: 'Custos',
  filial: 'Guarulhos',
},
{
  key: '145',
  nome: 'Mario Gabriel',
  ramal: 7604,
  setor: 'Diretoria',
  filial: 'Guarulhos',
},
{
  key: '146',
  nome: 'Mario Roberto',
  ramal: 7603,
  setor: 'Diretoria',
  filial: 'Guarulhos',
},
{
  key: '147',
  nome: 'Mayron Gabriel',
  ramal: 7622,
  setor: 'Diretoria',
  filial: 'Guarulhos',
},
{
  key: '148',
  nome: 'Caroline Carroza',
  ramal: 7668,
  setor: 'Financeiro',
  filial: 'Guarulhos',
},
{
  key: '149',
  nome: 'Amanda Rodigues',
  ramal: 7628,
  setor: 'Fiscal',
  filial: 'Guarulhos',
},
{
  key: '150',
  nome: 'Fernando Sangiorgio',
  ramal: 7654,
  setor: 'Frota',
  filial: 'Guarulhos',
},
{
  key: '151',
  nome: 'Antonio Seixas',
  ramal: 7646,
  setor: 'Gerência',
  filial: 'Guarulhos',
},
{
  key: '152',
  nome: 'Luciano Amorim',
  ramal: 7644,
  setor: 'Logística',
  filial: 'Guarulhos',
},
{
  key: '153',
  nome: 'Portaria Pedestre',
  ramal: 7619,
  setor: 'Portaria I',
  filial: 'Guarulhos',
},
{
  key: '154',
  nome: 'Portaria Veiculos',
  ramal: 7635,
  setor: 'Portaria II',
  filial: 'Guarulhos',
},
{
  key: '155',
  nome: 'Sala de Espera',
  ramal: 7645,
  setor: 'Portaria II',
  filial: 'Guarulhos',
},
{
  key: '156',
  nome: 'Sala de Reuniões',
  ramal: 7630,
  setor: 'Presidência',
  filial: 'Guarulhos',
},
{
  key: '157',
  nome: 'Samuel Araujo',
  ramal: 7643,
  setor: 'Recebimento',
  filial: 'Guarulhos',
},
{
  key: '158',
  nome: 'Sala de Reuniões',
  ramal: 7643,
  setor: 'Recepção',
  filial: 'Guarulhos',
},
{
  key: '159',
  nome: 'Fabiana Lessa',
  ramal: 7657,
  setor: 'Recursos Humanos',
  filial: 'Guarulhos',
},
{
  key: '160',
  nome: 'Edinete Braga',
  ramal: 7601,
  setor: 'Diretoria',
  filial: 'Guarulhos',
},
{
  key: '161',
  nome: 'Fernando Sangiorgio',
  ramal: 7654,
  setor: 'PCP',
  filial: 'Guarulhos',
},
{
  key: '162',
  nome: 'Fabiana Marques',
  ramal: 7666,
  setor: 'Qualidade',
  filial: 'Guarulhos',
},
{
  key: '163',
  nome: 'Joao Heitor',
  ramal: 7656,
  setor: 'Tecnologia da Informação',
  filial: 'Guarulhos',
},
{
  key: '164',
  nome: 'Adriana Marsola',
  ramal: 7663,
  setor: 'Vendas',
  filial: 'Guarulhos',
},
{
  key: '165',
  nome: 'Carlos Santos',
  ramal: 7641,
  setor: 'Vendas',
  filial: 'Guarulhos',
},
{
  key: '166',
  nome: 'Dirceu Gomes',
  ramal: 7665,
  setor: 'Vendas',
  filial: 'Guarulhos',
},
{
  key: '167',
  nome: 'Fluxo de folhas',
  ramal: 9554,
  setor: 'Fluxo de folhas',
  filial: 'Volta Redonda',
},
{
  key: '168',
  nome: 'Leandro Gomes',
  ramal: 9681,
  setor: 'Fluxo de folhas',
  filial: 'Volta Redonda',
},












 
  

];

export function TableRamais() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      width: '30%',
      ...getColumnSearchProps('nome'),
    },
    {
      title: 'Ramal',
      dataIndex: 'ramal',
      key: 'ramal',
      width: '20%',
      ...getColumnSearchProps('ramal'),
    },
    {
      title: 'Setor',
      dataIndex: 'setor',
      key: 'setor',
      ...getColumnSearchProps('setor'),
      sorter: (a, b) => a.setor.length - b.setor.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Filial',
      dataIndex: 'filial',
      key: 'filial',
      ...getColumnSearchProps('filial'),
      sorter: (a, b) => a.filial.length - b.filial.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

