import Banner from "./components/Banner";
import Header from "./components/Header";
import Row from "./components/Row";
import useMovies from "./hooks/useMovies";
import requests from "./utils/request";

function App() {
  const categories = [
    { title: "Trending Now", request: requests.fetchTrending },
    { title: "Top Rated", request: requests.fetchTopRated },
    { title: "Action Thrillers", request: requests.fetchActionMovies },
    { title: "Comedies", request: requests.fetchComedyMovies },
    { title: "Scary Movies", request: requests.fetchHorrorMovies },
    { title: "Romance Movies", request: requests.fetchRomanceMovies },
    { title: "Documentaries", request: requests.fetchDocumentaries },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header></Header>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner></Banner>
        <section className="space-y-24">
          {categories.map(({ title, request }) => {
            const { movies } = useMovies(request);
            return <Row key={title} title={title} movies={movies} />;
          })}
        </section>
      </main>
      {/*modal*/}
    </div>
  );
}

export default App;
