const input = document.querySelector('#text1');
const output = document.querySelector('#text2');
const hashFunc = document.querySelector('#hash-func');
let hashFuncVal = hashFunc.value;

const hashText = val => {
	switch (hashFuncVal) {
		case 'SHA-1':
			{
				let hash = sha1.create();
				hash.update(val);
				output.value = hash.hex();
				if (val === '') output.value = '';
			}
			break;
		case 'SHA-224':
			{
				let hash2 = sha224.create();
				hash2.update(val);
				output.value = hash2.hex();
				if (val === '') output.value = '';
			}
			break;
		case 'SHA-256':
			{
				let hash3 = sha256.create();
				hash3.update(val);
				output.value = hash3.hex();
				if (val === '') output.value = '';
			}
			break;
		case 'SHA-384':
			{
				let hash4 = sha384.create();
				hash4.update(val);
				output.value = hash4.hex();
				if (val === '') output.value = '';
			}
			break;
		case 'SHA-512':
			{
				let hash5 = sha512.create();
				hash5.update(val);
				output.value = hash5.hex();
				if (val === '') output.value = '';
			}
			break;
		default:
			break;
	}
};

hashFunc.addEventListener('change', () => {
	input.value = '';
	output.value = '';
	hashFuncVal = hashFunc.value;
	input.removeEventListener('input', hashText(input.value));
	input.addEventListener('input', hashText(input.value));
});

input.addEventListener('input', () => hashText(input.value));
