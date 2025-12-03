import error from '../../assets/error.png'
import { Container } from './styled'

export function Error() {
    return (
        <>
            <Container>
                <a href="/login">
                    <img src={error} alt="404 not found" />
                </a>
            </Container>
        </>
    )
}