import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="py-24 md:py-48 text-center">
      <div className="h1">404</div>
      <p className="pb-4">Ooops, page not found</p>
      <Link href="/">
        <a className="text-blue-400 hover:underline">Back to Homepage</a>
      </Link>
    </div>
  );
}
