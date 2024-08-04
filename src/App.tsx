import { useState } from 'react';
import { FaLightbulb } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`container ${darkMode ? "dark" : "light"}`}>
      <header>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FaLightbulb /> : <MdNightlight />}
          </button>
      </header>

     <section className='wrapper'>
          Welcome
     </section>
    </main>
  );
}

export default App;
