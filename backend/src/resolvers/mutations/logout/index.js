async function logout(parent, payload, ctx) {
  ctx.request.session = null;
  return ctx.request.userID;
}

export default logout;
