// src/pages/HealthFitnessPlatform.js
import React, { useState } from 'react';
import './HealthFitnessPlatform.css';

const HealthFitnessPlatform = () => {
  const [age, setAge] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 개인화 추천 로직 구현
    // 예시: age와 fitnessLevel을 기반으로 추천 운동 프로그램 설정
    const recommendedPrograms = [
      { id: 1, name: '요가 클래스', description: '유연성을 향상시키는 요가 프로그램.' },
      { id: 2, name: '웨이트 트레이닝', description: '근력을 강화하는 웨이트 프로그램.' },
      // 추가 추천 프로그램
    ];
    setRecommendations(recommendedPrograms);
  };

  return (
    <div className="health-fitness-platform">
      <h1>통합 건강 및 체육 정보 플랫폼</h1>
      <form onSubmit={handleSubmit}>
        <label>
          연령:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
        <button type="submit">추천 받기</button>
      </form>

      {recommendations.length > 0 && (
        <div className="recommendations">
          <h2>추천 운동 프로그램</h2>
          <ul>
            {recommendations.map((program) => (
              <li key={program.id}>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HealthFitnessPlatform;
