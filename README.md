# Perfect789 API Proxy

API Proxy server สำหรับแก้ปัญหา CORS และ Permission denied

## Deploy to Railway

1. สร้าง GitHub repository ใหม่
2. Push โค้ดนี้ขึ้นไป
3. เชื่อม Railway กับ GitHub repo
4. Railway จะ auto-deploy

## Endpoints

- `POST /api/checkphone` - ตรวจสอบเบอร์โทร
- `POST /api/otp` - ส่ง OTP
- `POST /api/register` - สมัครสมาชิก
- `POST /api/bankList` - รายการธนาคาร
- `POST /api/updatebank` - อัพเดทธนาคาร
- `POST /api/profile` - โปรไฟล์

## Health Check

`GET /health`
