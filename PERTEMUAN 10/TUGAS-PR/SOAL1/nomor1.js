var a = '';
var b = 11;
for (i = 0; i < b; i++) {
  for (j = 0; j < b - i; j++) {
    a += ' *';
  }
  a += '\n';
}
console.log(a);
