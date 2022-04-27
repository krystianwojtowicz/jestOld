const functions = require('./functions');

test('User fetched name should be Ervin Howell', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Ervin Howell");
  });