import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types";
type LayoutPropsType = {
  notes: Note[];
};
const Layout = ({ notes }: LayoutPropsType) => {
  const { id } = useParams();

  const found = notes.find((n) => n.id === id);
  if (!found) return <Navigate to={"/"} />;
  return <Outlet context={found} />;
};

export default Layout;
