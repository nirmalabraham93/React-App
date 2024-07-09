import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
      };
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Claims Portal</h2>
            </div>
            <nav className="nav">
                <ul>
                    <li><a onClick={() => handleNavigation('/home')}>Home</a></li>
                    <li><a onClick={() => handleNavigation('/policies')}>Policies</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;