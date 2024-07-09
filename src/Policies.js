import Sidebar from './Sidebar';
import Header from './Header';
import './Dashboard.css';
import PoliciesTable from './PoliciesTable';

function Policies()
{
    return(
        
        <div className="container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <PoliciesTable />
        </main>
      </div>
    );
}
export default Policies;