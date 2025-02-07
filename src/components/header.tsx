import Link from 'next/link';
import Logo from './logo';

const navItems = [
  { title: 'Case Studies', href: '#case-studies' },
  { title: 'About + CV', href: '#about-cv' },
  { title: 'What and How', href: '#what-how' },
  { title: 'Connect', href: '#connect' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="text-white text-lg hover:underline cursor-pointer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
