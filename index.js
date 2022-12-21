var fs = require('fs');
var inquirer = require('inquirer');
const Employee = require('./lib/employee')
const Manager = require("./lib/manager");
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer');
const { Console } = require('console');


var htmlCards = ''


function html() {

    
    const htmlHead =
        `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Team Profile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="">
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class=bg-white>
<!--header-->
<header class="bg-blue-500">
<h1 class="text-5xl text-center py-20">Meet Our Team</h1>
</header>
<!--Grid layout-->
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20 pt-5">`

  
    const htmlEnd =
        `</section>
</body>
</html>`

    
    let htmlFull = htmlHead + htmlCards + htmlEnd

    
    console.log("Finished! File saved as index.html")
    fs.writeFile("index.html", htmlFull, function (err) { if (err) throw err; })
}


var outputAns = []



console.log("\n***\n Welcome to OOP Team Generator! \nType your response the press enter. \n***\n")

//User prompts
inquirer
    //Create a manager
    .prompt([
        {
            message: 'Manager name:',
            type: 'input',
            name: 'manName',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a name")
                }
            }
        },
        {
            message: 'Manager ID:',
            type: 'input',
            name: 'manId',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an ID")
                }
            }
        },
        {
            message: 'Manager email address:',
            type: 'input',
            name: 'manEmail',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an email")
                }
            }
        },
        {
            message: 'Manager office number:',
            type: 'input',
            name: 'manOffice',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter an office number")
                }
            }
        },
        {
            message: 'Choose next employee below:',
            type: 'list',
            name: 'add',
            choices: [
                "Intern",
                "Engineer",
                "I am finished",
            ]
        }

    ])
    
    .then((r) => {
        outputAns.push(r)
        
        var newMg = new Manager(r.manName, r.manId, r.manEmail, r.manOffice);

        let mgName = newMg.getName();
        let mgID = newMg.getId();
        let mgEmail = newMg.getEmail();
        let mgOffice = newMg.getOffice();
        let role = newMg.getRole();

        //Create new employee card with Manager data
        var card =
            `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${mgName}</h1>
            <h2 class="text-lg text-slate-300">ID: ${mgID}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${role}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${mgEmail}">${mgEmail}</a></div>
            <div class="ml-3 mb-3">Office: ${mgOffice}</div>
            </article>`;

        
        htmlCards += card

        
        if (r.add == "Intern") {
            addIntern()
        }
        
        else if (r.add == "Engineer") {
            addEngineer();
        }
        
        else {
            html();
        }
    })

function addIntern() {
    inquirer
        
        .prompt([
            {
                message: "Intern name:",
                type: "input",
                name: "intName",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name")
                    }
                }
            },
            {
                message: "Intern ID:",
                type: "input",
                name: "intId",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter an ID")
                    }
                }
            },
            {
                message: "Intern email:",
                type: "input",
                name: "intEmail",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter an email")
                    }
                }
            },
            {
                message: "Intern school:",
                type: "input",
                name: "intSchool",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter a school")
                    }
                }
            },
            {
                message: 'Choose next employee below:',
                type: 'list',
                name: 'add',
                choices: [
                    "Intern",
                    "Engineer",
                    "I am finished",
                ]
            }])

        
        .then((r) => {
            outputAns.push(r)
            
            var newInt = new Intern(r.intName, r.intId, r.intEmail, r.intSchool);

            
            let intName = newInt.getName();
            let intID = newInt.getId();
            let intEmail = newInt.getEmail();
            let intSchool = newInt.getSchool();
            let role = newInt.getRole();

            var card =
                `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${intName}</h1>
            <h2 class="text-lg text-slate-300">ID: ${intID}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${role}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${intEmail}">${intEmail}</a></div>
            <div class="ml-3 mb-3">Education: ${intSchool}</div>
            </article>`

            
            htmlCards += card

            
            if (r.add == "Intern") {
                addIntern()
            }
            
            else if (r.add == "Engineer") {
                addEngineer();
            }
            
            else {
                html();
            }
        })
}

function addEngineer() {
    inquirer
        
        .prompt([
            {
                message: "Engineer name:",
                type: "input",
                name: "engName",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name")
                    }
                }
            },
            {
                message: "Engineer ID:",
                type: "input",
                name: "engId",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter an ID")
                    }
                }
            },
            {
                message: "Engineer email:",
                type: "input",
                name: "engEmail",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter an email")
                    }
                }
            },
            {
                message: "Engineer GitHub username:",
                type: "input",
                name: "engGH",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter a GitHub username")
                    }
                }
            },
            {
                message: 'Choose next employee below:',
                type: 'list',
                name: 'add',
                choices: [
                    "Intern",
                    "Engineer",
                    "I am finished",
                ]
            }])

       
        .then((r) => {
            outputAns.push(r)
            
            var newEng = new Engineer(r.engName, r.engId, r.engEmail, r.engGH);

      
            let engName = newEng.getName();
            let engID = newEng.getId();
            let engEmail = newEng.getEmail();
            let engGH = newEng.getGh();
            let role = newEng.getRole();

            var card =
                `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${engName}</h1>
            <h2 class="text-lg text-slate-300">ID: ${engID}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${role}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${engEmail}">${engEmail}</a></div>
            <div class="ml-3 mb-3 hover:text-blue-700 hover:font-semibold"><a href = "https://github.com/${engGH}">GitHub</a></div>
            </article>`

         
            htmlCards += card


            if (r.add == "Intern") {
                addIntern()
            }
            
            else if (r.add == "Engineer") {
                addEngineer();
            }
            
            else {
                html();
            }
        })
}
