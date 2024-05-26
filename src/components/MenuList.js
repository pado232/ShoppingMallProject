import { useCategory } from "../components/CategoryProvider";
import { useState } from "react";

const MenuList = () => {
  const { selectedCategory, selectedCategoryName, handleCategoryChange } =
    useCategory();
  const [currentCategory, setCurrentCategory] = useState(selectedCategory); // 현재 카테고리를 따로 상태로 관리
  const [currentCategoryName, setCurrentCategoryName] =
    useState(selectedCategoryName);

  const handleClick = (category, categoryName) => {
    // 클릭한 카테고리를 부모 컴포넌트로 전달
    setCurrentCategory(category); // 현재 카테고리 상태 업데이트
    setCurrentCategoryName(categoryName);
    handleCategoryChange(category, categoryName);
  };

  const handleLinkClick = (event, categoryName) => {
    const category = event.target.getAttribute("data-category"); // 클릭한 링크의 카테고리 속성 가져오기
    handleClick(category, categoryName); // 카테고리 변경 처리
  };

  // 메이크업 항목 배열
  const makeupItems = [
    { category: "face", categoryName: "페이스" },
    { category: "eye", categoryName: "아이" },
    { category: "lip", categoryName: "립" },
    { category: "nail", categoryName: "네일" },
  ];

  // 스킨케어 항목 배열
  const skincareItems = [
    { category: "skincare", categoryName: "스킨케어" },
    { category: "suncare", categoryName: "선케어" },
    { category: "cleaning", categoryName: "클렌징" },
    { category: "maskpack", categoryName: "마스크 / 팩" },
  ];

  return (
    <div className="MenuList">
      <nav className="category">
        <ul className="makeup">
          <li className="title">
            <a
              href={`/item/${currentCategory}`}
              onClick={(e) => handleLinkClick(e, "메이크업")}
              data-category="makeup"
            >
              {currentCategoryName}
            </a>
          </li>
          <ul>
            {/* makeupItems 배열을 기반으로 메이크업 항목들을 렌더링합니다. */}
            {makeupItems.map((item) => (
              <li key={item.category}>
                <a
                  href={`/item/${currentCategory}`}
                  onClick={(e) => handleLinkClick(e, item.categoryName)}
                  data-category={item.category}
                >
                  {item.categoryName}
                </a>
              </li>
            ))}
          </ul>
        </ul>
        <ul className="skincare">
          <li className="title">
            <a
              href={`/item/${currentCategory}`}
              onClick={(e) => handleLinkClick(e, "스킨케어")}
              data-category="skincare"
            >
              스킨케어
            </a>
          </li>
          <ul>
            {/* skincareItems 배열을 기반으로 스킨케어 항목들을 렌더링합니다. */}
            {skincareItems.map((item) => (
              <li key={item.category}>
                <a
                  href={`/item/${currentCategory}`}
                  onClick={(e) => handleLinkClick(e, item.categoryName)}
                  data-category={item.category}
                >
                  {item.categoryName}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default MenuList;
