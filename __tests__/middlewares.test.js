test("Should return a JWT with proper value if nothing wrong happened", async () => {
  const result = await new Promise(resolve => {
    issueJWT(request, response, err => {
      if (!err) {
        resolve(response.locals.token);
      }
    });
  });

  const tokenPayload = jwt.decode(result, { complete: true }).payload;

  expect(tokenPayload).toHaveProperty("iat");
  expect(tokenPayload).toHaveProperty("exp");
  expect(tokenPayload).toHaveProperty("id");
  expect(tokenPayload).toHaveProperty("iss");
});