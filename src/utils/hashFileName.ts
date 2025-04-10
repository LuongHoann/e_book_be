import crypto from "crypto";

export async function getFileHash(buffer: Buffer): Promise<string> {
  return crypto
    .createHash("sha256")
    .update(buffer)
    .digest("hex");
}