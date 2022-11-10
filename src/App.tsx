import { useMemo, useState } from "react";
import "./App.css";
import { InvestForm } from "./componets/InvestForm";
import { InvestTable } from "./componets/InvestTable";
import { IInvestInfo } from "./types";
import { InvestChart } from "./componets/InvestChart";

const MONTHS = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];

function App() {
  const [investInfo, setInvestInfo] = useState<IInvestInfo | null>(null);

  const calculatedData = useMemo<{
    months: string[];
    values: number[];
  } | null>(() => {
    if (investInfo === null) return null;

    let calcValues: number[] = [];
    calcValues[0] =
      investInfo.deposit +
      investInfo.monthlyDeposit +
      investInfo.deposit * (investInfo.rate / 100 / 12);

    for (let i = 1; i < MONTHS.length; i++) {
      calcValues[i] =
        calcValues[i - 1] +
        investInfo.monthlyDeposit +
        calcValues[i - 1] * (investInfo.rate / 100 / 12);
    }
    return { months: MONTHS, values: calcValues };
  }, [investInfo]);

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Investiční kalkulačka</h1>

      <InvestForm
        className="form-class"
        onSubmit={(data) => setInvestInfo(data)}
      ></InvestForm>

      <div className="results">
        {calculatedData ? (
          <InvestTable investData={calculatedData}></InvestTable>
        ) : (
          ""
        )}
        {calculatedData ? (
          <InvestChart
            className="line-chart"
            investData={calculatedData}
          ></InvestChart>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
