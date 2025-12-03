import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
    Page,
    Content,
    Box,
    Title,
    Paragraph,
    Image
} from "./styled";
import logo from "../../assets/logo.svg"

export function About() {
    return (
        <Page>
            <Header />

            <Content>

                <Box>
                    <Title>Sobre o Projeto</Title>
                    <Paragraph>
                        Este projeto é inspirado no clássico Orkut, recriando sua identidade visual
                        nostálgica e trazendo de volta a sensação da rede social mais querida do Brasil.
                    </Paragraph>

                    <Paragraph>
                        Aqui buscamos resgatar elementos icônicos como o layout em colunas, perfis
                        personalizados, comunidades e aquele toque especial de amizade que marcou
                        toda uma geração.
                    </Paragraph>
                </Box>

                <Box>
                    <Title>Quem criou?</Title>
                    <Paragraph>
                        Este projeto foi desenvolvido como estudo e demonstração de habilidades em:
                    </Paragraph>

                    <ul>
                        <li>React</li>
                        <li>styled-components</li>
                        <li>React Router</li>
                        <li>Componentização</li>
                    </ul>
                </Box>

                <Box>
                    <Title>O Orkut ainda vive</Title>
                    <Paragraph>
                        Embora a plataforma original não exista mais, a gente criou isso para nosso projeto, nostalgia e diversão.
                    </Paragraph>

                    <Image
                        src={ logo }
                        alt="OrkHub Logo"
                    />
                </Box>

            </Content>

            <Footer />
        </Page>
    );
}
