import styled from 'styled-components';
const Heading = styled.h1`
color:blue;
background-color:#80808059;
margin:5px;
padding:5px;
`;
const Role = styled.p`
background-color:${({ role }) => role === "Admin" ? "red" : role === "SubAdmin" ? "green" : "blue"};
`;

function Layout({ data, card }) {
    return (
        <>
            {data.map((item) => (
                <div style={card}>
                    <img style={{ width: '200px' }} src={item.image} alt="profile" />
                    <div className="card-body">
                        <h3>{item.name}</h3>
                        <Role role={item.role}>{item.role}</Role>
                    </div>
                </div>))}
            <Heading>hello styled component</Heading>

        </>
    )
}
export default Layout;