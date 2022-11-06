import { Container, Ul } from './styles';

export function Header() {
    return (
        <Container>
            <Ul>
                <li>
                    <a href="#">Home</a>
                </li>
                
                <div>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </div>

            </Ul>

        </Container>
    );
}