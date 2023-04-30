import Link from 'next/link';

const NavbarItem = ({ title, url }) => {
return (
    <Link legacyBehavior href={url}>
        <a className="px-4 py-2 text-gray-500 hover:white">
        {title}
        </a>
    </Link>
)
}

const Navbar = ({ items }) => {
return (
    <div>
    {items.map((item, index) => (
        <NavbarItem key={index} title={item.title} url={item.url} />
    ))}
    </div>
)
}

export default Navbar;
