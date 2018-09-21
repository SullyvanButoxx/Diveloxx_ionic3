export class Profile {
    username: string
    firstname: string
    lastname: string

    constructor(username: string, firstname: string, lastname: string) {
        this.username = username
        this.firstname = firstname
        this.lastname = lastname
    }

    getLite() {
        return {
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname
        }
    }
}