import { Container, ContainerProject } from "./styles"

import  linktree  from "../../assets/linktree.png"
import clone from "../../assets/clone.png"
import concipe from "../../assets/concipe.png"
import blog from "../../assets/blog.png"

export function Project() {
    return(
        <Container>
            <span>Projetos</span>

            <ContainerProject>
                <img src={linktree} alt="Imagem projeto 1" />

                <div>
                    <h3>Linktree</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

            </ContainerProject>

            <ContainerProject>

                <div>
                    <h3>Site clone</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

                <img src={clone} alt="Imagem projeto 1" />
            </ContainerProject>

            <ContainerProject>
                <img src={concipe} alt="Imagem projeto 1" />

                <div>
                    <h3>Concipe</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

            </ContainerProject>

            <ContainerProject>
                <div>
                    <h3>Blog</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus minima temporibus, qui, delectus nihil iste debitis modi perferendis magnam culpa ipsum maiores odio facilis officia fugiat ex unde eos perspiciatis.</p>
                </div>

                <img src={blog} alt="Imagem projeto 1" />
            </ContainerProject>

        </Container>
    );
}; 