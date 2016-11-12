var fs = require("fs");
var imagesFolder = './images';
var imageDirectory = '/images/';

//image name prefixer
var prefix = 'projectName-';

//Gets initial path
fs.realpath(__dirname, function(err, path){
	if (err) throw err;
	var fileLocation = path;
	//finds images in directory
	fs.readdir(imagesFolder, (err, files) => {
		files.forEach(file => {
			//prefix files
			var newfile = fileLocation + imageDirectory + prefix + file;
			file = fileLocation  + imageDirectory + file;
			//renamefile
			fs.rename(file, newfile, function(err){
				if (err) throw err;
				console.log('Renamed file', file);
			});
		});
	});
});








 