import React from "react";
import { useTranslation } from "react-i18next";
import { Form } from 'react-bootstrap';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="select">
      <Form.Select
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
        className="switcher"
      >
        <option value="en"> English</option>
        <option value="fr"> Français</option>
      </Form.Select>
    </div>
  );
}

export default LanguageSwitcher;