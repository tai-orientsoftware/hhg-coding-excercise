import { ColumnsType } from 'antd/lib/table';

type Column = {
  title: string;
  dataIndex: string;
};

const columns: ColumnsType<Column> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
];

export default columns;
