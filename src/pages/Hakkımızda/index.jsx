import './style.css';
import { Link } from 'react-router-dom';

export function Hakkimizda() {
  return (
    <div className="App">
      <main className="App-main">
        <p>
          Page 2
        </p>

        <Link to="/" className="App-link">
          Previous Page
        </Link>
      </main>
    </div>
  );
}
