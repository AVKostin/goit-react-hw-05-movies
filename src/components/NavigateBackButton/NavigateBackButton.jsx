import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Wrapper } from "./NavigateBackButton.module";

import AccentButton from "UI/AccentButton";

export default function NavigateBackButton
 () {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [from, setFrom] = useState("");

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <Wrapper>
      <AccentButton title="Back" onClick={handleBack} type="button" />
    </Wrapper>
  );
};