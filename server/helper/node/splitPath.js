const splitPath = pathString => {
    const pathSegments = [...pathString.split('/')];
    const dirname = pathSegments
            .slice(0, pathSegments.length - 1)
            .join('/') + "/";

    const filename = pathSegments[pathSegments.length - 1];
    console.log(`Created the following from path ${pathString}\nDirectory: ${dirname}\nFilename: ${filename}`);

    return {
        dirname,
        filename
    }
}

module.exports = splitPath;