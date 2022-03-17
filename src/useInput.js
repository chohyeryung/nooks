import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
}

/*
  const maxLen = (value) => value.length <= 10;   // 검증 추가
  const name = useInput("Mr.", maxLen);
  <input placeholder="Name" {...name} />
*/