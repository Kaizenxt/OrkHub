import error from '../../assets/404.svg'
import { Container } from './styled'

export function Error() {
    return (
        <Container>
            <img src={error} alt="404 not found" />
        </Container>
    )
}