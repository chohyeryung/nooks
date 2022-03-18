import React, { useEffect, useState } from "react"

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

/*
  // 처음 useTitle 호출 시 initialTitle 값으로 title 세팅 -> title 값 변경 -> useEffect 호출 -> setTitle 리턴
  // setTitle 리턴되었으므로 titleUpdater에는 setTitle이 들어있음
  const titleUpdater = useTitle("Loading...");
  // titleUpdater("Home") = setTitle("Home") -> title 값 변경 -> useEffect 호출 -> setTitle 리턴
  setTimeout(() => titleUpdater("Home"), 5000);
*/