import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div
      style={{
        position: 'fixed', // 상단 고정
        top: 0,
        width: '100%', // 전체 너비 차지
        backgroundColor: '#333', // 배경색
        color: '#fff', // 텍스트 색상
        display: 'flex', // Flexbox 사용
        justifyContent: 'center', // 가로 중앙 정렬
        padding: '10px 0', // 상하 간격
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // 약간의 그림자 효과
        zIndex: 1000, // 다른 요소 위에 표시
      }}
    >
      <ul
        style={{
          listStyleType: 'none', // 불릿 제거
          display: 'flex', // 가로 정렬
          gap: '60px', // 항목 간 간격을 더 넓게 설정
          margin: 0, // 기본 마진 제거
          padding: 0, // 기본 패딩 제거
        }}
      >
        <li style={{ lineHeight: '1.8' }}> {/* 줄 간격 설정 */}
          <Link
            to="/"
            style={{
              textDecoration: 'none', // 밑줄 제거
              color: '#fff', // 텍스트 색상
              fontWeight: 'bold', // 볼드 텍스트
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; // 크기 확대
                e.target.style.color = '#fc4322'; // 색상 변경
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // 원래 크기
                e.target.style.color = '#fff'; // 원래 색상
              }}
          >
            Let's Protein
          </Link>
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <Link
            to="/contact"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; // 크기 확대
                e.target.style.color = '#fc4322'; // 색상 변경
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // 원래 크기
                e.target.style.color = '#fff'; // 원래 색상
              }}
          >
            Contact Us
          </Link>
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <Link
            to="/intro"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; // 크기 확대
                e.target.style.color = '#fc4322'; // 색상 변경
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // 원래 크기
                e.target.style.color = '#fff'; // 원래 색상
              }}
          >
            About Coaches
          </Link>
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <Link
            to="/schedule"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; // 크기 확대
                e.target.style.color = '#fc4322'; // 색상 변경
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; // 원래 크기
                e.target.style.color = '#fff'; // 원래 색상
              }}
          >
            Monthly
          </Link>
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <Link
            to="/shop-protein"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; 
                e.target.style.color = '#fc4322'; 
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; 
                e.target.style.color = '#fff'; 
              }}
          >
            protein-shop
          </Link>
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <Link
            to="/shop-cart"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)'; 
                e.target.style.color = '#fc4322'; 
                e.target.style.transition = 'transform 0.3s ease, color 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; 
                e.target.style.color = '#fff'; 
              }}
          >
           cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
