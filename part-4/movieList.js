function MovieList() {
  const rand = Math.floor(Math.random() * 10) + 1;

  return (
    <div>
      <ul>
        <li>First Movie</li>
        <li>Second Movie</li>
        <li>Third Movie</li>
      </ul>
      <p>And the random number of the day is {rand}</p>
    </div>
  );
}
