import { Container } from "./styles"

import profile from "../../assets/profile.jpeg"

export function Profile() {
    return(
        <Container>
            <img src={profile} alt="Foto de Perfil" />

            <div>
                <h2>Jailson Paiva</h2>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequatur officia nesciunt sed aperiam animi, ipsam repellendus molestiae quae, voluptate laborum harum ipsum obcaecati a dicta quos quibusdam expedita cupiditate!</p>
            </div>

          
        </Container>
    );

};