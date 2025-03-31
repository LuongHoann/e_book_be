import bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  inputPassword: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

export const generateUserCode = () => {
  return Math.round(10000000 + Math.random() * 8999999).toString();
};
