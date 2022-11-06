import { Grid, Container } from "./styles"

export function Contact() {
    return(
        <Container>
            <span>Contato</span>
            
            <Grid>
                <i className="fa-brands fa-github">
                    <a href="">JailsonPaiva</a>
                </i>

                <i className="fa-brands fa-instagram">
                    <a href="">jailson_spaiva</a>
                </i>

                <i className="fa-brands fa-linkedin">
                    <a href="">Jailson Paiva</a>
                </i>

                <i className="fa-brands fa-whatsapp">
                    <a href="">(65) 99604-7289</a>
                </i>

            </Grid>
        </Container>
    );
};