import jwt from 'jsonwebtoken';


export const signToken = (payload) => {

   if (!process.env.JWT_SECRET_SEED) {
      throw new Error('No hay semilla de JWT - Revisar variables de entorno');
   }
   return jwt.sign(
      payload,
      // Seed
      process.env.JWT_SECRET_SEED,
      // Opciones
      { expiresIn: '1d' }
   )

}

export const isValidToken = (token) => {
   if (!process.env.JWT_SECRET_SEED) {
      throw new Error('No hay semilla de JWT - Revisar variables de entorno');
   }

   if (token.length <= 10) {
      return Promise.reject('JWT no es válido 1');
   }
   return new Promise((resolve, reject) => {
      try {
         jwt.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
            if (err) return reject('JWT no es válido 2');
            resolve(payload)
         })
      } catch (error) {
         reject('JWT no es válido 3');
      }
   })
}