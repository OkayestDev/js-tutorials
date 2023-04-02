import { curry, $ } from '../../curry/curry';
import { WithLog } from '../with-log-monad';

const fetchUserFromDb = (username: string) => ({
    username,
    password: 'immapassword',
});

const updateUsername = (user, username) => ({
    ...user,
    username,
});

WithLog.from('Kyle')
    .run(fetchUserFromDb)
    .run(curry(updateUsername)($, 'Roger'));
