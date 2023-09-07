

const SubirImage = () => {
    let widget_cloudinary = cloudinary.createUploadWidget({
        cloudName : 'ezesortano',
        uploadPreset: 'ixecdrzs'
    }, (err, result) => {
        if(!err && result && result.event === 'success') {
            console.log("Imagen subida con éxito", result.info);
        }
    });

    widget_cloudinary.open()
}

export default SubirImage
