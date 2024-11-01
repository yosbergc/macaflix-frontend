import { Header } from '../../components/Landing/Header/Header'
import { WhyJoin } from '../../components/Landing/WhyJoin/WhyJoin'
import { Footer } from '../../components/Landing/Footer/Footer'
import { Faq } from '../../components/Landing/Faq/Faq'
function Landing() {
    return (
        <>
            <Header />
            <WhyJoin />
            <Faq />
            <Footer />
        </>
    )
}

export { Landing }