import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">ระบบทำร้องมหาวิทยาลัยธรรมศาสตร์</h2>
      <form className="space-y-4">
        <Input type="text" placeholder="ID" className="w-full px-4 py-2 border rounded-md" />
        <Input type="password" placeholder="PASSWORD" className="w-full px-4 py-2 border rounded-md" />
        <Button type="submit" className="w-full text-white py-2 rounded-md bg-gradient-to-r from-[#902923] to-[#2A0C0A] hover:from-[#7D231E] hover:to-[#1F0907]">
          LOGIN
        </Button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        สำหรับการเข้าใช้งานครั้งแรก
        <br />
        โปรดติดต่อเจ้าหน้าที่ผู้ดูแล
      </p>
    </div>
  );
};

export default LoginForm;