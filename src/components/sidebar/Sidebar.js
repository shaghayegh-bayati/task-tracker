import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-box">
      <h3 className="sidebar-tit">خوش آمدید</h3>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/">
            <MDBIcon fas icon="list" />
            <span>وظایف</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/add-task">
            <MDBIcon far icon="plus-square" />
            <span>وظیفه جدید</span>
          </Link>
        </li>
        <hr className="my-2" />
        <li className="sidebar-item">
          <Link to="/nasa">
            <MDBIcon fas icon="space-shuttle" size="xs" />
            <span>ناسا</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
