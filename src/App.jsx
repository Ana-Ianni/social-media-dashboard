import Header from "./components/Header";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

const App = () => {
  return (
    <>
      <div className="bg-pale-blue dark:bg-very-dark-blue-2 h-56 w-full absolute top-0 left-0 rounded-b-2xl" style={{zIndex: -1,}}></div>
      <section className="p-5 dark:bg-very-dark-blue h-full lg:h-screen mt-4">
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  );
}

export default App;