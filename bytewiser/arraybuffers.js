var uint32Arr = new Uint32Array(1);
uint32Arr[0] = Number(process.argv[2]);
var uint16Arr = new Uint16Array(uint32Arr.buffer);
console.log(JSON.stringify(uint16Arr));
