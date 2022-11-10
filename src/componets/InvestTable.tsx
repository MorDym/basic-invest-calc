import { FC } from "react";
import { NumericFormat } from "react-number-format";

interface IProps {
  className?: string;
  investData: {
    months: string[];
    values: number[];
  };
}

export const InvestTable: FC<IProps> = ({ className, investData }) => {
  return (
    <>
      <h2>Předpokládané výnosy Vaší investice</h2>

      <>
        <table className={className}>
          <thead>
            <tr>
              {investData.months.map((month, index) => (
                <th key={index}>{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {investData.values.map((val, index) => (
                <td key={index}>
                  <NumericFormat
                    suffix=" Kč"
                    thousandSeparator=" "
                    value={(Math.round(val) * 100) / 100 || "0"}
                    displayType="text"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </>

      {/* <table>
        <thead>
          <tr>
            <th>{investData.months[0]}</th>
            <th>{investData.months[1]}</th>
            <th>{investData.months[2]}</th>
            <th>{investData.months[3]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[0]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[1]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[2]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[3]) * 100) / 100 || 0}
                />
              }
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>{investData.months[4]}</th>
            <th>{investData.months[5]}</th>
            <th>{investData.months[6]}</th>
            <th>{investData.months[7]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[4]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[5]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[6]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[7]) * 100) / 100 || 0}
                />
              }
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>{investData.months[8]}</th>
            <th>{investData.months[9]}</th>
            <th>{investData.months[10]}</th>
            <th>{investData.months[11]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[8]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[9]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[10]) * 100) / 100 || 0}
                />
              }
            </td>
            <td>
              {
                <NumericFormat
                  suffix=" Kč"
                  thousandSeparator=" "
                  value={(Math.round(investData.values[11]) * 100) / 100 || 0}
                />
              }
            </td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};
