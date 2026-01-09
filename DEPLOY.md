# 🚀 Deploy to Railway

## ขั้นตอน:

### 1. Push โค้ดขึ้น GitHub

```powershell
cd proxy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tyuid003/perfect789-proxy.git
git push -u origin main
```

### 2. Deploy บน Railway

1. ไปที่ Railway → **GitHub Repository**
2. เลือก repo `perfect789-proxy`
3. Railway จะ detect และ deploy อัตโนมัติ
4. รอ 2-3 นาที

### 3. ได้ URL

Railway จะให้ URL แบบ:
```
https://perfect789-proxy-production.up.railway.app
```

### 4. แก้ไข register.html

เปิดไฟล์ `public/register.html` แก้:

```javascript
const API_BASE_URL = 'https://YOUR-RAILWAY-URL.railway.app/api';
```

### 5. Deploy Cloudflare Pages

```powershell
cd ..
.\sync-and-deploy.bat
```

---

## ✅ เสร็จแล้ว!

ตอนนี้หน้าสมัครจะเรียก API ผ่าน Railway proxy ซึ่ง:
- ✅ ส่ง Origin/Referer ปลอมเป็น perfect789.win
- ✅ ไม่โดน block
- ✅ ไม่มีปัญหา CORS
