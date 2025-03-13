export default function ErrorPage({ toSent }) {
  return (
    <div className="pos-error">
      <div>
        <h2>Go Back to Homepage</h2>
        <button onClick={() => toSent("/")}>Home</button>
      </div>
    </div>
  );
}
