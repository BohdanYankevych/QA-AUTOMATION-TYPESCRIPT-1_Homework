import { fetchUser } from './api-hw';
import { UserSummary } from './userSummary-hw';
import { Customer } from './abstraction-hw';

async function main() {
    try {
        const user = await fetchUser(1);
        console.log('Fetched User:', user);

        const userSummary = new UserSummary(user);
        console.log('User Summary:', userSummary.summary);

        const customer = new Customer(user.name, user.email, user.address.city);
        console.log(customer.getInfo());
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
