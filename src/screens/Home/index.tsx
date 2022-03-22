import Clock from '../../components/Clock';
import Navbar from '../../components/Navbar';

import { Container, ContainerTimer, SpanText, Title, TitleName } from './styles';

function Home() {
    return (
        <>
        <Container>
            <Navbar />

            <ContainerTimer>
                <Title>Olá, <TitleName>Leonardo</TitleName></Title><br></br>
                <SpanText>Bem-vindo de volta à nossa plataforma de gestão do ponto</SpanText>
            </ContainerTimer>

            <Clock></Clock>

        </Container>
        </>
    );
}

export default Home;