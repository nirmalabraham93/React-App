import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import './Dashboard.css';

function Dashboard()
{
    return(
        <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <MainContent />
      </main>
    </div>
    );    
}
export default Dashboard;