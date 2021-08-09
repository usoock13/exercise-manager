import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.nav`
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #121212;
`;

const Header = ({ headerStyle }) => {
    
    return (
        <header style={headerStyle}>
            <Navigation>
                <div className="logo" style={{ padding: "4rem", boxSizing: "border-box" }}>
                    <Link href="/"><a><img src="http://placehold.it/85x85" alt="" /></a></Link>
                </div>
                <ul>
                    <li> <Link href="/timer"><a>타이머</a></Link> </li>
                    <li> <Link href="/record"><a>기록</a></Link> </li>
                </ul>
            </Navigation>
        </header>
    )
}

export default Header;