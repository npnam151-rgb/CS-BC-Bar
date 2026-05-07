export type ItemType = 'text';

export interface ChecklistItemDef {
  id: number;
  title: string;
  category: string;
  placeholder: string;
  example: string;
}

export interface ReportItem {
  id: number;
  value: string;
}

export interface ReportData {
  location: string;
  date: string;
  reporter: string;
  items: ReportItem[];
}

export const CHECKLIST_ITEMS: ChecklistItemDef[] = [
  // CHẤT LƯỢNG
  { id: 1, category: 'CHẤT LƯỢNG BIA', title: 'Chất lượng bia', placeholder: 'Đạt hay không đạt hay có vấn đề gì', example: 'Đạt' },
  
  // BÁN & NHẬP BÁN TRONG NGÀY
  { id: 2, category: 'SỐ LƯỢNG TRONG NGÀY', title: 'SL bom 30L bán trong ngày', placeholder: 'Nhập số lượng', example: '5' },
  { id: 3, category: 'SỐ LƯỢNG TRONG NGÀY', title: 'SL bom 50L bán trong ngày', placeholder: 'Nhập số lượng', example: '3' },
  { id: 4, category: 'SỐ LƯỢNG TRONG NGÀY', title: 'SL bom dở cuối ngày', placeholder: 'Nhập số lượng', example: '1' },
  { id: 5, category: 'SỐ LƯỢNG TRONG NGÀY', title: 'SL bom nhập trong ngày', placeholder: 'Nhập số lượng', example: '10' },
  { id: 6, category: 'SỐ LƯỢNG TRONG NGÀY', title: 'SL bia đặt mới', placeholder: 'Nhập số lượng', example: '5' },

  // TỒN VỎ CUỐI NGÀY
  { id: 7, category: 'TỒN KHO CUỐI NGÀY', title: 'SL vỏ 50L tồn cuối ngày', placeholder: 'Nhập số lượng', example: '2' },
  { id: 8, category: 'TỒN KHO CUỐI NGÀY', title: 'SL vỏ 30L tồn cuối ngày', placeholder: 'Nhập số lượng', example: '4' },
  { id: 9, category: 'TỒN KHO CUỐI NGÀY', title: 'SL vỏ keg1L tồn cuối ngày', placeholder: 'Nhập số lượng', example: '20' },
  
  // TỒN ĐỒ UỐNG KHÁC CUỐI NGÀY
  { id: 10, category: 'TỒN KHO CUỐI NGÀY', title: 'SL rượu tồn cuối ngày', placeholder: 'Nhập số lượng, dung tích', example: '5 chai' },
  { id: 11, category: 'TỒN KHO CUỐI NGÀY', title: 'SL uni tồn cuối ngày', placeholder: 'Nhập số lượng', example: '1 thùng' },
  { id: 12, category: 'TỒN KHO CUỐI NGÀY', title: 'SL nước ngọt tồn cuối ngày', placeholder: 'Nhập số lượng', example: '3 thùng' },
  
  // VẤN ĐỀ & SỬA CHỮA
  { id: 13, category: 'VẤN ĐỀ & BÁO HỎNG', title: 'Vấn đề phát sinh', placeholder: 'Các vấn đề phát sinh trong ca', example: 'Khách phàn nàn bia nhiều bọt' },
  { id: 14, category: 'VẤN ĐỀ & BÁO HỎNG', title: 'Báo hỏng/bổ sung', placeholder: 'Báo những thứ hỏng cần sửa chữa hoặc bổ sung công cụ dụng cụ', example: 'Vòi rót bia số 2 bị rỉ nước' },
];