import React, { createContext, useState, useContext } from "react";

// 카테고리 컨텍스트 생성
const CategoryContext = createContext();

// 카테고리를 관리하는 컴포넌트
export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("makeup");
  const [selectedCategoryName, setSelectedCategoryName] = useState("메이크업");

  const handleCategoryChange = (category, categoryName) => {
    setSelectedCategory(category);
    setSelectedCategoryName(categoryName);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, selectedCategoryName, handleCategoryChange }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// 커스텀 훅을 사용하여 카테고리 값과 상태 변경 함수를 간편하게 사용할 수 있도록 합니다.
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
