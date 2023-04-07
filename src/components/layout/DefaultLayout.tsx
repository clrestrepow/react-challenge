import { LayoutInterface } from '../../interfaces/layoutInterface';
import { Container } from 'reactstrap';

const DefaultLayout = ({children}: LayoutInterface) => {
  return (
    <Container className="bg-light border mt-4" fluid="sm">
      {children}
    </Container>
  )
}

export default DefaultLayout