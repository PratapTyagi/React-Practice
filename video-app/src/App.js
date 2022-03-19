import "./App.scss";

function App() {
  return (
    <div className="app">
      <h2>Video streamer</h2>
      <iframe
        src="https://www.youtube.com/embed/xc4uOzlndAk"
        aria-hidden="true"
        allowfullscreen
      ></iframe>
      <form className="chat_submit">
        <h3>Comment on video</h3>
        <input type="text" placeholder="Write comment" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
