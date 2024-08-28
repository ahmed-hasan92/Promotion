import React from "react";

const Content = ({ tableData }) => {
  return (
    <div className="h-[85%]  w-full py-1 px-2 overflow-hidden border border-stone-300 rounded-md shadow-md shadow-stone-300">
      <div className="h-full py-1 overflow-x-scroll">
        <table className="w-[2400px] h-full">
          <thead className="sticky top-0">
            <tr className="text-[0.9rem] font-bold text-stone-800 bg-neutral-100 shadow-md shadow-stone-400 border-b border-stone-50">
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
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border-t text-[0.9rem]  ${
                  row.division === "Grand Total"
                    ? "bg-green-700 font-bold  text-stone-50   "
                    : "cursor-pointer hover:bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200   hover:shadow-md hover:shadow-stone-400 hover:text-stone-900   hover:font-semibold"
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
