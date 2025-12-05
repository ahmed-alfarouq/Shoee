import sendEmail from "./sendEmail.js";

const FRONT = process.env.FRONT_END_URL;

const sendVerification = async (email) => {
  const token = generateAccessToken({ email });
  const link = `${FRONT}/verify-email?token=${token}`;

  await sendEmail(
    email,
    "Verify Your Email",
    `Click here to verify your email: ${link}`
  );

  return token;
};

export default sendVerification;
