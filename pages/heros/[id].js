import { useRouter } from 'next/router'
// COMPONENTS
import Layout from "../../resources/js/layout";
import Hero from "../../resources/js/components/hero/hero";

const Heros = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <Hero heroId={id} />
        </Layout>
    );
}

export default Heros;
