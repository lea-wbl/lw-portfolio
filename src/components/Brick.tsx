import "../styles/brick.css";

export interface IBrick {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  animate: boolean;
  position: string;
}

const Brick = ({
  title,
  subtitle,
  startDate,
  endDate,
  animate,
  position,
}: IBrick) => {
  return (
    <div
      className={`flex w-full ${animate && `animate-${position}`} ${
        position === "bottom" ? "imbricated" : "z-10"
      }`}
    >
      <div className="text-green-100 w-1/4 hidden sm:grid content-between">
        <div className="border-t-2 border-green-100 me-2 end-date">
          {endDate}
        </div>
        <div className="border-b-2 border-green-100 me-2">{startDate}</div>
      </div>

      <div className="brick">
        <div className="brick-knobs">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="brick-base">
          <h4 className="text-lg font-semibold">{title}</h4>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default Brick;
