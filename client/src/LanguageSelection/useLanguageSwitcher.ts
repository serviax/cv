import { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from '../Notifications/useAppNotification.hooks';
import { switchLanguage } from './LanguageSelection.reducer';
import { i18n as translationService, useTranslation } from '../common/translations';
import { DropdownModel, DropdownMenuItemModel } from '../Dropdown/Dropdown.model';
import { LANGUAGES } from '../common/config';

const useLanguageSwitcher = () => {
  const loadedComponent = useRef(false);
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const { t } = useTranslation();

  const setLanguage = (lang: string) => {
    dispatch(switchLanguage(lang));
  };

  const items = LANGUAGES.map<DropdownMenuItemModel>(
    lng => <DropdownMenuItemModel>{ icon: `lng lng-${lng.code}`, value: lng.code.toUpperCase(), key: lng.code, onSelect: () => setLanguage(lng.code) }
  );

  const languageMenu: DropdownModel = {
    noItemSelected: t('languageSwitcher.languageChoice'),
    items: items,
    selectedItem: items.find(x => x.key == language)
  };

  useEffect(() => {
    translationService.changeLanguage(language);

    if (loadedComponent.current) {
      const notification = <Partial<Notification>>{ message: t('languageSwitcher.switchMessage'), status: 'info', dismissAfter: 3500 };
      dispatch(notify(notification));
    } else {
      loadedComponent.current = true;
    }
  }, [language]);

  return { setLanguage, language, languageMenu };
};

export default useLanguageSwitcher;