import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 flex flex-col p-4 mt-10 text-xs">
      <span className="mb-4 font-semibold text-sm">MoA, 선물펀딩플랫폼</span>
      <div className="flex gap-2">
        <span>상호명: 모아(MoA)</span>
        <span>사업장소재지: 서울특별시 영등포구 버드나루로 12길 8, 1102호</span>
      </div>
      <div className="flex gap-2">
        <span>사업자등록번호: 50-8202-8553</span>
        <span>전화번호: 010-5954-5857</span>
        <span>이메일: moa.gift.funding@gmail.com</span>
        <span>대표: 이수진</span>
      </div>

      <span>
        모아는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보,
        거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인
        내용을 확인하시기 바랍니다.
      </span>
    </footer>
  );
}
