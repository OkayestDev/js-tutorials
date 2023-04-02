interface IUser {
    firstName: string;
    lastName: string;
}

const updateFirstNameSideEffect = (user: IUser, firstName: string) => {
    user.firstName = firstName;
    return user;
};

const updateFirstName = (user: IUser, firstName: string) => {
    return {
        ...user,
        firstName,
    };
};

const createUser = () => ({
    firstName: 'John',
    lastName: 'Doe',
});

// Side effect
{
    const user = createUser();
    const updatedUser = updateFirstNameSideEffect(user, 'Jane');
    console.info('Side effect', { user, updatedUser });
}

// No side effect
{
    const user = createUser();
    const updatedUser = updateFirstName(user, 'Jane');
    console.info('No side effect', { user, updatedUser });
}
