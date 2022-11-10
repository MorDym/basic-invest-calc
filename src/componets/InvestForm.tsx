import { FC, useState } from "react";
import { IInvestInfo } from "../types";
import { NumericFormat } from "react-number-format";

interface IProps {
  className?: string;
  onSubmit: (data: IInvestInfo) => void;
}

export const InvestForm: FC<IProps> = ({ className, onSubmit }) => {
  const [firstDeposit, setFirstDeposit] = useState<number>(0);
  const [monthlyDep, setMonthlyDep] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  const submitHandle = (e: any) => {
    e.preventDefault();
    const formData: IInvestInfo = {
      deposit: firstDeposit,
      monthlyDeposit: monthlyDep,
      rate: rating,
    };
    onSubmit(formData);
  };

  return (
    <form className={className} onSubmit={submitHandle}>
      <label htmlFor="inputDep">
        Zadejte prvotní vklad:<sup>*</sup>
      </label>

      <NumericFormat
        id="inputDep"
        value={firstDeposit}
        suffix=" Kč"
        thousandSeparator={" "}
        onValueChange={(e) =>
          setFirstDeposit((firstDeposit) =>
            e.floatValue !== undefined ? e.floatValue : firstDeposit
          )
        }
      />
      <label htmlFor="inputMonth">Zadejte měsíční příspěvek:</label>
      <NumericFormat
        id="inputMonth"
        value={monthlyDep}
        suffix=" Kč"
        thousandSeparator={" "}
        onValueChange={(e) =>
          setMonthlyDep((monhtlyDep) =>
            e.floatValue !== undefined ? e.floatValue : monhtlyDep
          )
        }
      />
      <label htmlFor="inputRate">
        Zadejte procento úroku:<sup>*</sup>
      </label>
      <NumericFormat
        id="inputRate"
        value={rating}
        suffix=" %"
        thousandSeparator={" "}
        onValueChange={(e) =>
          setRating((rating) =>
            e.floatValue !== undefined ? e.floatValue : rating
          )
        }
      />
      <p className="helper">Desetinu zapište tečkou</p>
      <button type="submit">Spočítat</button>
      <p>
        <sup>*</sup> povinné pole
      </p>
    </form>
  );
};
