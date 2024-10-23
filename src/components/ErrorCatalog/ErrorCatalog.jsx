/* eslint-disable react/prop-types */
function ErrorCatalog({ axiosData }) {
  return (
    <div className="errorCatalog">
      <h2 className="errorCatalog__title">ERROR TAIL WIND</h2>
      <button className="errorCatalog__button" onClick={() => axiosData()}>
        refresh catalog
      </button>
    </div>
  );
}
export default ErrorCatalog;
