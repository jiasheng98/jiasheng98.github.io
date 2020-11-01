import Header from "./header";
import Footer from "./footer";

export default props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
