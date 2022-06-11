import { useState } from "react";
import { Form, Input } from "./SearchBar.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import AccentButton from "UI/AccentButton";

Notify.init({
	position: 'center-top',
	width: '400px',
  fontSize: '18px',
  cssAnimationStyle: "from-right"
});

export default function SearchForm({ onSearch }){
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = value.trim();
    if (query === "") {
      Notify.failure("Please enter something");
    }
    if (query) {
      onSearch(query);
      setValue("");
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        value={value}
        placeholder="Search for movies"
        onChange={(e) => setValue(e.target.value)}
      />
      <AccentButton title="Find" type="submit" />
    </Form>
  );
};
