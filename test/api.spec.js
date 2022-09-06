const { absolutePath,
    existPath,
    verifyFileType,
    pahtIsDirectory,
    readDir,
    pathIsMd,
    listFile,
    getLinks,
    linksStatus
} = require('../src/api.js');


const test = require('./test.js')


describe('absolute Path', () => {
    it('Should return an absolute path', () => {
        expect(absolutePath('./md-link/README.md')).toBe(test.roadTest);
    });
});



describe('exist Path', () => {
    it('returns true if the route exist', () => {
        const road = "md-link"
        expect(existPath(road)).toBe(true);
    });

    it('Returns false if the path does not exist', () => {
        const road = "README.js"
        expect(existPath(road)).toBe(false);
    });
});;



describe('verify File Type', () => {
    it('returns true if a file exists', () => {
        expect(verifyFileType(test.roadTest)).toBe(true);
    });
    it('returns false if a file exists', () => {
        expect(verifyFileType(test.file)).toBe(false);
    });
});



describe('pahtIsDirectory', () => {
    it('returns true if it is directory', () => {
        expect(pahtIsDirectory("./md-link")).toBe(true);
    });
    it('return false if not directory', () => {
        expect(pahtIsDirectory(test.roadTest)).toBe(false);
    });
});



describe('readDir', () => {
    it('read a directory', () => {
        expect(readDir('./md-link')).toEqual(test.testDirectory)
    });
});




describe('pathIsMd', () => {
    it(' tipo de extensión de ruta', () => {
        expect(pathIsMd(test.roadTest)).toEqual('.md')
    });
});



describe('listFile', () => {
    it('read file ', () => {
        expect(listFile('./md-link/README.md')).toEqual(test.resultFile);
    });

    it('read Directory', () => {
        expect(listFile('./md-link')).toEqual(test.resultDirectory)
    })

    it('read file when file is not markdown type ', () => {
        expect(listFile('README.txt')).toEqual([]);
    });
});



describe('getLinks', () => {
    it('Search for links and return as an object', () => {
        expect(getLinks('./md-link')).toEqual(test.arrayTestResult);
    });
});

