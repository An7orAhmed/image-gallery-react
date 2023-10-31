import Gallery from "../components/Gallery";
import Header from "../components/Header";

function Home() {
  return (
    <div className="bg-slate-100 pb-10">
      <Header></Header>
      <Gallery></Gallery>
    </div>
  );
}

export default Home;