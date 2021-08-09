import Header from './Header';
import styled from 'styled-components';

const Layout = ({children}) => (
    <div className="layout" style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
        <Header headerStyle={{ height: '100%', flexGrow: "1" }} />
        <div className="content_wrap" style={{ height: '100%', flexGrow: "9" }}>
            {children}
        </div>
    </div>
)

export default Layout;