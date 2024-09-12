import React from 'react';
import LoginForm from '../components/LoginForm';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-100 to-red-200">
      <div className="mb-8 flex items-center space-x-4">
        <img src="/placeholder.svg" alt="University Logo" className="h-12 w-auto" />
        <img src="/placeholder.svg" alt="TSE Logo" className="h-12 w-auto" />
      </div>
      <LoginForm />
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div>
          <Button variant="outline" className="w-full bg-red-800 text-white hover:bg-red-900">
            คำร้องทั่วไปวิทยาลัย
          </Button>
          <ul className="mt-2 text-sm">
            <li>- คำร้องเพิ่ม/ถอนวิชาเรียนล่าช้า</li>
            <li>- ขอเพิ่มที่นั่ง</li>
          </ul>
        </div>
        <div>
          <Button variant="outline" className="w-full bg-red-800 text-white hover:bg-red-900">
            คู่มือการใช้งาน
          </Button>
          <ul className="mt-2 text-sm">
            <li>- คู่มือการใช้งานเว็บไซต์</li>
            <li>- การเข้าสู่ระบบครั้งแรก</li>
            <li>- การกรอกแบบฟอร์มคำร้อง</li>
            <li>- การติดตามผลคำร้อง</li>
          </ul>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-600">
        JAJID TEAM SF221
      </footer>
    </div>
  );
};

export default Index;