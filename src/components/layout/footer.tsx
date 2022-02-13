import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black px-3 py-3 md:px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          Made by{' '}
          <a
            href="https://www.linkedin.com/in/m-afifudin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Afifudin
          </a>
        </div>
        <div>
          <a
            href="https://github.com/afiiif/starwars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline block px-2 py-1"
            aria-label="Github link"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
