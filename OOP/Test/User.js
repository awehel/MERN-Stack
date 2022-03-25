class User {
    constructor(username, emailAddress) {
        
        this.name = username; 
        this.email = emailAddress; 
        this.accountBalance = 0; 
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount){
        this.accountBalance -=amount;
    }

    displayBalance(){
        console.log(this.name + " " + this.accountBalance)
    }
}

const harry = new User("Harry Potter", "hpotter@hogwarts.com")
const hermoine = new User("Hermoine Granger", "hgranger@hogwarts.com")
const ron = new User("Ron Weasley", "rweasley@hogwarts.com")

harry.makeDeposit(100)
harry.makeDeposit(50)
harry.makeDeposit(150)
harry.makeWithdrawal(200)
harry.displayBalance()


hermoine.makeDeposit(200)
hermoine.makeDeposit(100)
hermoine.makeWithdrawal(25)
hermoine.makeWithdrawal(50)
hermoine.displayBalance()

ron.makeDeposit(200)
ron.makeWithdrawal(100)
ron.makeWithdrawal(125)
ron.makeWithdrawal(75)
ron.displayBalance()