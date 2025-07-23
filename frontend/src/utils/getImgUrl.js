function getImgUrl (name) {
    console.log('name', name)
    if (name == "H&M-Logo.svg.png") {
        return new URL(`../assets/books/default.png`, import.meta.url);
    }
    if (name == " https://example.com/hitchhikers-cover.jpg") {
        return new URL(`../assets/books/default1.png`, import.meta.url);
    }
    // If it's an external URL, return as is
    if (name.startsWith('http://') || name.startsWith('https://')) {
        return name;
    }
    return new URL(`../assets/books/${name}`, import.meta.url)
}

export {getImgUrl}