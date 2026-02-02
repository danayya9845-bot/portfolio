import Hero from '../components/hero/Hero';
import AboutMe from '../components/about/AboutMe';
import PageWrapper from './../components/animations/PageWrapper';
import FadeWrapper from './../components/animations/FadeWrapper';
export default function Home()
{
    return(
        <PageWrapper>
     <div>
       <FadeWrapper direction="down" duration="700" delay="300">
        <Hero/>
       </FadeWrapper>
       <FadeWrapper direction="up" duration="1000" delay="500">
       <AboutMe/>
       </FadeWrapper>
       </div>
       </PageWrapper>
    );
}