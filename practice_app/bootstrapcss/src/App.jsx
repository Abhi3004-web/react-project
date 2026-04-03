import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Column from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
function App() {
  return (
    <>
      <Container>
        <Row>
          <Column>1 isto 1</Column>
        </Row>

      </Container>
      <Button variant="primary">Click me</Button>
      <Button variant="danger">Click me</Button>
      <Button variant="warning">Click me</Button>
      <Stack gap={3}>
        <div className="p-2">first item</div>
        <div className="p-2">2nd item</div>
        <div className="p-2">3rd item</div>
      </Stack>
    </>
  )
}

export default App
