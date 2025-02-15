import React, { useState } from "react";
import { List, arrayMove } from "react-movable";
import { DragHandle, Edit, Delete } from "@mui/icons-material";

import UniversalButton from "@/components/ui/UniversalButton";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initialItems = [
  "TR: ULUSAL",
  "TR: SPOR",
  "TR: HABER",
  "TR: SINEMA",
  "TR: COCUK",
  "TR: BELGESEL",
  "TR: MUZIK",
  "TR: RADYO",
  "DK: DANMARK",
];

function Category() {
  const [items, setItems] = useState(initialItems);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "98%",
        }}
      >
        <UniversalButton
          onClick={() => navigate("/dashboard/create_category")}
          height={"55px"}
          children="Create CATEGORY"
        />

        <UniversalButton
          onClick={() => navigate("/dashboard/category")}
          height={"55px"}
          children="SAVE CATEGORY"
        />
      </Box>
      <List
        style={{ width: "98%" }}
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props }) => (
          <ul className="space-y-2" {...props} style={{ width: "98%" }}>
            {children}
          </ul>
        )}
        renderItem={({ value, props }) => (
          <li
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm hover:shadow-md cursor-grab"
            {...props}
          >
            <div className="flex items-center gap-3">
              <DragHandle className="text-gray-500" />
              <span className="text-gray-700 font-medium">{value}</span>
            </div>
            <div className="flex gap-2">
              <button className="p-1 text-blue-500 hover:text-blue-700">
                <Edit fontSize="small" />
              </button>
              <button className="p-1 text-red-500 hover:text-red-700">
                <Delete fontSize="small" />
              </button>
            </div>
          </li>
        )}
      />
    </div>
  );
}

export default Category;
