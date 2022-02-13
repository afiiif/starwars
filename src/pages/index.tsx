import Link from 'next/link';

const LINKS = [{
  href: '/films',
  label: 'Films',
}, {
  href: '/people',
  label: 'People',
}, {
  href: '/planets',
  label: 'Planets',
}, {
  href: '/species',
  label: 'Species',
}, {
  href: '/starships',
  label: 'Starships',
}];

export default function HomePage() {
  return (
    <ul>
      {LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>
            <a className="card">{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
