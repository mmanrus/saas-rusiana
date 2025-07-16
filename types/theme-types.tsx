type ThemeColors = 'Zinc' | 'Rose' | 'Blue' | 'Green' | 'Orange'

interface ThemeColorsParams{
     themeColor: ThemeColors;
     setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}