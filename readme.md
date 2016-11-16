#Simple image pre-fixer if your project requires you to prefix your images.

>Run this to rename all your images instead of doing this in image editing software like photoshop.

>npm install


>Change the following vars to match your file system and prefix

You can either define your own prefix
```
var prefix = 'your prefix'
```
 or if you have some sort of build deployment json, you can define the path the the file.
```var = deploymentFile
```
after defining your variables, run
```
node prefix.js
```
to run the prefixr.
