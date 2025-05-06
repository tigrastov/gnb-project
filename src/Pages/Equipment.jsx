
import truck1 from '/kamaz.png';
import truck2 from '/ГНБ MDRILLING MT23х7.png';
import truck3 from '/TEREX TLB 825 RM.png';
import truck4 from '/CARTER.png';
import truck5 from '/Легковые автомобили.png';

import './Equipment.css';


function Equipment() {
  return (
    <div className="equipment-page">
      <h1 className="equipment-title">Наш парк техники</h1>
      <div className="equipment-content">
        
       <div className='truck-1'>
       <p>
       КамАЗ 43118 + прицеп ЧМЗАП 83582-03 
       <br></br>
КамАЗ укомплектован всем необходимым оборудованием для качественной и
<br></br>
бесперебойной работы установки ГНБ, доставка самой установки ГНБ до объекта,
<br></br>
подача смеси бентонита, которая необходима при формировании скважины при
<br></br>
бурении. Полный привод КамАЗа позволяет доставить установку в
<br></br>
труднопроходимые районы.
        </p>
 
        <img className='img-1' src={truck1} alt="Volvo" />
       </div>

       <div className='truck-2'>
       <p>
       Установка ГНБ MDRILLING MT23х7 
       <br></br>
Основные характеристики:
<br></br>
- длинна прокола до 300 метров.
<br></br>
- диаметр труб от 32 мм до 710 мм
        </p>
 
        <img className='img-2' src={truck2} alt="Volvo" />


       </div>


       <div className='truck-3'>
       <p>
       Экскаватор-погрузчик TEREX TLB 825 RM
       <br></br>
Сочетает в себе оптимальные габариты и объём ковшей для разработки
<br></br>
котлованов и траншей, а также погрузки грунта в самосвал при необходимости его
<br></br>
утилизации. Выполняет подвоз инертных материалов.
<br></br>
Имеет дополнительную комплектацию: гидромолот, вращатель.
        </p>
 
        <img className='img-3' src={truck3} alt="Volvo" />
       </div>



       <div className='truck-4'>
       <p>
       Мини экскаватор CARTER
       <br></br>
Незаменим для работ в стеснённых условиях и благоустройстве.
<br></br>
Имеется дополнительная комплектация: гидромолот.
        </p>
 
        <img className='img-4' src={truck4} alt="Volvo" />
       </div>



       <div className='truck-5'>
       <p>
       Легковые автомобили
       <br></br>
- УАЗ 220695-04
<br></br>
- Great Wall Poer King Kong
<br></br>
- Лада «Ларгус»
<br></br>
Для перевозки бригад рабочих и инструмента.
        </p>
 
        <img className='img-5' src={truck5} alt="Volvo" />
       </div>


      </div>
    </div>
  );
}

export default Equipment;