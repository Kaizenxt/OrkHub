import { 
  Container, 
  Row, 
  Col,
  Heart 
} from "./styled"
import {
  GithubLogoIcon, 
  DiscordLogoIcon, 
  WhatsappLogoIcon,
  Heart as HeartIcon
} from "@phosphor-icons/react"

export function Footer(){
  return(
    <Container>
      <Heart>
        <HeartIcon size={28} weight="fill" />
      </Heart>
      
      <Row>
        <Col>
          © 2025 <strong>ronaldo</strong>, all rights reserved.
        </Col>
        <Col>
          <a 
            href="https://wa.me/5522999998951?text=oi,+manda+foto+da+torre+infernal" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsappLogoIcon 
              size={26} 
              className="icon iconWPP"
            />
          </a>
          <a 
            href="https://github.com/Kaizenxt/OrkHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogoIcon 
              size={26} 
              className="icon iconGHB"
            />
          </a>
          <a 
            href="https://discord.gg/UXxbbe3Q94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogoIcon
              size={26} 
              className="icon iconDC"
            />
          </a>
        </Col>
      </Row>
    </Container>
  )
}