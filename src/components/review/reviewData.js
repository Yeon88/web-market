import {faker} from "@faker-js/faker";


const reviewData = [...Array(20)].map(()=>({

    name: faker.name.fullName(),
    avatar: faker.internet.avatar(),
    content: faker.lorem.sentences(8)
}));


export default reviewData;