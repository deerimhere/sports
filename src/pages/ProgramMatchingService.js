// src/pages/ProgramMatchingService.js
import React, { useState } from 'react';

const ProgramMatchingService = () => {
  const [interest, setInterest] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [matchedPrograms, setMatchedPrograms] = useState([]);

  const handleMatch = (e) => {
    e.preventDefault();
    // 매칭 로직 구현
    // 예시: interest와 fitnessLevel을 기반으로 프로그램 필터링
    const programs = [
      { id: 1, name: '수영 강좌', location: '서울 수영장', transport: '지하철 1호선' },
      { id: 2, name: '테니스 클럽', location: '부산 테니스 센터', transport: '버스 200번' },
      // 추가 프로그램 정보
    ];
    setMatchedPrograms(programs);
  };

  return (
    <div className="program-matching-service">
      <h1>스포츠 강좌 및 체육 프로그램 매칭 서비스</h1>
      <form onSubmit={handleMatch}>
        <label>
          관심 분야:
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="예: 요가, 수영"
            required
          />
        </label>
        <label>
          체력 수준:
          <select value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)} required>
            <option value="">선택</option>
            <option value="beginner">초보</option>
            <option value="intermediate">중급</option>
            <option value="advanced">고급</option>
          </select>
        </label>
        <button type="submit">매칭하기</button>
      </form>

      {matchedPrograms.length > 0 && (
        <div className="matched-programs">
          <h2>매칭된 프로그램</h2>
          <ul>
            {matchedPrograms.map((program) => (
              <li key={program.id}>
                <h3>{program.name}</h3>
                <p>위치: {program.location}</p>
                <p>대중교통: {program.transport}</p>
                <button onClick={() => alert('예약 기능 구현 예정')}>예약하기</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProgramMatchingService;
