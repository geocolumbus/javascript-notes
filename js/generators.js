// 1
// 2
// 3
// {"done":true}
(function () {
  function* someGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = someGenerator();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  console.log(JSON.stringify(gen.next())); // {"done":true}
}());

console.log('-----------------------------------------------------');

// 0
// 1
// 1
// 2
// 3
// 5
// 8
(function () {
  function* fibonacci() {
    let start = 0; let
      next = 1;
    yield start;
    yield next;
    while (true) {
      const result = start + next;
      start = next;
      next = result;
      yield result;
    }
  }

  const f = fibonacci();
  console.log(f.next().value); // 0
  console.log(f.next().value); // 1
  console.log(f.next().value); // 1
  console.log(f.next().value); // 2
  console.log(f.next().value); // 3
  console.log(f.next().value); // 5
  console.log(f.next().value); // 8
}());
