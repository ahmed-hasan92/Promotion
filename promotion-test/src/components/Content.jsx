import React from "react";

const Content = ({ tableDate }) => {
  return (
    <div className="h-[500px] w-full py-1 px-2 overflow-hidden border border-stone-300 rounded-md shadow-md shadow-stone-300">
      <div className="h-full overflow-x-scroll">
        <table className="w-[2400px]">
          <thead className="sticky top-0">
            <tr className="text-[0.9rem] font-bold text-stone-50 bg-green-700">
              <th className="w-[300px] py-2 px-4 text-start">Division</th>
              <th className="w-[150px] py-2 px-4 ">SKU Count</th>
              <th className="w-[200px] py-2 px-4">Basket Cost Regular</th>
              <th className="w-[200px] py-2 px-4">Basket Cost Promo</th>
              <th className="w-[150px] py-2 px-4">Cost Variance %</th>
              <th className="w-[200px] py-2 px-4">Basket RSP Regular</th>
              <th className="w-[200px] py-2 px-4">Basket RSP Promo</th>
              <th className="w-[200px] py-2 px-4">Customer Saving %</th>
              <th className="w-[200px] py-2 px-4">Basket Margin Regular</th>
              <th className="w-[200px] py-2 px-4">Basket Margin Promo</th>
              <th className="w-[250px] py-2 px-4">Projected Sales</th>
              <th className="w-[200px] py-2 px-4">GP Value</th>
              <th className="w-[100px] py-2 px-4">GP%</th>
            </tr>
          </thead>
          <tbody>
            {tableDate.map((row, index) => (
              <tr
                key={index}
                className={`border-t text-[0.9rem]  ${
                  row.division === "Grand Total"
                    ? "bg-green-200 font-bold  text-stone-800   "
                    : "cursor-pointer hover:-translate-y-1.5 hover:duration-300 hover:bg-stone-100  hover:font-semibold"
                }`}
              >
                <td className="w-[300px] py-2 px-4 text-start">
                  {row.division}
                </td>
                <td className="w-[150px] py-2 px-4 text-center">
                  {row.skuCount}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketCostRegular}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketCostPromo}
                </td>
                <td className="w-[150px] py-2 px-4 text-center">
                  {row.costVariance}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketRSPRegular}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketRSPPromo}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.customerSaving}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketMarginRegular}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.basketMarginPromo}
                </td>
                <td className="w-[250px] py-2 px-4 text-center">
                  {row.salesProjected}
                </td>
                <td className="w-[200px] py-2 px-4 text-center">
                  {row.gpValue}
                </td>
                <td className="w-[100px] py-2 px-4 text-center">
                  {row.gpPercent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
