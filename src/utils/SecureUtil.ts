import crypto from 'crypto';
import fs from 'fs';


class SecureUtil {
	static _instance: SecureUtil
	privateKey: string
	publicKey: string

	constructor(){
		if (SecureUtil._instance) {
			return SecureUtil._instance
		}
		SecureUtil._instance = this
	}

	regenerateKeyPair() {
		const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
			modulusLength: 2048,
			publicKeyEncoding: {
				type: 'spki',
				format: 'pem'
			},
			privateKeyEncoding: {
				type: 'pkcs8',
				format: 'pem'
			}
		});

		this.importKeyPair(publicKey, privateKey)
	}

	importKeyPairFromString(publicKey: string, privateKey: string){
		this.publicKey = publicKey
		this.privateKey = privateKey
	}

	importKeyPair(publicKeyPath: string, privateKeyPath: string){
		this.publicKey = fs.readFileSync(publicKeyPath, {encoding: "utf-8"})
		this.privateKey = fs.readFileSync(privateKeyPath, {encoding: "utf-8"})
	}

	rsaDecrypt(cipherBase64: string): string {
		const buffer = Buffer.from(cipherBase64, 'base64')
		return crypto.privateDecrypt(this.privateKey, buffer).toString('utf8')
	}

	aesDecrypt(msg: string, key: string): string {
		let iv = Buffer.alloc(16);
		iv.fill(0);
		let bkey = Buffer.from(key.substring(0, 32), "utf8");
		let decipher = crypto.createDecipheriv('aes-256-cbc', bkey, iv);
		let plain = decipher.update(msg, 'base64', 'utf8');
		return plain + decipher.final('utf8');
	}
	
	aesEncrypt(msg: string, key: string): string {
		let iv = Buffer.alloc(16);
		iv.fill(0);
		let bkey = Buffer.from(key.substring(0, 32), "utf8");
		let cipher = crypto.createCipheriv('aes-256-cbc', bkey, iv);
		let encrypted = cipher.update(msg, 'utf8', 'base64');
		return encrypted += cipher.final('base64');
	}
}

export default new SecureUtil()