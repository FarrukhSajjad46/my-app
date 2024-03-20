import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './theme/ModeToggle';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <Link href='#'>
          <span className="flex items-center justify-center rounded-full overflow-hidden h-16 w-16 hover:rotate-360 transition-transform">
          <Image
            className='img'
            src="/inshot.jpg" 
            alt="Logo" 
            width={80}
            height={80}
          />
        </span>
          </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
              <Link href="/" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">Home</a></Link>
              <Link href="/about" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">About</a></Link>
              <Link href="/about/resume" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">Resume</a></Link>
              <Link href="/about/resume/service" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">Services</a></Link>
              <Link href="/about/resume/service/project" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">Projects</a></Link>
              <Link href="/about/resume/service/project/myblog" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">My Blog</a></Link>
              <Link href="/about/resume/service/project/myblog/contact" legacyBehavior><a className="mr-5 hover:scale-90 inline-block">Contact</a></Link>
            </nav>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
