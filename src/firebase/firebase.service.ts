import { Injectable, Inject } from '@nestjs/common';
    import * as admin from 'firebase-admin';
    import { v4 as uuidv4 } from 'uuid'; // Thêm thư viện uuid để tạo ID duy nhất

    @Injectable()
    export class FireBaseService {
      private FireBase: admin.firestore.Firestore;
      private storage: admin.storage.Storage; // Thêm Firebase Storage

      constructor(@Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App) {
        this.FireBase = this.firebaseAdmin.firestore();
        this.storage = this.firebaseAdmin.storage(); // Khởi tạo Firebase Storage
      }

      async getData() {
        const snapshot = await this.FireBase.collection('my-collection').get();
        return snapshot.docs.map(doc => doc.data());
      }

      async uploadPDF(file: Express.Multer.File) {
        try {
          // Tạo ID duy nhất cho file
          const fileId = uuidv4(); 
          const fileName = `${fileId}-${file.originalname}`;

          // Tạo reference đến file trong Firebase Storage
          const storageRef = this.storage.bucket().file(fileName);

          // Upload file từ buffer
          await storageRef.save(file.buffer, {
            metadata: {
              contentType: file.mimetype,
            },
          });

          // Lấy URL của file
          const [fileUrl] = await storageRef.getSignedUrl({
            action: 'read',
            expires: '03-09-2491', // Thời gian hết hạn của URL
          });

          // Lưu thông tin sách vào Firestore
          const bookData = {
            name: file.originalname,
            fileUrl: fileUrl,
            // ... các thông tin khác về sách
          };
          const bookRef = await this.FireBase.collection('books').add(bookData);

          return { message: 'File uploaded successfully!', bookId: bookRef.id };
        } catch (error) {
          console.error('Error uploading file:', error);
          throw new Error('Error uploading file');
        }
      }
    }