// jwt.js
import { SignJWT, jwtVerify } from 'jose';
// eslint-disable-next-line
import { encode } from 'jose/base64url';

const refsecret = new TextEncoder().encode(process.env.REACT_APP_REFRESH_TOKEN);
const accsecret = new TextEncoder().encode(process.env.REACT_APP_ACCESS_TOKEN);;

export const generateAccessToken = async ({user,pwd}) => {
    const alg = 'HS256';
    return new SignJWT({user,pwd})
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('15m')
        .sign(accsecret);
};

export const generateRefreshToken = async ({user,pwd}) => {
    const alg = 'HS256';
    return new SignJWT({user, pwd})
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(refsecret);
};

export const verifyToken = async (token) => {
    try {
        const { payload } = await jwtVerify(token, refsecret);
        return payload;
    } catch (e) {
        return null;
    }
};


