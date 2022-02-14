import { ReadStream } from "fs";

export const streamToBuffer = async (stream: ReadStream) => {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    return Buffer.concat(chunks);
};
