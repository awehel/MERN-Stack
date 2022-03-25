class User {
    constructor(username, emailAddress) {
        
        this.name = username; 
        this.email = emailAddress; 
        this.accountBalance = 0; 
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this
    }

    makeWithdrawal(amount){
        this.accountBalance -=amount;
        return this
    }

    displayBalance(){
        console.log(this.name + " " + this.accountBalance)
        return this
    }
}

const harry = new User("Harry Potter", "hpotter@hogwarts.com")
const hermoine = new User("Hermoine Granger", "hgranger@hogwarts.com")
const ron = new User("Ron Weasley", "rweasley@hogwarts.com")

harry.makeDeposit(100).makeDeposit(50).makeDeposit(150).makeWithdrawal(200).displayBalance()

hermoine.makeDeposit(200).makeDeposit(100).makeWithdrawal(25).makeWithdrawal(50).displayBalance()

ron.makeDeposit(200).makeWithdrawal(100)
ron.makeWithdrawal(125)
ron.makeWithdrawal(75)
ron.displayBalance()