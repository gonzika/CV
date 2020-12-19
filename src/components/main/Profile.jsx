import './Profile.css';
import foto from './myfoto.jpg'

function Profile() {
    let date = new Date()
    let age = null
    if (date.getMonth() > 10 - 1) {
        age = date.getFullYear() - 1991
    } else if (date.getMonth() === 10 - 1 && date.getDate() >= 31) {
        age = date.getFullYear() - 1991
    } else {
        age = date.getFullYear() - 1991 - 1
    }

    return (
        <div className="main">
            <div className='main__title'>
                <h2>Обо мне</h2>
            </div>
            <div className="main__profile">
                <div className="profile__avatar-wrap"><img src={foto} alt="avatar" className="profile__avatar" /></div>
                <section>
                    <h3 id="profile__name">Якименко Николай Николаевич</h3>
                    <h5>Junior FrontEnd Developer (React)</h5>
                    <ul className="ul--nomarker">
                        <li>Телефон: <a href="tel:+380972132191">+38-097-213-2191</a></li>
                        <li>GitHub: <a target="_blank" rel="noreferrer" href="https://github.com/gonzika">github.com/gonzika</a></li>
                        <li>E-mail: <a href="mailto:nn.yakimenko@gmail.com">nn.yakimenko@gmail.com</a></li>
                        <li>Возраст: {age} лет</li>
                        <li>Город: Мариуполь</li>
                    </ul>
                </section>

                <section>
                    <h3>НАВЫКИ</h3>
                    <div className="flex flex--start">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SCSS</li>
                            <li>JavaScript (V8, React)</li>
                            <li>GULP</li>
                            <li>Мобильная адаптация, навигация</li>
                            <li>Кроссбраузерность</li>
                            <li>Photoshop, Figma</li>
                        </ul>
                        <ul>
                            <li>Python (Django)</li>
                            <li>SQL (SQLite)</li>
                            <li>English - intermediate</li>
                            <li>Russian, Ukrainian - native</li>
                            <li>Polish - intermediate</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3>ОПЫТ</h3>
                    <ol>
                        <li>React CV</li>
                        <li>Браузерная онлайн игра на Django. Реализовано: регистрация, перемещение по игровому полю, распознавание других игроков, чат, урон по клетке, регенерация, респаун, автологаут при бездействии с записью в БД.</li>
                        <li>Переводчик субтитров  на Django. Реализовано: взаимодействие с Google Translate API, перевод субтитров с любого языка на любой язык.</li>
                        <li>Переводчик субтитров  на чистом JS. Реализовано: взаимодействие с Google Translate API, перевод субтитров с любого языка на любой язык.</li>
                        <li>Верстка макетов с препроцессорами и без, подключение слайдеров, стилизация чекбоксов. Мобильная адаптация.</li>
                    </ol>
                </section>

                <section>
                    <h3>ОБРАЗОВАНИЕ И КУРСЫ</h3>
                    <ul className="ul--square">
                        <li>15.12.2020 - <em>сегодня</em>. Harvard «CS50's Mobile App Development with React Native»</li>
                        <li>27.11.2020 - <em>сегодня</em>. React. Путь самурая.</li>
                        <li>17.09.2020 - <em>сегодня</em>. Beetroot Academy «FrontEnd»</li>
                        <li>01.07.2020 - 30.11.2020. Harvard «CS50's Web Programming with Python and JavaScript»</li>
                        <li>01.03.2020 - 22.05.2020. Harvard «CS50. Introduction to Computer Science»</li>
                        <li>01.07.2019 - <em>сегодня</em>. Duolingo. Polish/English language</li>
                        <li>01.09.2011 - 21.06.2015. Приазовский государственный технический университет. Специальность:
                    учет и аудит. Научная степень: магистр</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Profile;