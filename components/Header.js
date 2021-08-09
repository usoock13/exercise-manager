import Link from 'next/link';

const Header = () => {
    
    return (
        <header>
            <nav>
                <Link href="/"><a><img src="http://placehold.it/235x85" alt="" /></a></Link>
                <Link href="/record"><a>기록</a></Link>
            </nav>
        </header>
    )
}

export default Header;