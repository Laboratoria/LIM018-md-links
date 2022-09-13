const { 
    absolutePath,
    existPath,
    verifyFileType,
    pahtIsDirectory,
    readDir,
    pathIsMd,
    listFile,
    getLinks,
} = require('../src/api.js');

const dataTest = require('./dataTest.js');




describe('absolute Path', () => {
    it('Should return an absolute path', () => {
        expect(absolutePath('./md-link/README.md')).toBe(dataTest.roadTest);
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
        expect(verifyFileType(dataTest.roadTest)).toBe(true);
    });
    it('returns false if a file exists', () => {
        expect(verifyFileType(dataTest.file)).toBe(false);
    });
});



describe('pahtIsDirectory', () => {
    it('returns true if it is directory', () => {
        expect(pahtIsDirectory("./md-link")).toBe(true);
    });
    it('return false if not directory', () => {
        expect(pahtIsDirectory(dataTest.roadTest)).toBe(false);
    });
});



describe('readDir', () => {
    it('read a directory', () => {
        expect(readDir('./md-link')).toEqual(dataTest.testDirectory)
    });
});




describe('pathIsMd', () => {
    it(' tipo de extensión de ruta', () => {
        expect(pathIsMd(dataTest.roadTest)).toEqual('.md')
    });
});


describe('listFile', () => {
    it('read file ', () => {
        expect(listFile('./md-link/README.md')).toEqual(dataTest.resultFile);
    });

    it('read Directory', () => {
        expect(listFile('./md-link')).toEqual(dataTest.resultDirectory)
    })

    it('read file when file is not markdown type ', () => {
        expect(listFile('README.txt')).toEqual([]);
    });
});



describe('getLinks', () => {
    it('Search for links and return as an object', () => {
        expect(getLinks('./md-link')).toEqual(dataTest.arrayTestResult);
    });
});



describe('linksStatus', () => {
    it('Get infoStats to file', () => {
        expect(linksStatus()).toEqual(dataTest.result);
    });
});
