import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs';
import Pagination from '../Components/Pagination';
import Form from '../Components/Form';
import '../Visual/Css/style.css';

function Register() {
  const breadcrumbPaths = [{ link: '/', title: 'Home' }, { title: 'Register' }];
  return (
    <div className=" container d-flex flex-column min-vh-100">
      <div className="row">
        <div className="col">
          <Breadcrumbs paths={breadcrumbPaths} />
        </div>
      </div>
      <Form />
      <div className="row">
        <div className="col d-flex p-2 bd-highlight justify-content-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
export default Register;
