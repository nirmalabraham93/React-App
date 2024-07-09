import Sidebar from './Sidebar';
import Header from './Header';
import './Dashboard.css';

function Policies()
{
    return(
        
        <div className="container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <section className="content">
            <h2>Home</h2>
            <p>This is where your main content will go.</p>
        </section>
        </main>
      </div>
    );
}
export default Policies;