import { Guitar } from '../../../../../../types/guitar';
import { GuitarTypeInRussian } from '../../../../const';

type CharacteristicType = {
  guitar: Guitar
}

function Characteristic({guitar}: CharacteristicType):JSX.Element {
  return (
    <table className="tabs__table">
      <tbody>
        <tr className="tabs__table-row">
          <td className="tabs__title">Артикул:</td>
          <td className="tabs__value">{guitar.vendorCode}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Тип:</td>
          <td className="tabs__value">{GuitarTypeInRussian[guitar.type]}</td>
        </tr>
        <tr className="tabs__table-row">
          <td className="tabs__title">Количество струн:</td>
          <td className="tabs__value">{`${guitar.stringCount} струнная`}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Characteristic;
