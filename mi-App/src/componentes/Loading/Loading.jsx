const Loading = ({ greeting }) => {
  return (
    <div style={{ padding: 120, textAlign: "center" }}>
      <h1 className="text-bg-primary">{greeting}</h1>
      <br></br>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
