import Image from 'next/image';
import Link from 'next/link';

const NavbarItem = ({ title, url }) => {
return (
    <Link legacyBehavior href={url}>
        <li>
            <a className='inline-block h-10 px-4 transition-colors duration-200 cursor-pointer text-primary-low_dark place-items-center hover:bg-primary-red hover:text-white'>
                {title}
            </a>
        </li>
    </Link>
)
}

const Navbar = ({ items }) => {
return (
    <div className='container nav'>
        <nav className='text-[10pt] mx-auto'>
        <ul className='flex items-center justify-center'>
            <li className='px-4 transition-colors duration-200 cursor-pointer place-items-center hover:bg-primary-red'>
                <a href='https://www.gov.ph/' className='py-[3px]'>
                    <Image 
                    className='min-w-[33px]'
                    src="/govlogo.png"
                    alt="Government Logo" 
                    width={33}
                    height={36}
                    />
                </a>
            </li>
            {items.map((item, index) => (
                <NavbarItem key={index} title={item.title} url={item.url}/>
            ))}
        </ul>
    </nav>
    </div>
    )
}

export default Navbar;
