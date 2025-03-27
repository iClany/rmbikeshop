import Slider from '../../components/Swiper';
import CatalogBar from '../../components/catalogBar/catalogBar.jsx'
import YandexMaps from '../../components/yandexMaps/yandexMaps.jsx'

import homeStyles from './homeStyles.module.css'

import {Helmet} from 'react-helmet';

const HomePage = () => {
    return(
        <main>
            <Helmet>
                <title>Главная | Веломагазин RMBike.by</title>
            </Helmet>
                <Slider />
            <CatalogBar />
            <div className={homeStyles.yMapsdiv}>
                <h1 className={homeStyles.h1YMaps}>Мы на карте</h1>
            </div>
            <YandexMaps />
        </main>
    )
}

export default HomePage;