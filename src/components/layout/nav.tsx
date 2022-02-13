import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function Nav() {
  const { pathname } = useRouter();

  return (
    <div className="bg-black pt-5 pb-3 sticky top-0">
      <nav className="md:flex md:items-center max-w-4xl mx-auto">
        <Link href="/">
          <a aria-label="Home page" className="block p-2 text-center">
            <div className="md:hidden">
              <Image
                src="/images/starwars-logo-horizontal.png"
                alt="StarWars"
                width={732 * 0.4}
                height={75 * 0.4}
                quality={1}
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/starwars-logo-stacked.png"
                alt="StarWars"
                width={586 * 0.2}
                height={254 * 0.2}
                quality={1}
              />
            </div>
          </a>
        </Link>

        <ul className="flex justify-around md:ml-auto text-sm md:text-lg">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a
                  className={clsx(
                    'block px-1 py-3 flex-1 uppercase font-bold tracking-wide hover:underline md:px-4',
                    pathname.startsWith(href) && 'text-yellow-400',
                  )}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
