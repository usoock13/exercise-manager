import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.nav`
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgb(77,81,211);
`;
const ListItem = styled.li`
    width: 100%;
    margin: 1rem 0;
    color: #fff;
    font-size: 1.8rem;
`

const Header = ({ headerStyle }) => {
    
    return (
        <header style={headerStyle}>
            <Navigation>
                <div className="logo" style={{ padding: "4rem", boxSizing: "border-box" }}>
                    <Link href="/"><a><img src="http://placehold.it/85x85" alt="" /></a></Link>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItem> <Link href="/timer"><a>타이머</a></Link> </ListItem>
                    <ListItem> <Link href="/record"><a>기록</a></Link> </ListItem>
                    <ListItem> <Link href="/counter"><a>카운터</a></Link> </ListItem>
                </ul>
            </Navigation>
        </header>
    )
}

export default Header;