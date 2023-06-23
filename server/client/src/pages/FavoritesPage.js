import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  saveFavorites,
  fetchFavorites,
} from "../endpoints/microServiceEndpoints";
import { fetchAllBugs } from "../endpoints/bugEndpoints";
import Table from "../components/tables/Table";
import transformTableData from "../components/tables/transformTableData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TablesAccordion from "../components/design/TablesAccordion";
import Container from "@mui/material/Container";
import ToolTip from "../components/design/ToolTip";
import MyButton from "../components/design/MyButton";

function FavoritesPage() {
  const [type, setType] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [faves, setFaves] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [saveStatus, setSaveStatus] = useState("");
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [isLoadingBugs, setIsLoadingBugs] = useState(false);
  const auth = useSelector((state) => state.auth);

  const fetchFaves = async () => {
    try {
      setIsLoadingFavorites(true);
      const res = await fetchFavorites(auth._id);
      setFaves(res);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoadingFavorites(false);
    }
  };

  const fetchBugs = async () => {
    try {
      setIsLoadingBugs(true); // Set loading state to true
      const res = await fetchAllBugs();
      setBugs(res);
    } catch (error) {
      console.error("Error fetching bugs:", error);
    } finally {
      setIsLoadingBugs(false);
    }
  };

  const saveFaves = async (type) => {
    const transformedData = transformTableData(selectedRows, type);
    try {
      await saveFavorites(auth._id, transformedData);
      toast.success("Favorites saved successfully!");
    } catch (error) {
      console.error("Error saving favorites:", error);
      toast.error("Error saving favorites. Please try again.");
    }
  };

  return (
    <Container>
      <TablesAccordion
        details={
          <>
            <Table
              type="bugs"
              data={faves}
              title={
                isLoadingFavorites ? <p>Fetching your favorites...</p> : ""
              }
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          </>
        }
        title={
          <div
            onClick={fetchFaves}
            style={{ cursor: "pointer", width: "100%" }}
          >
            Fetch Favorites
          </div>
        }
      />
      <div>
        <TablesAccordion
          details={
            <>
              <Table
                type="bugs"
                data={bugs}
                title={
                  isLoadingBugs ? <p>Loading bugs...</p> : "All Possible Bugs"
                }
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
              <MyButton
                onClick={() => saveFaves("bugs")}
                message="Save Selected"
              />
              {saveStatus === "success" && <p>Successfully saved favorites!</p>}
              {saveStatus === "error" && (
                <p>Error saving favorites. Please try again.</p>
              )}
            </>
          }
          title={
            <div
              onClick={fetchBugs}
              style={{ cursor: "pointer", width: "100%" }}
            >
              Select Some Favorites from all the bugs!
            </div>
          }
        />
      </div>
    </Container>
  );
}

export default FavoritesPage;
