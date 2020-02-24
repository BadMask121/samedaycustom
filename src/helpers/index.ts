export const toBase64 = (message: string) =>
	Buffer.from(message).toString("base64");
export const fromBase64 = (frommessage: string) =>
	Buffer.from(frommessage, "base64").toString("base64");
