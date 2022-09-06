///absolute path 
const roadTest = 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md';
const file = 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link';


//readdir
const testDirectory = [
    'md-link2',
    'README.md',
    'README.txt'
];


//listsFile
const resultFile = [
    'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md'
];

const resultDirectory = [
    "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\md-link2\\README.md",
    "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md"
];


//getLinkss
const arrayTestResult = [
    {
        file: "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\md-link2\\README.md",
        href: "https://nodeca.github.io/pica/demo/",
        text: "pica"
    },
    {
        file: "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\md-link2\\README.md",
        href: "https://github.com/nodeca/babelfish/",
        text: "babelfish",
    },
    {
        file: "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md",
        href: "https://nodeca.github.io/pica/demo/",
        text: "pica",
    },
    {
        file: "C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md",
        href: "https://github.com/nodeca/babelfish/",
        text: "babelfish"
    }
];



module.exports={
    roadTest,
    file,
    testDirectory,
    resultFile,
    resultDirectory,
    arrayTestResult
}