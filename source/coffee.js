const coffeeGroup = (teamMates) => {
    console.log(teamMates);
    const teamWeb = [];

    const managerSuite = manager => {
        console.log(manager);
        let managerWeb = `
        <div class = 'card manager'>
            <div class = 'card-header'>
                <h2>${manager.name}</h2> 
                <br/>
            </div>
            <div class = "card-body">
                <div class = "card-text">
                    <h3> Manager </h3>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item"><h4> Id: ${manager.id} </h4></li>
                        <li class = "list-group-item"><h4> Email Address:<a href = "${manager.email}"> ${manager.email}</a></h4></li>
                        <li class = "list-group-item"><h4> Office ID: ${manager.officeId} </h4></li>
                    </ul>
                </div>
            </div>
        </div>`;
        teamWeb.push(managerWeb);
    }

    const engineerSuite = engineer => {
        console.log(engineer);
        let engineerWeb = `
        <div class = 'card engineer'>
            <div class = 'card-header'>
                <h2>${engineer.name}</h2> 
                <br/>
            </div>
            <div class = "card-body">
                <div class = "card-text">
                    <h3> Engineer </h3>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item"><h4> Id: ${engineer.id} </h4></li>
                        <li class = "list-group-item"><h4> Email Address:<a href = "${engineer.email}"> ${engineer.email}</a></h4></li>
                        <li class = "list-group-item"><h4> GitHub Username: ${engineer.gitName} </h4></li>
                    </ul>
                </div>
            </div>
        </div>`;
        teamWeb.push(engineerWeb);
    }

    const internSuite = intern => {
        console.log(intern);
        let internWeb = `
        <div class = 'card intern'>
            <div class = 'card-header'>
                <h2>${intern.name}</h2> 
                <br/>
            </div>
            <div class = "card-body">
                <div class = "card-text">
                    <h3> Intern </h3>
                    <ul class = "list-group list-group-flush">
                        <li class = "list-group-item"><h4> Id: ${intern.id} </h4></li>
                        <li class = "list-group-item"><h4> Email Address:<a href = "${intern.email}"> ${intern.email}</a></h4></li>
                        <li class = "list-group-item"><h4> School: ${intern.school} </h4></li>
                    </ul>
                </div>
            </div>
        </div>`;
        teamWeb.push(internWeb);
    }

    for (let i = 0; i < teamMates.length; i++) {
        if (teamMates[i].getRole() === "Manager") {
            managerSuite(teamMates[i]);
        }

        if (teamMates[i].getRole() === "Engineer") {
            engineerSuite(teamMates[i]);
        }

        if (teamMates[i].getRole() === "Intern") {
            internSuite(teamMates[i]);
        }
    }
    return teamWeb.join('');
}

module.exports = teamWeb => {
    return `<!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="../dist/style.css">

            <title>Team Profiling and Coffee</title>
        </head>

        <body>
            <div class='jumbotron display-4'> My Team </div>

            <main>
                <div class = "container d-flex">
                    <div class = "row"> 
                        <div>${coffeeGroup(teamWeb)}
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"crossorigin="anonymous"></script>
        </body>

    </html>`;
}
