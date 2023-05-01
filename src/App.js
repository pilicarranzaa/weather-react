import "./styles.css";
import Header from "./Header";
import NextDays from "./NextDays";
import Search from "./Search";
import Sign from "./Sign";

function App() {
  return (
    <div className="body-wrap">
      <div className="container body defaultBg py-3">
        <Header />
        <NextDays />
        <Search />
      </div>
      <Sign />
    </div>
  );
}

export default App;
