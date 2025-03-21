import  bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => { 
    try {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password , salt)
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (inputPassword: string , hashedPassword: string ) => { 
    return await bcrypt.compare(inputPassword,hashedPassword)
}