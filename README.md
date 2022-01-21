# 09 Node.js: Professional README Generator
I was assigned the development of a node application that utilizes INQUIRER to prompt users into developing a professional README file. This was made possible by the provided User Story, Acceptance Criteria, and the given starter code. 

It was by following the instructions given withen the code in the form of 'TODO:' prompts, that I developed an array of questions that are given to the user on their command line; this was done with the use of the INQUERIER module. In addition, I then generated a new page by using the GENERATEMARKDOWN.js in conjunction with the node file system (fs) module. 

It was through these steps that I was able to successfully create a professional REAME generator. 
 
## Given: User Story
 
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
 
## Given: Acceptance Criteria
 
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
 
## Usage
To use this application, each user must clone the repo into their local machine. Once done, within the command line navigate to the contents folder, and it is there that you will need to insert the 'npm install' command which will download all dependencies. Additionally, it is in the content folder that you will initialize the node application and generate the README by answering all of the prompted questions. 
 
[A walkthrough video for the application](https://drive.google.com/file/d/1VJBWkZ-THRlaXMbkr3-T-XZ1lqfuFN72/view?usp=sharing)

(If this link is broken, then be assured that a copy of the video is included in the assets folder.)
 
## Review
 
In addition to the following link to the repo, I was made to include a sample README that was generated using my developed application, this can be found within the content folder, along with the index.js. 
 
* GitHub Repo: https://github.com/jaime-gg/readme-generator 
 
