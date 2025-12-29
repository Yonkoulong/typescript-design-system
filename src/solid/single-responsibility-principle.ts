//Single Responsibility Principle
//A class should have only on reason to change
class User {
    constructor(name: string, email: string) {}
}

class UserAuthentication {
    constructor(user: User) {}

    authenticate(password: string) {
        // implementation logic here
    }
}