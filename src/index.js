
const apiMdLinks = require('./api.js');

//console.log(apiMdLinks);

const mdLinks = (path, options = { validate: false, stats: false }) => {
    const newPromise = new Promise((resolve, reject) => {
        let links = [];
        if (apiMdLinks.existPath(path) === false) {
            reject(new Error('the route does not exist'));
        } else {
            if (options.validate === true) {
                links = apiMdLinks.linksStatus(path);
                resolve(links)
            } else {
                links = apiMdLinks.getLinks(path);
                resolve(links);
            }
        }
    });
    return newPromise;
}

/*mdLinks('./md-link').then((res)=>{
console.log(res)
})*/

/*mdLinks('./md-link', { validate: true }).then((res) => {
    console.log(res);
});*/


module.exports = mdLinks;