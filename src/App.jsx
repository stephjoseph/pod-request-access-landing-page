import Header from "./components/Header";
import Main from "./components/Main";
import patternDots from "./images/desktop/bg-pattern-dots.svg";

function App() {
  return (
    <div className="App relative flex h-[100vh] w-full  max-w-[26.75rem] flex-col  items-center md:max-w-[64rem] md:items-start xl:max-w-[96rem]">
      <Header />
      <Main />
      <div className="absolute left-[3.9vw] top-[119.79vw] hidden md:block xl:top-[49.86vw] xl:left-[83.88vw]">
        <img src={patternDots} alt="" />
      </div>
    </div>
  );
}

export default App;
