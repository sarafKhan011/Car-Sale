import {faker} from '@faker-js/faker';

function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcars.usnews.com%2Fcars-trucks%2Frankings%2Fluxury-sports-cars&psig=AOvVaw2aeKraw0gNB0BdAevjDvRd&ust=1748335896952000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDUsfXgwI0DFQAAAAAdAAAAABAE',
        miles:12000,
        gearType:'Automatic',
        price:faker.finance.amount(),
    }
}

const carList=faker.helpers.multiple(createRandomeCarList,
   { count:7
   })

export default{
    carList
}