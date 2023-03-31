import { pipe } from '../pipe';
import { curry, $ } from '../../curry/curry';

interface IUser {
    id: number;
    name: string;
    lastName: string;
}

const getUserFromDb = curry((name: string): IUser => {
    console.info('getUserFromDb', { name });
    return {
        id: 123,
        name,
        lastName: name.split('').reverse().join(''),
    };
});

const updateLastName = curry((lastName: string, user: IUser): IUser => {
    console.info('updateLastName', { lastName, user });
    return {
        ...user,
        lastName,
    };
});

const saveToDb = curry((user: IUser) => {
    console.log('saveToDatabase', { user });
    return { isSaved: true, user };
});

{
    console.log('\nNo pipe');
    // No pipe
    const userFromDb = getUserFromDb('John');
    const updatedUser = updateLastName('Doe', userFromDb);
    const { isSaved, user } = saveToDb(updatedUser);
    console.info('No pipe', { isSaved, user });
}

{
    console.log('\nPipe');
    // Pipe
    const { isSaved, user } = pipe(
        getUserFromDb,
        updateLastName('Doe', $),
        saveToDb
    )('John');
    console.info('Pipe', { isSaved, user });
}
