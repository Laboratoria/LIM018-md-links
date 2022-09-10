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

const arrayTeststatus = [
        {
          href: 'https://nodeca.github.io/pica/demo/',
          text: 'pica',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\md-link2\\README.md',
          status: 200,
          message: 'Ok'
        },
        {
          href: 'https://github.com/nodeca/babelfish/',
          text: 'babelfish',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\md-link2\\README.md',
          status: 200,
          message: 'Ok'
        },
        {
          href: 'https://nodeca.github.io/pica/demo/',
          text: 'pica',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md',
          status: 200,
          message: 'Ok'
        },
        {
          href: 'https://github.com/nodeca/babelfish/',
          text: 'babelfish',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-link\\README.md',
          status: 200,
          message: 'Ok'
        }
      ];


      const arrayTeststatusFail = [
        {
          href: 'https://nodecaxxxsgithub.io/pica/demo/',
          text: 'pica',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-linkError\\md-link2\\README.md',
          status: 'Not foundFetchError: request to https://nodecaxxxsgithub.io/pica/demo/ failed, reason: getaddrinfo ENOTFOUND nodecaxxxsgithub.io',
          message: 'Fail'
        },
        
        {
          href: 'https://github.ddcom/nodeca/babelfish/',
          text: 'babelfish',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-linkError\\md-link2\\README.md',
          status: 'Not foundFetchError: request to https://github.ddcom/nodeca/babelfish/ failed, reason: getaddrinfo ENOTFOUND github.ddcom',
          message: 'Fail'
        },
        {
          href: 'https://nodecaxxthub.io/pica/demo/',
          text: 'pica',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-linkError\\README.md',
          status: 'Not foundFetchError: request to https://nodecaxxthub.io/pica/demo/ failed, reason: getaddrinfo ENOTFOUND nodecaxxthub.io',
          message: 'Fail'
        },

        {
          text: 'pica',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-linkError\\README.md',
          status: 'Not found FetchError: request to https://nodecaxxthub.io/pica/demo/ failed, reason: getaddrinfo ENOTFOUND nodecaxxthub.io',
          message: 'Fail'
        },

        {
          href: 'https://gxxthub.com/nodeca/babelfish/',
          text: 'babelfish',
          file: 'C:\\Users\\deleinall\\Desktop\\DELEINA\\LABORATORIA\\LIM018-md-links\\md-linkError\\README.md',
          status: 'Not found FetchError: request to https://gxxthub.com/nodeca/babelfish/ failed, reason: getaddrinfo ENOTFOUND gxxthub.com',
          message: 'Fail'
        }
      ];



module.exports = {
    roadTest,
    file,
    testDirectory,
    resultFile,
    resultDirectory,
    arrayTestResult,
    arrayTeststatus,
    arrayTeststatusFail
};