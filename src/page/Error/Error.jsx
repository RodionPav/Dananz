import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Error.scss";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error" id="error-page">
      <div className="error__description">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. LOL</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      <Link to="/" className="error-link">
        Go to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
