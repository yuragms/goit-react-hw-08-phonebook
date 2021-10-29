import { AuthLinkByStyled } from "./AutnhNav.styled";

export default function AuthNav () {

    return (
        <div>
            <AuthLinkByStyled to="/register" exact>
                Регистрация
            </AuthLinkByStyled>
            <AuthLinkByStyled to="/login" exact>
                Логин
            </AuthLinkByStyled>
        </div>
    );
};