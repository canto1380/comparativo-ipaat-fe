import MarcoAdmin from "../Admin/MarcoAdmin";
import HomeContainer from "./HomeContainer";

const Home = () => (
  <MarcoAdmin title="Inicio">
    {(tokenAuth) => <HomeContainer tokenAuth={tokenAuth} />}
  </MarcoAdmin>
);

export default Home;
