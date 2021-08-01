exports.create = function (name) {
    return {
        name,
        log() {
            console.log(this.name);
        },
    };
};
