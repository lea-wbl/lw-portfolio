// import { trad } from "../lang/trad";
// import { useLanguage } from "../contexts/LanguageContext";

function Brick({ title, subtitle, startDate, endDate, side }: { title: String; subtitle: String, startDate: String, endDate: String, side: String }) {
  //const { lang } = useLanguage();
  return (
    <div className={`flex mt-5 ${(side === 'right') && 'flex-row-reverse'}`}>
      <div className="text-green-100 grid content-between">
        <div className={`border-t-2 border-green-100 end-date ${(side === 'left') ? 'pe-10 me-2' : 'ps-10 ms-2'}`}>{endDate}</div>
        <div className={`border-b-2 border-green-100 start-date ${(side === 'left') ? 'pe-10 me-2' : 'ps-10 ms-2'}`}>{startDate}</div>
      </div>

      <div className="brick">
        <div className="brick-knobs">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="brick-base">
          <h4>{title}</h4>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Brick;
