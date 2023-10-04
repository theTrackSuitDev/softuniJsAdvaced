function listProcessor(array) {
    let result = []; 
    let commands = {
        add(str) {
            result.push(str);
        },

        remove(str) {
            result = result.filter(el => el != str);
        },

        print() {
            console.log(result.join(','));
        }
    }

    array.forEach(element => {
        let commandArray = element.split(' ');
        if (commandArray.length > 1) {
            commands[commandArray[0]](commandArray[1]);
        } else {
            commands.print();
        }
    });
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);