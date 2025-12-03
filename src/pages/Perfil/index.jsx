import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
    Page,
    Content,
    LeftColumn,
    RightColumn,
    Box,
    Avatar,
    InfoText,
    Title,
    Badge,
    StatsBox,
    StatItem
} from "./styled";

export function Profile() {
    return (
        <Page>
            <Header />

            <Content>

                {/* === COLUNA ESQUERDA === */}
                <LeftColumn>

                    <Box style={{ textAlign: "center" }}>
                        <Avatar
                            src="https://i.pravatar.cc/200?img=12"
                            alt="Foto do usuário"
                        />
                        <h2>ronaldo da Silva</h2>
                        <InfoText>Desenvolvedor Frontend</InfoText>
                        <InfoText>Pintopolis - Brasil</InfoText>
                    </Box>

                    <Box>
                        <Title>Badges</Title>

                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            <Badge>Amigo Confiável</Badge>
                            <Badge>Popular</Badge>
                            <Badge>Comunicativo</Badge>
                            <Badge>Gamer</Badge>
                        </div>
                    </Box>

                    <Box>
                        <Title>Quem sou eu?</Title>
                        <InfoText>
                            Apaixonado por tecnologia, games e nostalgia.
                            Adoro criar interfaces modernas com inspiração retrô
                        </InfoText>
                    </Box>
                </LeftColumn>

                {/* === COLUNA DIREITA === */}
                <RightColumn>

                    <StatsBox>
                        <StatItem>
                            <strong>152</strong>
                            <span>Amigos</span>
                        </StatItem>
                        <StatItem>
                            <strong>37</strong>
                            <span>Comunidades</span>
                        </StatItem>
                        <StatItem>
                            <strong>12</strong>
                            <span>Depoimentos</span>
                        </StatItem>
                    </StatsBox>

                    <Box>
                        <Title>Depoimentos </Title>
                        <InfoText>
                            Você ainda não recebeu depoimentos...
                            <br />
                            Envie amor e receba de volta 💜
                        </InfoText>
                    </Box>

                    <Box>
                        <Title>Atividades Recentes</Title>
                        <InfoText>• ronaldo entrou na comunidade “Programadores senai.</InfoText>
                        <InfoText>• ronaldo comentou em uma foto.</InfoText>
                        <InfoText>• ronaldo atualizou seu status.</InfoText>
                    </Box>
                </RightColumn>

            </Content>

            <Footer />
        </Page>
    );
}
