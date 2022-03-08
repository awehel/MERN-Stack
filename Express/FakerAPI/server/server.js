const express = require('express')
const faker = require('faker');
const app = express()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const createUser = ()=>{
    const fakeUser= {
        id: faker.datatype.number() ,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email() ,
        password: faker.internet.password()
    }
    return fakeUser
}

const createCompany =()=>{
    const fakeCompany={
        id: faker.datatype.number() ,
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
        
    }
    return fakeCompany
}



app.get("/api/users/new", (req, res)=>{
    const newUser = createUser();
    console.log(newUser)
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany)
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    const userCompany = [newUser, newCompany]
    res.json({userCompany})
    
});

app.listen(8000, (()=>console.log('You have successfully connected to port 8000')))