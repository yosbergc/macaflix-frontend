import './faq.css'
function Faq() {
    return (
        <section className="landing-section">
            <h2>Preguntas frecuentes</h2>
            <section className="landing-faq-inner">
                <details>
                    <summary>¿Qué es Macaflix?</summary>
                    <div>Macaflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.</div>
                </details>
                <details>
                    <summary>¿Cuánto cuesta Macaflix?</summary>
                    <div>
                        Disfruta MacaFlix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde USD 3,99 hasta USD 7,99 al mes. Sin costos adicionales ni contratos.
                    </div>
                </details>
                <details>
                    <summary>¿Qué puedo ver en Macaflix?</summary>
                    <div>
                        Macaflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.
                    </div>
                </details>
                <details>
                    <summary>¿Quién es Macaco?</summary>
                    <div>
                        Macaco es uno de los emprendedores más influyentes del siglo 21, con su revolucionaria plataforma de streaming con el precio más económico que encontrarás en internet.
                    </div>
                </details>
            </section>
        </section>
    )
}

export { Faq }