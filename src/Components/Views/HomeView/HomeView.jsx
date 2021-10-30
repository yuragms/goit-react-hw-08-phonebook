import {HomeContainer, HomeTitle} from './HomeView.styled'

export default function HomeView() {
    return (
<HomeContainer>
    <HomeTitle>
    Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </HomeTitle>

</HomeContainer>
    );
};