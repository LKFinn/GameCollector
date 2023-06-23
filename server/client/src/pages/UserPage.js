import React, { useState, useEffect } from "react";
import {
  fetchCurrentBugs,
  fetchGoingExtinctBugs,
} from "../endpoints/bugEndpoints";
import DateTimePicker from "../components/dateTime/DateTimePicker";
import Table from "../components/tables/Table";
import TablesAccordion from "../components/design/TablesAccordion";
import ClockBanner from "../components/design/ClockBanner";
import Grid from "@mui/material/Grid";
import Drawer from "../components/drawers/Drawer";

function UserPage() {
  const [nextMonth, setNextMonth] = useState(() => new Date().getMonth() + 1);
  const [month, setMonth] = useState(() => new Date().getMonth());
  const [hour, setHour] = useState(() => new Date().getHours());
  const [currentBugs, setCurrentBugs] = useState([]);
  const [extinctionBugs, setExtinctionBugs] = useState([]);
  const [isLoadingExtinctionBugs, setIsLoadingExtinctionBugs] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fetchBugsDateTime = async (selectedHour, selectedMonth) => {
    try {
      const bugs = await fetchCurrentBugs(selectedHour, selectedMonth);
      setCurrentBugs(bugs);
    } catch (error) {
      console.log("Error fetching current bugs:", error);
    }
  };

  const fetchGoingExtinctBugsData = async () => {
    try {
      const extinct = await fetchGoingExtinctBugs(nextMonth);
      setExtinctionBugs(extinct);
    } catch (error) {
      console.log("Error fetching going extinct bugs:", error);
    } finally {
      setIsLoadingExtinctionBugs(false);
    }
  };

  const handleHourSelection = (selectedHour) => {
    setHour(selectedHour);
  };

  const handleMonthSelection = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const handleSubmit = () => {
    fetchBugsDateTime(hour, month);
    setIsSubmitted(true);
  };

  useEffect(() => {
    fetchBugsDateTime(hour, month);
    fetchGoingExtinctBugsData();
  }, [nextMonth]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
    >
      <Grid
        item
        xs
      >
        <Drawer
          DateTime={
            <ClockBanner
              onSelectHour={handleHourSelection}
              onSelectMonth={handleMonthSelection}
              onSubmit={handleSubmit}
            />
          }
        />
        {/* <ClockBanner
          onSelectHour={handleHourSelection}
          onSelectMonth={handleMonthSelection}
          onSubmit={handleSubmit}
        /> */}
      </Grid>
      <Grid
        item
        xs={9}
      >
        <TablesAccordion
          details={
            <Table
              type="bugs"
              data={currentBugs}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          }
          title={
            isSubmitted
              ? "The Bugs You Selected By Time"
              : "Bugs Available Based On Your Current Time"
          }
        />
        <TablesAccordion
          details={
            <>
              {isLoadingExtinctionBugs ? (
                <p>Loading extinction bugs...</p>
              ) : (
                <Table
                  type="bugs"
                  data={extinctionBugs}
                  title="Bugs Gone at the End of the Month!"
                  selectedRows={selectedRows}
                  setSelectedRows={setSelectedRows}
                />
              )}
            </>
          }
          title="Catch These Bugs Before They're Gone at the End of the Month!"
        />
      </Grid>
    </Grid>
  );
}

export default UserPage;
