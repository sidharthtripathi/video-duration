const {getVideoDurationInSeconds} = require('get-video-duration');
const fs = require('fs').promises;
const path = require('path');
async function grabVids(pathToFiles){
	const vidFiles = [];
	let files = await fs.readdir(pathToFiles);
	files.forEach(f=>{
		if(path.extname(f) == '.mp4'){
			vidFiles.push(f);
		}
	})
	return vidFiles;
}

async function TotalDuration(pathToFiles){
	let arr = await grabVids(pathToFiles);
	let totalTime = 0;
	for(let i = 0 ; i<arr.length  ; i++){
		let t = await getVideoDurationInSeconds(arr[i]);
		totalTime = totalTime + t;
	}
	return totalTime/60;
}

module.exports = {grabVids,TotalDuration};