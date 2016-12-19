var fs = require("fs");
var imagesFolder = './public/static/images/';
var imageDirectory = '/public/static/images/';

//image name prefixer
var deploymentFile = JSON.parse(fs.readFileSync('./deployment.json', 'utf8'));
var prefixList = ['populate-this', 'with-a-list','of-common-prefixes'];

var prefix = JSON.stringify(deploymentFile.prefix).replace(/\"/g, "").toLowerCase();

//Gets initial path
fs.realpath(__dirname, function(err, path){
	if (err) throw err;
	var fileLocation = path;
	//finds images in directory
	fs.readdir(imagesFolder, (err, files) => {
		files.forEach(file => {

			for(var i = 0; i < prefixList.length; i ++){
				if(file.includes(prefixList[i])){
					var prefixIndex = file.indexOf(prefixList[i]);

					var prefixComparisonArray = file.split('-');
					console.log(typeof(prefixComparisonArray));
					var lengthOfPrefix = prefixList[i].split('-').length;

					prefixComparisonArray = prefixComparisonArray.splice(prefixIndex, lengthOfPrefix-1).join('-') + '-';

					if(prefix === prefixComparisonArray){
						console.log('This image is already prefixed');
					}

					if(prefix !== prefixComparisonArray){
						console.log('This image has an existing prefix that does not match the one that you want to use');

						//remove prefix from filename
						console.log(prefixComparisonArray);

						var newFileName = file.replace(prefixComparisonArray,'');

						//rename file in file system to enable lookup by inital filepath

						newFileName = fileLocation + imageDirectory + newFileName;
						var renamerFile = fileLocation  + imageDirectory + file;
						fs.rename(renamerFile, newFileName, function(err){
							if (err) throw err;
						});

							function secondaryPrefix(){

								fs.readdir(imagesFolder, (err, images) =>{
									images.forEach(image =>{

										secondaryFileRename = fileLocation + imageDirectory + prefix + image;
										initialFile = fileLocation  + imageDirectory + image;
										newfileNoUnderScore = secondaryFileRename.replace(/_/g, '-');

										// check if file already has prefix
										if(image.includes(prefix)){	
											var splitFile = image.split('-');
											newfileNoUnderScore = image;
										}

										//renamefile
										fs.rename(initialFile, secondaryFileRename, function(err){
											if (err) throw err;
										});

										console.log('File was prefixed');

									});

								});
							}
							setTimeout(secondaryPrefix, 1000);
						return false;
					}
				}
			}

			//Initial Prefix of files

			function initialPrefix(){
				newfile = fileLocation + imageDirectory + prefix + file;
				file = fileLocation  + imageDirectory + file;
				newfileNoUnderScore = newfile.replace(/_/g, '-');

				// check if file already has prefix
				if(file.includes(prefix)){	
					var splitFile = file.split('-');
					newfileNoUnderScore = file;
				}
				
				//renamefile
				fs.rename(file, newfileNoUnderScore, function(err){
					if (err) throw err;

				});

				console.log('File was prefixed');
			}
			initialPrefix();
		});
	});
});








 
