import { lazy, Suspense } from "react";
import Hero from "./components/hero/Hero"; // Normal import – no lazy

const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      {/* Hero loads immediately – no Suspense needed */}
      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={"loading..."}>
        <section id="services">
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <Portfolio /> {/* No <section> wrapper, matches original */}
      </Suspense>

      <Suspense fallback={"loading..."}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;