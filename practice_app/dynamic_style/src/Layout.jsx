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
const Div = styled.div({
    color: "red",
    backgroundColor: "#f5f5f5",
    fontSize: "20px"
})

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
            <Div>My name is Abhijit Ranjan</Div>

        </>
    )
}
export default Layout;