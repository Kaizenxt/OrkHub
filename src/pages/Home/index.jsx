import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import {
    Page,
    Sidebar,
    Content,
    ProfileBar,
    Box,
    UserCard,
    MenuItem
} from "./styled"

export function Home() {
    return (
        <Page>

            <Header />

            <Content>

                {/* ==== SIDEBAR ESQUERDA ==== */}
                <Sidebar>
                    <Box>
                        <h3>Menu</h3>
                        <MenuItem>Recados</MenuItem>
                        <MenuItem>Amigos</MenuItem>
                        <MenuItem>Comunidades</MenuItem>
                        <MenuItem>Depoimentos</MenuItem>
                    </Box>

                    <Box>
                        <h3>Comunidades</h3>
                        <MenuItem>Orkhub Nostalgia</MenuItem>
                        <MenuItem>Eu amo programação do ronaldo</MenuItem>
                        <MenuItem>Gatos do Orkhub</MenuItem>
                    </Box>
                </Sidebar>

                {/* ==== FEED CENTRAL ==== */}
                <div style={{ flex: 2 }}>
                    <Box>
                        <h3>Bem-vindo ao OrkHub </h3>
                        <p>
                            Confira o que seus amigos estão fazendo hoje
                        </p>
                    </Box>

                    <Box>
                        <h3>Postagens</h3>
                        <p>Nenhuma postagem ainda... </p>
                    </Box>
                </div>

                {/* ==== PERFIL À DIREITA ==== */}
                <ProfileBar>
                    <UserCard>
                        <img src="https://i.pravatar.cc/200?img=12" alt="Avatar" />
                        <h3>Ronaldo da Silva</h3>
                        <p>Programador(a) Front-end</p>
                    </UserCard>

                    <Box>
                        <h3>Sobre você</h3>
                        <p>Solteiro(a)</p>
                        <p>1500 pontos de amizade</p>
                        <p>Gamer nas horas vagas</p>
                    </Box>
                </ProfileBar>

            </Content>

            <Footer />

        </Page>
    )
}
