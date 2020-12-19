import './../main/Profile.css';
import cahee from './cahee.jpg';
import roboclub from './roboclub.jpg';
import translator from './translator.jpg';
import resistance from './resistance.jpg';

function Works() {
    return (
        <div className="main">
            <div className='main__title'>
                <h2>Проекты</h2>
            </div>
            <div className="main__profile main__profile--nopadding flex works">
                <div className="work work--full">
                    <div>
                        <h3>Resistance Python</h3>
                        <ul>
                            <li>Django</li>
                            <li>Фронта больше чем бэка</li>
                            <li>Движок контролируется потоком</li>
                        </ul>
                        <div>
                            <p>
                                В юношестве мечтал сделать свою браузерную игру. Начал разработку паралельно курсу вебразработки.
                                <br />Реализовано: регистрация, перемещение по игровому полю, распознавание других игроков, чат, урон по клетке, регенерация, респаун, автологаут при бездействии с записью в БД.
                                <br />На видео продемонстрировано как один игрок убивает двух других (подсвечены красным), что отражено их перемещением на респаун (клетка 1:1). P.s. баг с таймером исправлен сразу после записи видео:)
                            </p>
                        </div>
                    </div>
                    <a href={resistance} target="_blank" rel="noreferrer" className="awards__award awards__award--withvideo">
                        <img src={resistance} alt="avatar" className="awards__img" />
                    </a>
                    <iframe title='video' width="560" height="315" src="https://www.youtube.com/embed/-VN8kN_hBYQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="work">
                    <div>
                        <h3>Translator JS</h3>
                        <ul>
                            <li>Ванильный JS</li>
                            <li>Бесплатная</li>
                            <li>Полностью рабочая (была)</li>
                            <li>По ссылке ее демонстрационная версия</li>
                        </ul>
                        <p>Предпочитаю смотреть сериалы на языке оригинала и костылем в виде русских субтитров. Все известные мне программы-переводчики, весной 2020 года перестали адекватно работать и я решил написать свою. В этом была прямая необходимость поскольку гарвардский курс веб-разработки не переведен. Джаваскриптовая версия программы отлично проработала несколько месяцев, после которых гугл прикрыл бесплатную лавочку. И я сделал еще одну.</p>
                    </div>
                    <a href='https://gonzika.github.io/srttranslate/' target="_blank" rel="noreferrer" className="awards__award">
                        <img src={translator} alt="avatar" className="awards__img" />
                    </a>
                </div>

                <div className="work">
                    <div>
                        <h3>Translator Python</h3>
                        <ul>
                            <li>Django</li>
                            <li>Google translate API</li>
                            <li>Полностью рабочая</li>
                            <li>Платная</li>
                        </ul>
                        <p>
                            Вторая версия программы переписанная на Python. Все работает осталось добавить AJAXов, прикрепить liqpay оплату, реализовать механизм покупок, устранить пару непринципиальных багов, и стартап готов.
                        </p>
                    </div>
                    <a href={translator} target="_blank" rel="noreferrer" className="awards__award awards__award--withvideo">
                        <img src={translator} alt="avatar" className="awards__img" />
                    </a>
                    <iframe title='video' width="560" height="315" src="https://www.youtube.com/embed/BCysfZpim8Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="work">
                    <div>
                        <h3>Робоклуб</h3>
                        <ul>
                            <li>3 слайдера (на самом деле 4)</li>
                            <li>Собственное модальное окно</li>
                            <li>Мобильная адаптация</li>
                            <li>Полный reset стандартных стилей</li>
                            <li>Необычные маркеры списков</li>
                        </ul>
                        <p>Мой первый серьезно сверстанный макет. Самое сложное было сделать список с палками и настроить работу 3х слайдеров, которые мешали друг другу пространством общих имен. Развязка оказалась довольно проста, нужно было давать уникальные имена даже тем элементам, для которых это было неочевидно.</p>
                    </div>
                    <a href='https://gonzika.github.io/roboclub/' target="_blank" rel="noreferrer" className="awards__award">
                        <img src={roboclub} alt="avatar" className="awards__img" />
                    </a>
                </div>

                <div className="work">
                    <div>
                        <h3>Cahee</h3>
                        <ul>
                            <li>Кросбраузерность, IE11</li>
                            <li>Мобильная адаптация и навигация</li>
                            <li>SCSS</li>
                        </ul>
                        <p>Первый полноценно сверстанный макет в Beetroot Academy. Были небольшие мучения с позиционированием фона. Научился позиционировать и адаптировать элементы топ-лефтами, нетфликсом и флексами.</p>
                    </div>
                    <a href='https://gonzika.github.io/cahee-scss/' target="_blank" rel="noreferrer" className="awards__award">
                        <img src={cahee} alt="avatar" className="awards__img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Works;