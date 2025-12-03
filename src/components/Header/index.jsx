import Logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { Container, LogoContainer, NavContainer, LinksNavigation } from "./styled";

export function Header() {
    const navigate = useNavigate()

    function handleHomeClick() {
        navigate('/home')
    }

    function handleAboutClick() {
        navigate('/about')
    }

    function handleProfileClick() {
        navigate('/profile')
    }

    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt="OrkHub.svg" />
            </LogoContainer>
            <NavContainer>
                <LinksNavigation onClick={handleHomeClick}>Home</LinksNavigation>
                <LinksNavigation onClick={handleAboutClick}>About </LinksNavigation>
                <LinksNavigation onClick={handleProfileClick}>Profile </LinksNavigation>
            </NavContainer>
        </Container>
    )
};