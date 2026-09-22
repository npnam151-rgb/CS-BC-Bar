import React, { useState } from 'react';
import { X, Download, Copy, Info, Check } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  fileName: string;
}

export function ImageModal({ isOpen, onClose, imageUrl, fileName }: ImageModalProps) {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !imageUrl) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = fileName.replace(/\s+/g, '_');
    link.href = imageUrl;
    link.click();
  };

  const handleCopyImage = async () => {
    try {
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      } else {
        throw new Error('ClipboardItem API không được hỗ trợ');
      }
    } catch (err) {
      console.warn('Không thể tự động sao chép qua Clipboard API:', err);
      // Hướng dẫn nếu trình duyệt chặn tự động copy blob
      alert('Trình duyệt chưa hỗ trợ tự động copy ảnh này. Bạn hãy chạm và giữ (long-press) vào ảnh bên dưới rồi chọn "Sao chép" (Copy) nhé!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Ảnh Báo Cáo Hoàn Chỉnh
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Bấm copy hoặc chạm giữ vào ảnh để lưu/gửi
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Instruction Callout */}
        <div className="p-4 bg-amber-50/90 border-b border-amber-200 text-amber-900 text-xs sm:text-sm flex gap-3 items-start">
          <Info className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-semibold block sm:inline">Mẹo gửi nhanh: </span>
            <span>
              Bấm nút <strong className="font-bold text-indigo-700">"Copy ảnh"</strong> để dán trực tiếp vào Zalo/Tin nhắn, hoặc chạm và giữ ngón tay vào ảnh bên dưới trong 1-2 giây rồi chọn{' '}
              <strong className="underline decoration-amber-600 font-bold">"Sao chép" (Copy)</strong> /{' '}
              <strong className="underline decoration-amber-600 font-bold">"Lưu vào Ảnh"</strong>.
            </span>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 flex justify-center items-start">
          <div className="relative max-w-full bg-white p-2 rounded-xl shadow-md border border-slate-200">
            <img
              src={imageUrl}
              alt="Bản xem trước báo cáo"
              className="w-full h-auto rounded-lg select-auto touch-manipulation cursor-pointer"
              style={{
                WebkitTouchCallout: 'default',
                userSelect: 'auto',
              }}
            />
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyImage}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-white text-sm font-medium rounded-xl shadow-sm transition-all ${
                isCopied 
                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-100" />
                  <span>Đã copy ảnh!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy ảnh</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded-xl transition-colors border border-slate-300"
            >
              <Download className="w-4 h-4" />
              <span>Tải ảnh</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-slate-600 hover:text-slate-900 text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
