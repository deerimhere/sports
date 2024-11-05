// src/pages/AccessibilityPlatform.js
import React, { useState } from 'react';

const AccessibilityPlatform = () => {
  const [facilitySearch, setFacilitySearch] = useState('');
  const [facilities, setFacilities] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // 시설 검색 로직 구현
    // 예시: facilitySearch를 기반으로 API 호출 또는 데이터 필터링
    const foundFacilities = [
      { id: 1, name: '장애인 체육 센터', location: '서울시 강남구', transport: '지하철 2호선' },
      { id: 2, name: '무장애 스포츠 클럽', location: '부산시 해운대구', transport: '버스 100번' },
      // 추가 시설 정보
    ];
    setFacilities(foundFacilities);
  };

  return (
    <div className="accessibility-platform">
      <h1>장애인 스포츠 및 문화 접근성 향상 플랫폼</h1>
      <form onSubmit={handleSearch}>
        <label>
          시설 검색:
          <input
            type="text"
            value={facilitySearch}
            onChange={(e) => setFacilitySearch(e.target.value)}
            placeholder="지역 또는 시설명 입력"
            required
          />
        </label>
        <button type="submit">검색</button>
      </form>

      {facilities.length > 0 && (
        <div className="facilities">
          <h2>검색 결과</h2>
          <ul>
            {facilities.map((facility) => (
              <li key={facility.id}>
                <h3>{facility.name}</h3>
                <p>위치: {facility.location}</p>
                <p>대중교통: {facility.transport}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPlatform;
