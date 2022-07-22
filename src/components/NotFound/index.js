import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="d-flex align-items-center column bg-wht">
      <h2>Page Not Found</h2>
      <p>Well, that's disapponting.</p>
      <p>
        <Link to="/">Visit our Homepage</Link>
      </p>
    </main>
  );
};

export default NotFound;
