class ItemsProd {
    render() {

        var versionUpdate = (new Date()).getTime();

        var html_add = document.createElement("div");
        html_add.className = "content";

        html_add.innerHTML = `
        <div class="item" id="Трансмиссия">
            <a href="products_html/item-1.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/31jbmzl8093.jpg">
            </a>
            <p><b>ТРАНСМИССИЯ</b></p>
            <p>Т40А-0020010-04</p>
        </div>
        <div class="item" id="Сцепление">
            <a href="products_html/item-2.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/l1azfw50b8z.jpg">
            </a>
            <p><b>Муфта сцепления</b></p>
            <p>Т25-1601050-Б1</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-3.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/xzyb3epcm8q.jpg">
            </a>
            <p><b>ПВМ 4х4</b></p>
            <p>Т40А-2300010-В1</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-4.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/74r152yg19j.jpg">
            </a>
            <p><b>ВИЛКА ДВОЙНАЯ</b></p>
            <p>Т40А-2304001</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-5.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/nua516bljuo.jpg">
            </a>
            <p><b>ВАЛ</b></p>
            <p>Т40А-2302144</p>
        </div>
        <div class="item" id="Трактор Сельскохозяйственный">
            <a href="products_html/item-6.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/mzq3mo9ozxc.jpg">
            </a>
            <p><b>ТРАКТОР</b></p>
            <p>ЛТЗ-60АБ-10</p>
        </div>
        <div class="item">
            <a href="products_html/item-7.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/2dmpd0c6wv9.jpg">
            </a>
            <p><b>КАБИНА Т-40</b></p>
        </div>
        <div class="item" id="Трансмиссия">
            <a href="products_html/item-8.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/sq10979pb18.jpg">
            </a>
            <p><b>КПП В СБОРЕ</b></p>
            <p>Т40М1-0020050-В</p>
        </div>
        <div class="item" id="Кабина">
            <a href="products_html/item-9.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/uqtzfym9bl9.jpg">
            </a>
            <p><b>Капот ЛТЗ-60</b></p>
            <p>Т40М1-8402700</p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-10.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/4h0sb42vw1u.jpg">
            </a>
            <p><b>ДВИГАТЕЛЬ В СБОРЕ</b></p>
            <p>Д144-31</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-11.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/c4fe78d7xn3.jpg">
            </a>
            <p><b>КРОНШТЕЙН</b></p>
            <p>Т40А-2301010-Г</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-12.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/9cz0xvjnhb7.jpg">
            </a>
            <p><b>РЕДУКТОР В СБОРЕ</b></p>
            <p>Т40А-2306010/2306030</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-13.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/tmjbbzxrbla.jpg">
            </a>
            <p><b>ДИСК КОЛЕСНЫЙ</b></p>
            <p>Т40А-3101005</p>
        </div>
        <div class="item" id="Пусковой двигатель">
            <a href="products_html/item-14.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/sm35asa8h5e.jpg">
            </a>
            <p><b>Редуктор ПД8</b></p>
            <p>ПД-8-0000100</p>
        </div>
        <div class="item" id="Сцепление">
            <a href="products_html/item-15.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/hys5ls5d70d.jpg">
            </a>
            <p><b>КОРПУС В СБОРЕ</b></p>
            <p>Т25-1601010-Г1</p>
        </div>
        <div class="item" id="Сцепление">
            <a href="products_html/item-16.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/vi26l9o1cc1.jpg">
            </a>
            <p><b>ОТВОДКА В СБОРЕ</b></p>
            <p>Т25-1601060-Б</p>
        </div>
        <div class="item" id="Рулевое управление">
            <a href="products_html/item-17.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/x34a80xm33v.jpg">
            </a>
            <p><b>ГИДРОУСИЛИТЕЛЬ</b></p>
            <p>Т30-3405010-Е</p>
        </div>
        <div class="item" id="Рулевое управление">
            <a href="products_html/item-18.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/h8zc8sc9caw.jpg">
            </a>
            <p><b>НАСОС-ДОЗАТОР</b></p>
            <p>НДФ-80</p>
        </div>
        <div class="item" id="Пусковой двигатель">
            <a href="products_html/item-19.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/xxlf3d433ne.jpg">
            </a>
            <p><b>ДВИГАТЕЛЬ ПД8</b></p>
            <p>ПД8-0000120-?</p>
        </div>
        <div class="item" id="Пусковой двигатель">
            <a href="products_html/item-20.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/zluivuvuie5.jpg">
            </a>
            <p><b>Двигатель пусковой</b></p>
            <p>ПД-8</p>
        </div>
        <div class="item">
            <a href="products_html/item-21.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/eyybpgrqkbl.jpg">
            </a>
            <p><b>КАПОТ</b></p>
            <p>Т40М1-8402700-01</p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-22.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/m0yw27l4ta9.jpg">
            </a>
            <p><b>ДВЕРЬ ЛТЗ 55</b></p>
            <p>Т40М1-6708010-01</p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-23.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/0lqmraa8ve5.jpg">
            </a>
            <p><b>ДВЕРЬ ЛТЗ-60</b></p>
            <p>Т40М2-6708010</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-24.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/ds5djnae65f.jpg">
            </a>
            <p><b>ПОДВЕСКА</b></p>
            <p>Т40А-2305010-Б</p>
        </div>
        <div class="item" id="Коробка передач">
            <a href="products_html/item-25.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/5997me7hcwq.jpg">
            </a>
            <p><b>МЕХАНИЗМ В СБОРЕ</b></p>
            <p>Т40М4-1703120</p>
        </div>
        <div class="item" id="Раздаточная коробка">
            <a href="products_html/item-26.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/6915v0my9tc.jpg">
            </a>
            <p><b>РАЗДАТКА</b></p>
            <p>Т40АМ-1802010</p>
        </div>
        <div class="item" id="Сцепление">
            <a href="products_html/item-27.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/cqhgns5pc00.jpg">
            </a>
            <p><b>КОРПУС</b></p>
            <p>Т25-1601005</p>
        </div>
        <div class="item" id="Рулевое управление">
            <a href="products_html/item-28.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/6f6ngbp36n6.jpg">
            </a>
            <p><b>ГИДРОЦИЛИНДР</b></p>
            <p>Т40М1-3429005</p>
        </div>
        <div class="item">
            <a href="products_html/item-29.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/3l86klij4kp.jpg">
            </a>
            <p><b>ЦИЛИНДР ЦС</b></p>
            <p>Т40М1-4616620</p>
        </div>
        <div class="item">
            <a href="products_html/item-30.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/jqyfep1e7a8.jpg">
            </a>
            <p><b>КАБИНА В СБОРЕ</b></p>
            <p>Т40М4-0050010-В</p>
        </div>
        <div class="item" id="Трансмиссия">
            <a href="products_html/item-31.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/o42r1falvqo.jpg">
            </a>
            <p><b>РЕДУКТОР В СБОРЕ</b></p>
            <p>Т40М4-2407010</p>
        </div>
        <div class="item" id="Трактор Сельскохозяйственный">
            <a href="products_html/item-32.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/418yxrf5y40.jpg">
            </a>
            <p><b>ТРАКТОР</b></p>
            <p>ЛТЗ-60АБ-10</p>
        </div>
        <div class="item">
            <a href="products_html/item-33.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/4rm8skmlcj6.jpg">
            </a>
            <p><b>ПОГРУЗЧИК</b></p>
            <p>ПГТ-360</p>
        </div>
        <div class="item">
            <a href="products_html/item-34.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/qema3ugagiv.jpg">
            </a>
            <p><b>ОТВАЛ</b></p>
        </div>
        <div class="item">
            <a href="products_html/item-35.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/gsc1l05r898.jpg">
            </a>
            <p><b>ЩЕТКА В СБОРЕ</b></p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-36.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/9vyf5tn2kp2.jpg">
            </a>
            <p><b>Проставка Д65</b></p>
            <p>36-1002312-В3</p>
        </div>
        <div class="item" id="Сцепление">
            <a href="products_html/item-37.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/9dycfe21qd1.jpg">
            </a>
            <p><b>БОЛТ В СБОРЕ</b></p>
            <p>Т25-1601009-А1</p>
        </div>
        <div class="item" id="Раздаточная коробка">
            <a href="products_html/item-38.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/aecbsdubx5y.jpg">
            </a>
            <p><b>ШЕСТЕРНЯ</b></p>
            <p>Т40А-1802036</p>
        </div>
        <div class="item" id="Тормоза">
            <a href="products_html/item-39.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/283xjr3skpu.jpg">
            </a>
            <p><b>БАРАБАН В СБОРЕ</b></p>
            <p>Т25-3502090</p>
        </div>
        <div class="item">
            <a href="products_html/item-40.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/q2lnu6oygy0.jpg">
            </a>
            <p><b>Диск сцепления МТЗ</b></p>
            <p>70-1601130-02</p>
        </div>
        <div class="item">
            <a href="products_html/item-41.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/adot8yvavxv.jpg">
            </a>
            <p><b>Диск сцепления</b></p>
            <p>70-1601130</p>
        </div>
        <div class="item">
            <a href="products_html/item-42.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/1apxpqs1fbk.jpg">
            </a>
            <p><b>Диск сцепления ЮМЗ</b></p>
            <p>45-1604040</p>
        </div>
        <div class="item">
            <a href="products_html/item-43.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/pzjov9lrfcg.jpg">
            </a>
            <p><b>Диск сцепления ЮМЗ</b></p>
            <p>45-1604040-10</p>
        </div>
        <div class="item">
            <a href="products_html/item-44.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/7l3zrqma9j8.jpg">
            </a>
            <p><b>Диск сцепления ВОМ...</b></p>
            <p>45-1604050</p>
        </div>
        <div class="item">
            <a href="products_html/item-45.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/eybbas77r2d.jpg">
            </a>
            <p><b>Диск сцепления ВОМ...</b></p>
            <p>45-1604050-10</p>
        </div>
        <div class="item">
            <a href="products_html/item-46.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/dkixqthxyrm.jpg">
            </a>
            <p><b>Диск сцепления ДТ-...</b></p>
            <p>А52.21.000-70</p>
        </div>
        <div class="item">
            <a href="products_html/item-47.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/n6cd7w76n0b.jpg">
            </a>
            <p><b>Диск сцепления ДТ-...</b></p>
            <p>А52.21.000</p>
        </div>
        <div class="item">
            <a href="products_html/item-48.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/6zdy5ej4ogy.jpg">
            </a>
            <p><b>Диск сцепления Т-150</b></p>
            <p>150.21.024</p>
        </div>
        <div class="item">
            <a href="products_html/item-49.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/v8lpobsapma.jpg">
            </a>
            <p><b>Диск сцепления А-01</b></p>
            <p>01М-21сб</p>
        </div>
        <div class="item">
            <a href="products_html/item-50.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/ng8cz99vx15.jpg">
            </a>
            <p><b>Диск сцепления Т-25</b></p>
            <p>25.21.025А</p>
        </div>
        <div class="item">
            <a href="products_html/item-51.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/t0cqp9dx4df.jpg">
            </a>
            <p><b>Диск сцепления Т-16</b></p>
            <p>ДСШ14.21.021-2А</p>
        </div>
        <div class="item">
            <a href="products_html/item-52.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/tl35r8due7p.jpg">
            </a>
            <p><b>Диск сцепления Т-40</b></p>
            <p>Т25-1601130-В</p>
        </div>
        <div class="item">
            <a href="products_html/item-53.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/28c43vi8zle.jpg">
            </a>
            <p><b>Диск сцепления ЛТЗ</b></p>
            <p>Т25-1601130-Г</p>
        </div>
        <div class="item">
            <a href="products_html/item-54.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/is19a7qy6xk.jpg">
            </a>
            <p><b>Диск тормозной МТЗ</b></p>
            <p>50-3502050</p>
        </div>
        <div class="item">
            <a href="products_html/item-55.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/300/822ob51ivc4.jpg">
            </a>
            <p><b>Кабина Т-40</b></p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-56.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/zvf5njdkr99.jpg">
            </a>
            <p><b>Картер маховика</b></p>
            <p>248-1002312</p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-57.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/hfrf7fvykiw.jpg">
            </a>
            <p><b>Вал коленчатый</b></p>
            <p>Д37М-1005011В</p>
        </div>
        <div class="item">
            <a href="products_html/item-58.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/iql3epf9ugw.jpg">
            </a>
            <p><b>Д21-1005011 В2</b></p>
            <p>Вал коленчатый Д21</p>
        </div>
        <div class="item">
            <a href="products_html/item-59.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/81l16ju2dgt.jpg">
            </a>
            <p><b>Вал коленчатый СМД...</b></p>
            <p>20-04с9</p>
        </div>
        <div class="item">
            <a href="products_html/item-60.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/u9q4xsag72b.jpg">
            </a>
            <p><b>Коленвал СМД 18/22</b></p>
            <p>20-04с9</p>
        </div>
        <div class="item">
            <a href="products_html/item-61.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/duqttjp06mo.jpg">
            </a>
            <p><b>Коленвал Т-25</b></p>
            <p>Д21-1005011 В2</p>
        </div>
        <div class="item">
            <a href="products_html/item-62.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/qtb97ptmjbe.jpg">
            </a>
            <p><b>Коленвал Д240</b></p>
            <p>240-1005020-B1</p>
        </div>
        <div class="item">
            <a href="products_html/item-63.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/ko8gpfaok0k.jpg">
            </a>
            <p><b>Коленчатый вал ПД-10</b></p>
            <p>ПД-10</p>
        </div>
        <div class="item" id="Тяга центральная Т40_ЛТЗ_МТЗ_Т25">
            <a href="products_html/item-64.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/sa63qel32pz.jpg">
            </a>
            <p><b>Тяга центральная</b></p>
            <p>Т25-4628050</p>
        </div>
        <div class="item" id="Тяга центральная Т40_ЛТЗ_МТЗ_Т25">
            <a href="products_html/item-65.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/qv2p744u211.jpg">
            </a>
            <p><b>Тяга центральная</b></p>
            <p>А61.03.000</p>
        </div>
        <div class="item" id="Тяга центральная Т40_ЛТЗ_МТЗ_Т25">
            <a href="products_html/item-66.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/150/ak9yfy7uv5m.jpg">
            </a>
            <p><b>Тяга центральная</b></p>
            <p>14.56.052-1</p>
        </div>
        <div class="item" id="Передний неведущий мост">
            <a href="products_html/item-67.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/pbywal2q7fl.jpg">
            </a>
            <p><b>Ось</b></p>
            <p>Т40М4-0000530-А1</p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-68.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/joe7245plfh.jpg">
            </a>
            <p><b>Фильтр масляный</b></p>
            <p>Д37М-1407500</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-69.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/362setvx09g.jpg">
            </a>
            <p><b>Передний ведущий мост</b></p>
            <p>Т40АМ1-2300020</p>
        </div>
        <div class="item" id="Рулевое управление">
            <a href="products_html/item-70.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/tz6ypfgveqm.jpg">
            </a>
            <p><b>Тяга рулевая правая/левая</b></p>
            <p>Т40А-3003020</p>
        </div>
        <div class="item" id="Пусковой двигатель">
            <a href="products_html/item-71.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/jlvdj0wl4yv.jpg">
            </a>
            <p><b>Пусковой двигатель</b></p>
            <p>П-10УД</p>
        </div>
        <div class="item" id="Пусковой двигатель">
            <a href="products_html/item-72.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/x6xkndofndv.jpg">
            </a>
            <p><b>Пусковой двигатель</b></p>
            <p>П-350</p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-73.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/fam3aa7plkx.jpg">
            </a>
            <p><b>Двигатель в сборе</b></p>
            <p>Д144-61</p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-74.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/i01nu3ssrk1.jpg">
            </a>
            <p><b>Дверь Т-40</b></p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-75.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/zogq18v9tcp.jpg">
            </a>
            <p><b>Кронштейн с педалями</b></p>
            <p>Т40М1-3500010</p>
        </div>
        <div class="item" id="Трансмиссия">
            <a href="products_html/item-76.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/o4mb83l480f.jpg">
            </a>
            <p><b>Ходоуменьшитель</b></p>
            <p>Т25-1901010</p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-77.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/fje60v9o4o0.jpg">
            </a>
            <p><b>Ремкомплект ПВМ</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-78.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/lux2b77pczn.jpg">
            </a>
            <p><b>Р/к КПП</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-79.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/7fro61e6hod.jpg">
            </a>
            <p><b>Р/к конечной передачи</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-80.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/t5dwbf38vqq.jpg">
            </a>
            <p><b>Р/к задней передачи</b></p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-81.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/cvd1547u55t.jpg">
            </a>
            <p><b>ПВМ ЛТЗ 60</b></p>
            <p>Т40АМ1-2300010</p>
        </div>
        <div class="item" id="Вал отбора мощности">
            <a href="products_html/item-82.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/hb6m797kxbr.jpg">
            </a>
            <p><b>Удлинитель в сборе</b></p>
            <p>Т25-4202160-Б</p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-83.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/6zccx2lk2x3.jpg">
            </a>
            <p><b>Р/К подвески колеса</b></p>
            <p>Т40А-2305090</p>
        </div>
        <div class="item" id="Тяга центральная Т40_ЛТЗ_МТЗ_Т25">
            <a href="products_html/item-84.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/3dmufniwfae.jpg">
            </a>
            <p><b>Чека с кольцом</b></p>
            <p>15.62С15-А2</p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-85.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/kccngilmx7j.jpg">
            </a>
            <p><b>Привод гидронасоса</b></p>
            <p>Д37М-4618010А</p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-86.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/6turpy8flw6.jpg">
            </a>
            <p><b>Р/К ГУР</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-87.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/efryb99f2w7.jpg">
            </a>
            <p><b>Р/К компрессора</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-88.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/mzo30mevliy.jpg">
            </a>
            <p><b>Р/К наконечника рулевой тяги</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-89.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/7jbaj23rcgt.jpg">
            </a>
            <p><b>Р/К наконечника рулевой тяги</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-90.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/69j7d5yv4ot.jpg">
            </a>
            <p><b>Р/К направляющих втулок</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-91.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/yu3yamj9hl5.jpg">
            </a>
            <p><b>Р/К ПВМ</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-92.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/md1u450oalg.jpg">
            </a>
            <p><b>Р/К Р80</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-93.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/mjmf4nf9mcr.jpg">
            </a>
            <p><b>Р/К раздаточной короробки</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-94.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/nwuglvsgfdb.jpg">
            </a>
            <p><b>Р/К ЦС80</b></p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-95.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/elnlpf8jjtc.jpg">
            </a>
            <p><b>Р/К ЦС90</b></p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-96.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/dupq9n2e02l.jpg">
            </a>
            <p><b>Радиатор масляный Д144</b></p>
            <p>Д144-1405020А</p>
        </div>
        <div class="item" id="Т-25">
            <a href="products_html/item-97.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/e84vpsbet1r.jpg">
            </a>
            <p><b>Передача бортовая Т-25</b></p>
            <p>А25.39</p>
        </div>
        <div class="item" id="Т-25">
            <a href="products_html/item-98.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/441ce2k2gka.jpg">
            </a>
            <p><b>Передача главная Т-25</b></p>
            <p>А25.37-Б</p>
        </div>
        <div class="item" id="Т-25">
            <a href="products_html/item-99.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/vhi45qzlh7z.jpg">
            </a>
            <p><b>Корпус сцепления Т-25</b></p>
            <p>А25.21.101-Б</p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-100.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/t0ujpw1kr6q.jpg">
            </a>
            <p><b>Кабина Т-40</b></p>
        </div>
        <div class="item" id="Б/У (РЕСТАВРАЦИЯ)">
            <a href="products_html/item-101.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/3z3g24k07mj.jpg">
            </a>
            <p><b>Кабина Т-40</b></p>
        </div>
        <div class="item" id="Двигатель">
            <a href="products_html/item-102.html?${versionUpdate}">
                <img src="http://abobatest.tmweb.ru/img/g0r782uqggm.jpg">
            </a>
            <p><b>Фильтр масляный</b></p>
            <p>Д37М-1407500</p>
        </div>
        <div class="item" id="Навеска">
            <a href="products_html/item-103.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/fragvd19ja7.jpg">
            </a>
            <p><b>Поперечина</b></p>
            <p>Т25-2805080-Б</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-104.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/zpv641042rn.jpg">
            </a>
            <p><b>Крышка подшипника</b></p>
            <p>Т40А-2306134-Б2</p>
        </div>
        <div class="item" id="Рулевое управление">
            <a href="products_html/item-105.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/wj1y60mdw61.jpg">
            </a>
            <p><b>Клин</b></p>
            <p>Т40-3401003</p>
        </div>
        <div class="item" id="Навеска">
            <a href="products_html/item-106.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/gdhfvl3swzs.jpg">
            </a>
            <p><b>Механизм навески</b></p>
            <p>Т25-4628510-В</p>
        </div>
        <div class="item" id="Ремкомплекты">
            <a href="products_html/item-107.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/ostb8r34s3f.jpg">
            </a>
            <p><b>Ремкомплект ПВМ</b></p>
        </div>
        <div class="item" id="Кабина">
            <a href="products_html/item-108.html?${versionUpdate}">
                <img src="http://abobatest.tmweb.ru/img/jnb021jgs50.jpg">
            </a>
            <p><b>Дверь левая</b></p>
            <p>Т40М1-6708020</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-109.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/rihf453zn0y.jpg">
            </a>
            <p><b>Кронштейн</b></p>
            <p>Т40А-2305045-Е</p>
        </div>
        <div class="item" id="Передний ведущий мост">
            <a href="products_html/item-110.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/9xjjt40z6mj.jpg">
            </a>
            <p><b>Кронштейн</b></p>
            <p>Т40А-2305045</p>
        </div>
        <div class="item">
            <a href="products_html/item-111.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/q0otc85dhbk.jpg">
            </a>
            <p><b>Кронштейн малый</b></p>
            <p>Т40А-2302030</p>
        </div>
        <div class="item" id="Рама">
            <a href="products_html/item-112.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/rwkduv0cdmz.jpg">
            </a>
            <p><b>Лонжерон</b></p>
            <p>Т40М4-2801070</p>
        </div>
        <div class="item" id="Рама">
            <a href="products_html/item-113.html?${versionUpdate}">
                <img src="http://www.ltz.ru/new/idb/asis/tc9qj1658x2.jpg">
            </a>
            <p><b>Лонжерон</b></p>
            <p>Т40М2-2801070</p>
        </div>
        <div class="item">
            <a href="products_html/item-114.html?${versionUpdate}">
                <img src="http://abobatest.tmweb.ru/img/pzcmqcj4f0c.jpg">
            </a>
            <p><b>Кронштейн (большой)</b></p>
            <p>Т40АМ1-2302001</p>
        </div>
        `;
        document.body.appendChild(html_add);
    }
}

const itemsProd = new ItemsProd();
itemsProd.render();