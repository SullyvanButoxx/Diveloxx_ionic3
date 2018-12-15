import { Profile } from "./profile";

export class User {
    id: string
    email: string
    password: string
    profile: Profile

    constructor(id: string, email: string, password: string, profile: Profile) {
        this.id = id
        this.email = email
        this.password = password
        this.profile = profile
    }
}
