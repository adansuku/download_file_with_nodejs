# File Downloader Script

This script downloads files from a specified URL with varying `id_attachment` values and saves them to a local directory.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Setup

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    ```

2. Navigate to the project directory.

    ```bash
    cd your-repo
    ```

3. Install the required dependencies.

    ```bash
    npm install
    ```

## Usage

1. Open the `index.js` file.

2. Modify the `destinationFolder` variable to set the folder where downloaded files will be saved.

    ```javascript
    const destinationFolder = 'downloads'; // Change 'downloads' to your desired folder name
    ```

3. Run the script.

    ```bash
    node index.js
    ```

4. The script will iterate from `id_attachment` 1 to 500, download files, and save them to the specified folder.

## Configuration

- `getUrlWithIdAttachment(idAttachment)`: Function to generate the URL with the modified `id_attachment`.

- `downloadFileFromURL(url)`: Function to download a file from the specified URL and save it locally.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js.
- [content-disposition](https://www.npmjs.com/package/content-disposition): Parse `Content-Disposition` header field.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [axios](https://github.com/axios/axios) and [content-disposition](https://github.com/jshttp/content-disposition) for their excellent libraries.
