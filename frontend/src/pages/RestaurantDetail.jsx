import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import RestaurantHeading from "../components/Layout/Restaurant_Detail/RestaurantHeading";
import Overview from "../components/Layout/Restaurant_Detail/Overview";
import Menu from "../components/Layout/Restaurant_Detail/Menu";
import FAQs from "../components/Layout/Restaurant_Detail/FAQs";
import Location from "../components/Layout/Restaurant_Detail/Location";
import Review from "../components/Layout/Restaurant_Detail/Review";

const RestaurantDetail = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="pt-[4rem] min-h-[calc(100vh-4rem)] flex">
      {/* Left Scrollable Section */}
      <div className="w-2/3 p-4 overflow-y-auto">
        <RestaurantHeading />
        {/* Material UI Tabs */}
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", mb: 5 }}
          className="container"
        >
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "600",
                fontFamily: "Montserrat, sans-serif",
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Menu" />
            <Tab label="Review" />
            <Tab label="Map" />
            <Tab label="Condition" />
            <Tab label="FAQs" />
          </Tabs>
        </Box>
        {/* Tab Content */}
        {selectedTab === 0 ? (
          <div className="space-y-25 mb-40">
            <Overview />
            <Menu />
            <Review />
            <Location />
            <FAQs />
          </div>
        ) : (
          <>
            {selectedTab === 1 && <Menu />}
            {selectedTab === 2 && <Review />}
            {selectedTab === 3 && <Location />}
            {selectedTab === 4 && <div>Condition Section</div>}
            {selectedTab === 5 && <FAQs />}
          </>
        )}
      </div>

      {/* Right Fixed Section */}
      <div className="w-1/3 flex justify-end">
        <div className="h-[calc(100vh-4rem)] w-full p-4 bg-gray-100 sticky top-[4rem]">
          Fixed Content
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
