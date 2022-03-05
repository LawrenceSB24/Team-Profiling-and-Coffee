const coffeeGroup = (teamMates) => {
    console.log(teamMates);
    const teamWeb = [];

    const managerSuite = manager => {
        console.log(manager);
        let managerWeb = `
        <div class = 'card'>
            <div class = 'card-header'>
                ${manager.name} <br/>
                <ul>
                    <li> Id: ${manager.employId} </li>
                    <li> Email Address:<a href = ${manager.email}> ${manager.email}</a></li>
                    <li> Office Number: ${manager.officeId} </li>
                </ul>
            </div>
        </div>`;
        teamWeb.push(managerWeb);
    }

    const engineerSuite = engineer => {
        console.log(engineer);
        let engineerWeb = `
        <div class = 'card'>
            <div class = 'card-header'>
                ${engineer.name} <br/>
                <ul>
                    <li> Id: ${engineer.employId} </li>
                    <li> Email Address:<a href = ${engineer.email}> ${engineer.email}</a></li>
                    <li> GitHub Username: ${engineer.gitName} </li>
                </ul>
            </div>
        </div>`;
        teamWeb.push(engineerWeb);
    }

    const internSuite = intern => {
        console.log(intern);
        let internWeb = `
        <div class = 'card'>
            <div class = 'card-header'>
                ${intern.name} <br/>
                <ul>
                    <li> Id: ${intern.employId} </li>
                    <li> Email Address:<a href = ${intern.email}> ${intern.email}</a></li>
                    <li> GitHub Username: ${intern.gitName} </li>
                </ul>
            </div>
        </div>`;
        teamWeb.push(internWeb);
    }

    for( let i = 0; i < teamMates.length; i++) {
        if(teamMates[i].getRole() === "Manager") {
            managerSuite(teamMates[i]);
        }

        if (teamMates[i].getRole() === "Engineer") {
            engineerSuite(teamMates[i]);
        }

        if (teamMates[i].getRole() === "Intern") {
            internSuite(teamMates[i]);
        }
    }

    return teamMates.join('');
}

module.exports = teamMates => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel = "stylesheet" href = "../dist/style.css"

        <title>Team Profiling and Coffee</title>
    </head>
    <body>
        <div class = 'jumbotron display-4'> My Team </div>

        <main>
            ${coffeeGroup(teamMates)}
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>

    `
}
