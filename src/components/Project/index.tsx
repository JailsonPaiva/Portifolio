import { Container } from "./styles"

import  linktree  from "../../assets/linktree.png"
import clone from "../../assets/clone.png"

export function Project() {
    return(
        <Container>
            <span>Projetos</span>

            <div>
                <img src={linktree} alt="Imagem projeto 1" />

                <div>
                    <h3>Linktree</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

            </div>

            <div>

                <div>
                    <h3>Site clone</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

                <img src={clone} alt="Imagem projeto 1" />
            </div>

        </Container>
    );
}; 