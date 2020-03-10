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
                id:"7d7bab7c-e98b-412e-9b20-2b6278427aa6",
                name:"Gallandro",
                profilePicture:"/static/assets/users/14.jpeg"
            }
        };
        expect(initialState).toEqual(expected);
    });
});
