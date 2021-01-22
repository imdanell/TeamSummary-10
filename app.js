//code starter from homework file
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//went off of that and built out from there

//manager questions
var team = [];

  async function manager() {
    let answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        default: "Tim"
      },
      {
        type: "number",
        name: "id",
        message: "What is the manager's ID?",
        default: 1
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        default: "tim@gmail.com"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office phone?",
        default: "651-123-4567",
      }
    ]);
    var employee= new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
    team.push(employee);
  };
  
  //engineer questions
  async function engineer() {
    var answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        default: "Sally"
      },
      {
        type: "number",
        name: "id",
        message: "What is the engineer's ID?",
        default: 2
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        default: "sally@gmail.com"
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
        default: "Sally",
      }
    ]);
    var employee= new Engineer(answers.name,answers.id,answers.email,answers.github)
    team.push(employee);
  };

  //intern questions
  async function intern() {
    let answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        default: "Matt"
      },
      {
        type: "number",
        name: "id",
        message: "What is the intern's ID?",
        default: 3
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        default: "intern@gmail.com"
      },
      {
        type: "input",
        name: "school",
        message: "Where did the intern attend school?",
        default: "UofM-Bootcamp",
      }
    ]);
    var employee= new Intern(answers.name,answers.id,answers.email,answers.school)
    team.push(employee);
  };

  const teamAdd = async()=>{
    let answers = await inquirer.prompt(
      {
        type: "list",
        name: "role",
        message: "Choose type of employee to add",
        choices: ["Engineer","Intern"]
      }
    )
    if (answers.role==="Engineer"){
      await engineer();
      shouldWeAddAnother();
    }
    else if (answers.role==="Intern"){
      await intern();
      shouldWeAddAnother();
    }
  }

  //choice to add more profiles or not, if no the page will render as complete!
  const shouldWeAddAnother = async()=>{
    let answers = await inquirer.prompt(
      {
        type: "list",
        name: "role",
        message: "Would you like to add another",
        choices: ["Yes","No"]
      }
    )
    if (answers.role==="Yes"){
      teamAdd();
    }
    else if (answers.role==="No"){
      finish();
    }
    else {
    console.log("Finish")
    }
  }
  
  const buildTeam = async()=>{
    await manager();
    teamAdd();
  }

  const finish = async()=>{

    fs.writeFileSync(outputPath, render(team),"utf-8") 
  }

  buildTeam();