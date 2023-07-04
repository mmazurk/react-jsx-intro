function App() {
  return (
    <div>
      <h1>My Movies</h1>
      <MovieList />
      <MarkProps firstName="Bjorn" lastName="Nitmo" status={false} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("test"));
