var fs = require("fs");
var imagesFolder = './public/static/images/';
var imageDirectory = '/public/static/images/';

//image name prefixer
var deploymentFile = JSON.parse(fs.readFileSync('./deployment.json', 'utf8'));

var prefix = JSON.stringify(deploymentFile.name).replace(/\"/g, "").toLowerCase() + '-';

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
			if(file.includes(prefix)){
				newfile = file;
			}
			//renamefile
			fs.rename(file, newfile, function(err){
				if (err) throw err;
				console.log('Renamed file', file);
			});
		});
	});
});








 