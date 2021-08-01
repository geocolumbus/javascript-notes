// ES9 functionality

async function* getPosts(...args) {
    for (const i of args) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
        const json = await res.text();
        yield json;
    }
}

async function asyncIterator() {
    for await (const i of getPosts(1, 2, 3, 4, 5)) {
        console.log(i);
    }
}
