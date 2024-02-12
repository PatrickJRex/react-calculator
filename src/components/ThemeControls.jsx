export const ThemeControls = ({setTheme}) => {
    return (
        <>
         <label className="theme-switch">
            <input type="checkbox" onChange={setTheme} className="theme-switch__checkbox" />
            <span className="theme-switch__slider"></span>
            </label>
        </>
    );
}