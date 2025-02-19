import { Nav } from "./components";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from "./sections";
const App = () => (
  <main className='relative'>
     <Nav/>
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffer/>
    </section>
    <section >
      <CustomerReviews/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className='bg-[#45046A] padding-x padding-t pb-8'>
      <Footer/>
    </section>
  </main>
);

export default App;
