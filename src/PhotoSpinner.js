const allFiles = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('./images/', true, /.*/));
console.log(allFiles);


class PhotoSpinner {
    constructor(div) {
        this.allFiles
        this.div = div;
        this.counter = -1;
        this.direction = 1;
        this.sourceFiles = Object.keys(allFiles)
        this.length = this.sourceFiles.length;
        document.getElementById(this.div).src = allFiles[this.sourceFiles[0]]
    }

    getNextCounter() {
        this.counter = this.counter + this.direction;
        if (this.counter < 1) this.direction = 1;
        if (this.counter > this.length - 2) this.direction = -1;
    }

    getNextPhoto() {
        this.getNextCounter();
        return allFiles[this.sourceFiles[this.counter]];
    }

    switchPhoto() {
        if (this.length > 1) {
            let photo = this.getNextPhoto();
            document.getElementById(this.div).src = photo;
        }
    }
}

export { PhotoSpinner };
