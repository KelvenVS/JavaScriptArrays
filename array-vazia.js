const arrayVazia = [];

console.log(arrayVazia);
console.log(arrayVazia.length);
console.log(arrayVazia[0]); // undefined
console.log();

const arrayVazia2 = [, , ,];
console.log(arrayVazia2.length);
arrayVazia2.push(50);
console.log(arrayVazia2.length);
console.log(arrayVazia2[0]);
console.log(arrayVazia2[1]);
console.log(arrayVazia2[2]);
console.log(arrayVazia2[3]);

jantarDeHoje = ['🍔', '🌭', '🍕']

console.log(jantarDeHoje);

jantarDeHoje.pop();
jantarDeHoje.pop();

jantarDeHoje.push('🍳');
jantarDeHoje.push('🥗');
jantarDeHoje.push('🍏');

console.log(jantarDeHoje);