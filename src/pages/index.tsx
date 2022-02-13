import Link from 'next/link';

const LINKS = [{
  href: '/films',
  label: 'Films',
  icon: '🎬',
}, {
  href: '/people',
  label: 'People',
  icon: '👤',
}, {
  href: '/planets',
  label: 'Planets',
  icon: '🪐',
}, {
  href: '/species',
  label: 'Species',
  icon: '🧬',
}, {
  href: '/starships',
  label: 'Starships',
  icon: '🛸',
}];

export default function HomePage() {
  return (
    <ul className="py-12">
      {LINKS.map(({ href, label, icon }) => (
        <li key={href}>
          <Link href={href}>
            <a className="card text-4xl flex items-center space-x-5 p-8 mb-8">
              <div>{icon}</div>
              <div>{label}</div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
