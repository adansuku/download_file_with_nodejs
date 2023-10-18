const axios = require('axios');
const fs = require('fs');
const path = require('path');
const contentDisposition = require('content-disposition');

const destinationFolder = 'downloads'; // Folder where the files will be saved

async function downloadFileFromURL(url) {
	try {
		const response = await axios.get(url, { responseType: 'stream' });

		const contentDispositionHeader = response.headers['content-disposition'];
		const { parameters: { filename } } = contentDisposition.parse(contentDispositionHeader);

		console.log(filename);
		// Get the filename from the URL
		const fileName = filename;
		const fullPath = path.join(destinationFolder, fileName);

		// Save the file to the destination folder
		const writer = fs.createWriteStream(fullPath);
		response.data.pipe(writer);

		await new Promise((resolve, reject) => {
			writer.on('finish', resolve);
			writer.on('error', reject);
		});

		console.log(`File downloaded with name: ${fileName}`);
	} catch (error) {
		console.error('Error downloading the file:', error);
	}
}

// Function to get the URL with the modified id_attachment
function getUrlWithIdAttachment(idAttachment) {
	return `https://www.xxxxxxx.com/es/index.php?controller=attachment&id_attachment=${idAttachment}`;
}

// Create the destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
	fs.mkdirSync(destinationFolder);
}

// Create an array of promises and use Promise.all to execute them in parallel
const downloadPromises = [];

for (let idAttachment = 1; idAttachment <= 500; idAttachment++) {
	const url = getUrlWithIdAttachment(idAttachment);
	downloadPromises.push(downloadFileFromURL(url));
}

Promise.all(downloadPromises)
	.then(() => console.log('All downloads have finished'))
	.catch(error => console.error('Error in some download:', error));
