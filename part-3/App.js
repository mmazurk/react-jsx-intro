function App() {
  return (
    <div>
      <Person
        name="Mark"
        age={52}
        hobbies={["creating bugs", "reading", "motorcycling"]}
      />
      <Person
        name="Megan"
        age={33}
        hobbies={["indie music", "working", "not listening"]}
      />
      <Person
        name="Anne"
        age={12}
        hobbies={["coffee", "enjoying podcasts", "The Daily Show"]}
      />
    </div>
  );
}
