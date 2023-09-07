let cache = {};

let uploadImage = async (file) => {
	// if (cache.imag === file) {
	// 	console.log('el url es:' + img.secure_url);
	// 	return img.secure_url;
	// }
	// cache.imag = file;
	console.log(file);

	let data = new FormData();

	data.append('file', file);
	data.append('upload_preset', 'images');
    data.append('api_key', '997616272318465');

	const res = await fetch(
		'https://api.cloudinary.com/v1_1/ezesortano/image/upload',
		{
			method: 'POST',
			body: data,
		}
	);

	let img = await res.json();

	console.log(img.secure_url);

	return img.secure_url;
};

export default uploadImage;