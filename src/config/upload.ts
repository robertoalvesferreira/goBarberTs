import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import { request } from 'express';

const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
