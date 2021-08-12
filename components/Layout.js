import Header from './Header';
import styled from 'styled-components';

const Layout = ({children}) => (
    <div className="layout" style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
        <Header headerStyle={{ flexGrow: "1", flexBasis: 0 }} />
        <div className="content_wrap" style={{ flexGrow: "7", flexBasis: 0 }}>
            {children}
        </div>
    </div>
)

export default Layout;