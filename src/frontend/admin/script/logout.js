async function logout() {
    try {
        const response = await fetch("http://localhost:3001/logout", {
            method: "POST",
            credentials: "include", // ✅ เพื่อส่ง cookie session ไปด้วย
        });

        if (response.ok) {
            alert("ออกจากระบบเรียบร้อยแล้ว");
            // 👉 เปลี่ยนไปหน้า login หรือรีโหลดใหม่
            window.location.href = "/admin/login.html"; // เปลี่ยนเป็นหน้าที่คุณใช้ login
        } else {
            alert("เกิดข้อผิดพลาดในการออกจากระบบ");
        }
    } catch (err) {
        console.error("❌ Logout error:", err);
        alert("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้");
    }
}
