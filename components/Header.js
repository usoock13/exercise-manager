import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/"><a>Main</a></Link>
                <Link href="/search"><a>Search</a></Link>
            </nav>
        </header>
    )
}

export default Header;