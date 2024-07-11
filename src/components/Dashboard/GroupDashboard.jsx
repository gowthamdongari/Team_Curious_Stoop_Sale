import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../widget/Widget";
import ComplexTable from "./Components/ComplexTable";

import {columnsDataCheck, columnsDataComplex} from "./variables/columnsData";
import tableDataComplexYouOwe from "./variables/tableDataComplexYouOwe.json"
import tableDataComplexYouGet from "./variables/tableDataComplexYouGet.json"

function GroupDashboard() {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Total Balance"}
          subtitle={"+ $340.5"}
          titleColor={"text-gray-900"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"You Pay"}
          subtitle={"$642.39"}
          titleColor={"text-red-700"}
          subtitleColor={"text-red-400"}
        />
        <Widget
          icon={<MdBarChart className="h-6 w-6" />}
          title={"You Get"}
          subtitle={"$574.34"}
          titleColor={"text-green-700"}
          subtitleColor={"text-green-600"}
        />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        

        {/* Complex Table , Task & Calendar */}
        
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplexYouOwe}
          TableName="You PAY"
          titleColor={"text-red-700"}
          subtitleColor={"text-red-400"}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplexYouGet}
          TableName="You GET"
          titleColor={"text-green-700"}
          subtitleColor={"text-green-600"}
        />

      </div>
    </div>
  );
}

export default GroupDashboard;
