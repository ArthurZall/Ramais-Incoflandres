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
    nome: 'Antonia Nascimento',
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
    nome: 'Niana Bastos',
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
    nome: 'Thatiele Freitas',
    ramal: 9547,
    setor: 'Ambulatório',
    filial: 'Volta Redonda',
  },
  {
    key: '19',
    nome: 'Mayra Costa',
    ramal: 9547,
    setor: 'Ambulatório',
    filial: 'Volta Redonda',
  },
  {
    key: '20',
    nome: 'Raphael Souza',
    ramal: 9565,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '21',
    nome: 'Jonatan Rocha',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '22',
    nome: 'Marcelo Ribas',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '23',
    nome: 'Diego',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '24',
    nome: 'Maycon Dias',
    ramal: 9534,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '25',
    nome: 'Embarque',
    ramal: 9529,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '26',
    nome: 'Cantoneira',
    ramal: 9564,
    setor: 'Cantoneira',
    filial: 'Volta Redonda',
  },
  {
    key: '27',
    nome: 'Carpintaria',
    ramal: 9540,
    setor: 'Área',
    filial: 'Volta Redonda',
  },
  {
    key: '28',
    nome: 'Rafael Rodrigo',
    ramal: 9605,
    setor: 'CMC',
    filial: 'Volta Redonda',
  },
  {
    key: '29',
    nome: 'Shirlei Pires',
    ramal: 9568,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '30',
    nome: 'Daffeny Quadros',
    ramal: 9558,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '31',
    nome: 'Igor Souza',
    ramal: 9577,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '32',
    nome: 'Marli Silva',
    ramal: 9577,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '33',
    nome: 'Roberta Fonseca',
    ramal: 9562,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '34',
    nome: 'Hiago Paiva',
    ramal: 9644,
    setor: 'Departamento Pessoal',
    filial: 'Volta Redonda',
  },
  {
    key: '35',
    nome: 'Walcy Filho',
    ramal: 9522,
    setor: 'Eletromecânica / Manutenção',
    filial: 'Volta Redonda',
  },
  {
    key: '36',
    nome: 'Marcos Ventura',
    ramal: 9566,
    setor: 'Eletromecânica / Manutenção',
    filial: 'Volta Redonda',
  },
  {
    key: '37',
    nome: 'Gilvan Alves',
    ramal: 9543,
    setor: 'Eletromecânica / Manutenção',
    filial: 'Volta Redonda',
  },
  {
    key: '38',
    nome: 'Oficina de Empilhadeira',
    ramal: 9545,
    setor: 'Oficina',
    filial: 'Volta Redonda',
  },
  {
    key: '39',
    nome: 'Vinicius Mattos',
    ramal: 9533,
    setor: 'Linha de Corte',
    filial: 'Volta Redonda',
  },
  {
    key: '40',
    nome: 'Roberto Nunes',
    ramal: 9533,
    setor: 'Qualidade',
    filial: 'Volta Redonda',
  },
  {
    key: '41',
    nome: 'Gildásio Oliveira',
    ramal: 9555,
    setor: 'Qualidade',
    filial: '',
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

