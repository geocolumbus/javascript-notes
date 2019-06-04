/*jshint esversion: 6 */
// Requires ES2018

for await (const line of readlines(filePath)) {
    console.log(line);
}