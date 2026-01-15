
import { read } from 'read';
import bcrypt from 'bcryptjs';

async function inputPassword() {
    const password = await read({
      prompt: 'Password: ',
      silent: true,
      replace: '*'
    })
    return password
}

const startGenerateAdmin = async () => {
    console.log('Start generate password...')
    try {
        const password = await inputPassword()
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log('Password:', hashedPassword)
      } catch (error) {
        console.error('Error hashing password!')
        console.error(error)
      }    
}

startGenerateAdmin()

