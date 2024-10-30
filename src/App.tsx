import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
      </main>
    </div>
  );
}

export default App;