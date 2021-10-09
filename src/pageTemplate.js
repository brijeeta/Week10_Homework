const addTeam = team => {

    // generate managerhtml
    const managerCard = manager => {
        return `
        <!--manager info--> 
        <div class="column is-3-desktop has-text-centered ">
        <aside class="menu has-background-success has-text-black  p-2">
        <h1 class="title">${manager.getName()}</h1>
        <p class="menu-label has-text-black "><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</p>
        <ul class="menu-list ">
            <li class="p-1">ID: ${manager.getId()}</li>     
            <li>Office number: ${manager.getOfficeNumber()}</li>
            <li><a class="has-text-link"href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
        </ul>
        </aside>
        </div>
          `
    }

    // generate engineerhtml
    const engineerCard = engineer => {
        return `
        <!--engineer info--> 
    <div class="column is-3-desktop has-text-centered">
    <aside class="menu has-background-success has-text-black  p-2 ">
    <h1 class="title">${engineer.getName()}</h1>
        <p class="menu-label has-text-black "><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</p>
        <ul class="menu-list">
            <li>ID: ${engineer.getId()}</li>
            <li><a  class="has-text-link" href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">GitHub: ${engineer.getGithub()}</a></li>
            <li><a  class="has-text-link" href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
        </ul>
    </aside>
    </div>
           `
    }

    // generate internhtml  
    const internCard = intern => {
        return `
        <!--intern info--> 
    <div class="column is-3-desktop  has-text-centered">
    <aside class="menu has-background-success has-text-black  p-2">
    <h1 class="title">${intern.getName()}</h1>
        <p class="menu-label has-text-black "><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</p>
        <ul class="menu-list">
            <li class="p-1">ID: ${intern.getId()}</li>   
            <li>School: ${intern.getSchool()}</li>
            <li><a  class="has-text-link" href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
        </ul>
    </aside>
    </div>
          `
    }


    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCard(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern))
        .join("")
    );

    return html.join("");
}

// pagetemplate
const pageTemplate = template => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body class="bodyColor has-background-light">  
    <!--header section  --> 
    <header class="headColor has-background-danger">
    <section class="hero has-text-centered">
        <div class="hero-body">
            <p class="title is-size-2">
                Team Members
            </p>
        </div>
    </section>
    </header>
    <!--team info --> 
    <div class="columns p-6  is-multiline"> 
        ${addTeam(template)}  
    </div>
    </body>
    </html>`
}


module.exports = pageTemplate;