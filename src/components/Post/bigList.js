import { faker } from "@faker-js/faker";




const bigList = [...Array(1)].map(() => ({
detailImage: faker.image.abstract(500,480)
}));

export default bigList;
