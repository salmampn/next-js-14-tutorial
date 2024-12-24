const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log(params);
  return <div className="text-3xl">SignInPage</div>;
};
export default SignInPage;