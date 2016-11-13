#Simple image pre-fixer if your project requires you to rename images.

>Run this to rename all your images instead of doing this in image editing software like photoshop.

>npm install


>Change the following vars to match your file system and prefix

```javascript
var imagesFolder = './images';

var imageDirectory = '/images/';

//image name prefixer
var prefix = 'projectName-';
```

> run node prefix.js to rename images