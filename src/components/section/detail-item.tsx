import capitalize from 'lodash/capitalize';
import Link from 'next/link';
import { Fragment } from 'react';

interface ListItem {
  id: string;
  name: string;
  title?: string;
}

interface Props {
  data: string | number | object;
}

export default function DetailItem({ data }: Props) {
  if (!data) {
    return '-';
  }

  if (typeof data === 'string' || typeof data === 'number') {
    return capitalize(data);
  }

  if (Array.isArray(data)) {
    return data[0] ? data.map(capitalize).join(', ') : '-';
  }

  const itemsKey = Object.keys(data).filter((key) => key !== '__typename')[0];
  const listItems = data[itemsKey] as ListItem[];

  if (!listItems[0]) {
    return '-';
  }

  return listItems.map(({ id, name, title }, index) => (
    <Fragment key={id}>
      {index > 0 && ', '}
      <Link href={`/${itemsKey}/${id}`}>
        <a className="text-blue-400 hover:underline">
          {title || name}
        </a>
      </Link>
    </Fragment>
  ));
}
