import {useCallback, useEffect, useState} from 'react';
enum ThemeEnum {
	LIGHT = 'light',
	DARK = 'dark'
}
const LOCALSTORAGE_KEY_THEME = 'theme';
export const useTheme = () => {
	const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);

	const changeTheme = useCallback((theme: ThemeEnum) => {
		setTheme(theme);
		document.documentElement.classList.remove(ThemeEnum.DARK, ThemeEnum.LIGHT);
		document.documentElement.classList.add(theme);
		localStorage.setItem(LOCALSTORAGE_KEY_THEME, theme);
	}, []);

	useEffect(() => {
		if(localStorage.theme) {
			changeTheme(localStorage.theme);
		} else if ((!('theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${ThemeEnum.DARK})`).matches)){
			changeTheme(ThemeEnum.DARK);
		}
	}, []);

	const toggleTheme = useCallback(() => {
		if(theme === ThemeEnum.DARK) {
			changeTheme(ThemeEnum.LIGHT);
		}
		else {
			changeTheme(ThemeEnum.DARK);
		}
	}, [theme]);

	return  {
		theme,
		toggleTheme
	};
};