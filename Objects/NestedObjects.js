let obj = {
  a:10,
  b:20,
  c: {
    p:1,
    q:2,
    r: {
      d:90,
    }
  }
}

console.log(obj);  // { a: 10, b: 20, c: { p: 1, q: 2, r: { d: 90 } } }
console.log(obj.a);  // 10
console.log(obj.c);  // { p: 1, q: 2, r: { d: 90 } }
console.log(obj.c.p);  // 1
console.log(obj.c.r);  // { d: 90 }
console.log(obj.c.r.d);  // 90 