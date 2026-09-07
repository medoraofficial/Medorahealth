import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import ScrollProgressBar from "@/components/features/ScrollProgressBar";
import ChatBot from "@/components/features/ChatBot";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-medora-gray-soft">
      <div className="text-center px-6">
        <div className="text-8xl font-black text-medora-yellow mb-4">404</div>
        <h1 className="text-2xl font-black text-medora-black mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="btn-primary inline-flex"
        >
          Back to MEDORA
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatBot />
    </BrowserRouter>
  );
}
