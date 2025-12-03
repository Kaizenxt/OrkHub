import { 
    Col, 
    Container, 
    Row 

} from "./styled"

import {
    GithubLogoIcon, 
    LinkedinLogoIcon, 
    WhatsappLogoIcon
} from "@phosphor-icons/react"

export function Footer(){
    return(
        <Container>
            <Row>
                <Col>
                    © 2025 ronaldo, all rights reserved.
                </Col>
                <Col>
                    <a 
                        href="https://wa.me/5522999998951?text=oi,+manda+foto+da+torre+infernal" 
                        target="_blank" 
                    >
                        <WhatsappLogoIcon 
                            size={32} 
                            className="icon iconWPP"
                        />
                    </a>
                    <a 
                        href="https://www.github.com/ronaldo"
                        target="_blank"
                    >
                        <GithubLogo 
                            size={32} 
                            className="icon iconGHB"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/ronaldo"
                        target="_blank"
                    >
                        <LinkedinLogo 
                            size={32} 
                            className="icon iconLKDN"
                        />
                    </a>

                </Col>
            </Row>
        </Container>
    )
}