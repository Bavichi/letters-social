import initialState from '../../src/constants/initialState';

describe('initialState', () => {
    test('should match', () => {
        const expected = {
            error: null,
            loading: false,
            postIds: [],
            posts: {},
            commentIds: [],
            comments: {},
            pagination: {
                first: `api/posts?_page=1&_sort=date&_order=DESC&_embed=comments&_expand=user&_embed=likes`,
                next: null,
                prev: null,
                last: null
            },
            user: {
                authenticated: true,
                profilePicture: null,
                id: null,
                name: null,
                token: null
            }
        };
        expect(initialState).toEqual(expected);
    });
});
