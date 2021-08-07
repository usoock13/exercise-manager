import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Main</Link>
                <Link href="/search">Search</Link>
            </nav>
        </header>
    )
}

export default Header;