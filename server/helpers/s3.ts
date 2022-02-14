import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { FileUpload } from "graphql-upload";
import { streamToBuffer } from "./streams";
import { nanoid } from "nanoid";
import path from "path";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

if (!accessKeyId || !secretAccessKey) {
    throw new Error("No AWS Keys!");
}

const client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey,
    },
});

export const uploadFileS3 = async (file: Promise<FileUpload> | FileUpload) => {
    const { filename, createReadStream } = await file;

    const body = await streamToBuffer(createReadStream());

    const filePath = path.parse(filename);

    const key = `${filePath.name}-${nanoid()}-${filePath.ext}`;

    const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: body,
        ACL: "public-read",
    });

    await client.send(command);

    return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
};

export const deleteFileS3 = async (filename: string) => {
    const key = filename.replace(/^.+\.amazonaws\.com\/(.+$)/, "$1");

    const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
    });

    await client.send(command);
};
