// Component file for managing application components
class Component {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
    getInfo() {
        return `${this.name} - Version: ${this.version}`;
    }
}

module.exports = Component;
//feature detection functions
function newfeature() {
    console.log("This is a new feature ");
    console.log ("This is a new feature A");
    console.log ("This is a new feature B");
}