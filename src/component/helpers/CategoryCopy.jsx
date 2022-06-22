import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomizedSelects from "./CustomizedSelects";
import DataTable from "../helpers/table/tableCopy";
import style2 from "../content/home/home.module.css";
import { CategoryDatas } from "./CategoryDatas";

export function CategoryCopy(props) {
  const [value, setValue] = useState("1");
  const [isLimited, setIsLimited] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const rows = [
      props.rows,
      props.rows2,
      props.rows3,
      props.rows4,
      props.rows5,
      props.rows6,
      props.rows7,
      props.rows8,
    ];
    const limitedTab = props.limits?.find((limit) => limit.tab === newValue);
    if (limitedTab && rows[newValue - 1].length >= limitedTab.max)
      setIsLimited(true);
    else setIsLimited(false);
  };

  const map = props.map.map((a) => (
    <Tab key={a.id} label={a.label} value={a.id} />
  ));

  const datatablemap = CategoryDatas(props);

  const map2 = props.map.map((a) => (
    <TabPanel key={a.id} value={a.id}>
      {a.id === "1" ? (
        <>
          {a.id2 === "Feedback" ? (
            datatablemap[0]
          ) : a.id2 === "AboutHeader" ? (
            datatablemap[8]
          ) : a.id2 === "ServiceHome" ? (
            datatablemap[15]
          ) : a.id2 === "NewsHeader" ? (
            datatablemap[18]
          ) : a.id2 === "ContactHeader" ? (
            datatablemap[22]
          ) : a.id2 === "siteMainContent" ? (
            datatablemap[24]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns} rows={props.rows} />
        </>
      ) : a.id === "2" ? (
        <>
          {a.id2 === "HOMEDetails" ? (
            datatablemap[1]
          ) : a.id2 === "AboutSuspention" ? (
            datatablemap[9]
          ) : a.id2 === "ServiceAutoRepair" ? (
            datatablemap[16]
          ) : a.id2 === "NewsCategory" ? (
            datatablemap[19]
          ) : a.id2 === "ContactInfo" ? (
            datatablemap[23]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns2} rows={props.rows2} />
        </>
      ) : a.id === "3" ? (
        <>
          {a.id2 === "HOMELocation" ? (
            datatablemap[2]
          ) : a.id2 === "AboutExperiance" ? (
            datatablemap[10]
          ) : a.id2 === "ServiceRapair" ? (
            datatablemap[17]
          ) : a.id2 === "NewsMain" ? (
            datatablemap[20]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns3} rows={props.rows3} />
        </>
      ) : a.id === "4" ? (
        <>
          {a.id2 === "HomePartner" ? (
            datatablemap[3]
          ) : a.id2 === "AboutVehicle" ? (
            datatablemap[11]
          ) : a.id2 === "NewsSlider" ? (
            datatablemap[21]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns4} rows={props.rows4} />
        </>
      ) : a.id === "5" ? (
        <>
          {a.id2 === "HomeSlider" ? (
            datatablemap[4]
          ) : a.id2 === "AboutProfisson" ? (
            datatablemap[12]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns5} rows={props.rows5} />
        </>
      ) : a.id === "6" ? (
        <>
          {a.id2 === "HomeStep" ? (
            datatablemap[5]
          ) : a.id2 === "AboutSlider" ? (
            datatablemap[13]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns6} rows={props.rows6} />
        </>
      ) : a.id === "7" ? (
        <>
          {a.id2 === "HomeStepCategory" ? (
            datatablemap[6]
          ) : a.id2 === "AboutVideo" ? (
            datatablemap[14]
          ) : (
            <></>
          )}
          <DataTable columns={props.columns7} rows={props.rows7} />
        </>
      ) : a.id === "8" ? (
        <>
          {datatablemap[7]}
          <DataTable columns={props.columns8} rows={props.rows8} />
        </>
      ) : (
        <></>
      )}
    </TabPanel>
  ));
  return (
    <div className={style2.wrapper}>
      <div className={style2.Block}>
        {props.title}
        <CustomizedSelects
          showCreateModal={props.showCreateModal}
          isLimited={isLimited}
        />
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {map}
            </TabList>
          </Box>
          {map2}
        </TabContext>
      </Box>
    </div>
  );
}
