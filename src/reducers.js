const userInitialState = {
    isAuthenticated: false,
    role: 'editor',
};

export const user = (user = userInitialState, action) => user;
