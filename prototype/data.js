function UserData(name, email) {
    this.name = name;
    this.email = email;
}

UserData.prototype.saveToDatabase = function () {
    console.log("Hello Data");
}
UserData.prototype.sendEmail = function () {
    console.log("Hello Email");
}

// Before SRP
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     saveToDatabase() {
//         // Code to save user to database
//     }

//     sendEmail() {
//         // Code to send email
//     }
// }

// After SRP
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// class UserRepository {
//     save(user) {
//         // Code to save user to database
//     }
// }

// class EmailService {
//     sendEmail(user) {
//         // Code to send email
//     }
// }
